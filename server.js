

const express = require('express');

require('dotenv').config() 
const mongoose = require('mongoose');

// Environmental Varibles
const app = express()
//const mongoURI = process.env.MONGODB_URI
//const PORT = process.env.PORT || 3001


//include the method-override package place this where you instructor places it
const methodOverride = require('method-override');

//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));


app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

//useUnifiedTopology: true

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.use(methodOverride('_method'));

const Resume = require('./models/resume')

// Index
app.get('/resume', (req, res)=>{
  Resume.find({}, (error, allResumes)=>{
      res.render('Index', {
          resume: allResumes
      });
  });
});

// Delete
app.delete('/resume/:id', (req, res)=>{
  Resume.findByIdAndRemove(req.params.id, (err, deletedResume)=>{
      res.json(deletedResume)
  })
});

// Update
app.put('/resume/:id', (req, res)=>{
  Resume.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedResume)=>{
      res.json(updatedResume)
  })
});

// Show
app.get('/resume/:id', (req, res)=>{
  Resume.findById(req.params.id, (err, foundResume)=>{
      res.json(foundResume)
  })
})


// Create
app.post('/resume', (req, res) => {
    Resume.create(req.body, (error, createdResume)=>{
      console.log(error)
      res.json(createdResume)
    });
});

app.get('/resume/new', (req, res) => {
  res.render('New');
});



app.listen(process.env.PORT, () => {
  console.log('listening');
});