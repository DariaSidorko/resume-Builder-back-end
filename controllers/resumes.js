

const express = require('express');
const router = express.Router();
const Resume = require('../models/resume.js')


// Index
router.get('/', (req, res)=>{
  Resume.find({}, (error, allResumes)=>{
    res.json(allResumes)
  });
});

// Delete
router.delete('/:id', (req, res)=>{
  Resume.findByIdAndRemove(req.params.id, (err, deletedResume)=>{
      res.json(deletedResume)
  })
});

// Update
router.put('/:id', (req, res)=>{
  Resume.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedResume)=>{
      res.json(updatedResume)
  })
});

// Show
router.get('/:id', (req, res)=>{
  Resume.findById(req.params.id, (err, foundResume)=>{
      res.json(foundResume)
  })
})


// Create
router.post('/', (req, res) => {
  console.log(req.body)
    Resume.create(req.body, (error, createdResume)=>{
      console.log(createdResume)
      res.json(createdResume)
    });
});


module.exports = router;