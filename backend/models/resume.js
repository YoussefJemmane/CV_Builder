const mongoose = require('mongoose');
const educationsSchema = new mongoose.Schema({
  institution: String,
  degree: String,
  educationStartDate: Date,
  educationEndDate: Date,
});

const experiencesSchema = new mongoose.Schema({
  company: String,
  position: String,
  experienceStartDate: Date,
  experienceEndDate: Date,
});

const skillsSchema = new mongoose.Schema({
  skill: String,
});

const projectsSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
});
const resumeSchema = new mongoose.Schema({
  personalInfo: {
    name: String,
    email: String,
    address: String,
    phone: String,
    date_of_birth: Date,
  },
  educations: [educationsSchema],
  experiences: [experiencesSchema],
  skills: [skillsSchema],
  projects: [projectsSchema],
});




const Resume = mongoose.model('Resume', resumeSchema);
module.exports = Resume;
