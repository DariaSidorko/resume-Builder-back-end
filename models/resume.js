const mongoose = require('mongoose');


const resumeSchema = new mongoose.Schema({
    //readyToEat: Boolean
      name: String,
      title: String,
      email: String ,
      phone: Number , 
      website: String,
      linkedIn: String,
      gitHub: String
      // profileSummary: { type: String, required: false },
      // education: [ { 
      // degree: { type: String, required: false },
      // school: { type: String, required: false },
      // location: { type: String, required: false },
      // dateStart: { type: Date, required: false },
      // dateEnd: { type: Date, required: false },
      // comments: { type: String, required: false }
      // }],
      // Skills: [],
      // experience: [{
      // title: { type: String, required: false },
      // companyName: { type: String, required: false },
      // location: { type: String, required: false },
      // dateStart: { type: Date, required: false },
      // dateEnd: { type: Date, required: false },
      // details: []
      //}]

});

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;

