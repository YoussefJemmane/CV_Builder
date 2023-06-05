const mongoose = require('mongoose');
const educationsSchema = new mongoose.Schema({
  institution: String,
  country: String,
  city: String,
  degree: String,
  field: String,
  diplome: String,
});

const experiencesSchema = new mongoose.Schema({
  company: String,
  position: String,
  experienceStartDate: Date,
  experienceEndDate: Date,
  description: String,
});

const skillsSchema = new mongoose.Schema({
  skill: String,
  description: String,
});

const technicalSchema = new mongoose.Schema({
  skill: String,
})
const projectsSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
});

const resumeSchema = new mongoose.Schema({
  personalInfo: {
    name: String,
    email: String,
    phone: String,
    profession: String,
    profile: String,
    user_id: String,
  },
  educations: [educationsSchema],
  technicals: [technicalSchema],
  experiences: [experiencesSchema],
  skills: [skillsSchema],
  projects: [projectsSchema],
});




const Resume = mongoose.model('Resume', resumeSchema);
module.exports = Resume;
