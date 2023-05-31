

const express = require('express');
const Resume = require('./models/resume');
const resumesController = require('./controllers/resumes')

require('dotenv').config() 
const mongoose = require('mongoose');

const app = express();
const mongoURI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3001;


const cors = require('cors')


const methodOverride = require('method-override');

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

mongoose.connect(mongoURI, { useNewUrlParser: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.use(express.urlencoded({extended:false})); // extended: false - does not allow nested objects in query strings
app.use(methodOverride('_method'));
app.use(express.json()); //use .json(), not .urlencoded()
app.use(express.static('public')) // we need to tell express to use the public directory for static files... this way our app will find index.html as the route of the application! We can then attach React to that file!
// app.use(cors())
app.use(cors( { origin: '*' })) // used to whitelist requests

// Routes
app.use('/resume', resumesController)




app.listen(PORT, () => {
  console.log('listening');
});


//  "mongodb": "^5.4.0",