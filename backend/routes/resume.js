const express = require('express');
const router = express.Router();
const Resume = require('../models/resume');
const puppeteer = require('puppeteer');


router.get('/', async (req, res) => {
  try {
    const resumes = await Resume.find({});
    res.json(resumes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// show a resume
router.get('/:id', async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    res.json(resume);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get('/:id/template', async (req, res) => {
  const resume = await Resume.findById(req.params.id);
  res.json(resume);
});
// Delete a resume
router.get('/delete/:id', async (req, res) => {
  try {
    const resume = await Resume.findByIdAndDelete(req.params.id);
    res.redirect('http://localhost:5173/list'); 
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Create a new resume 
router.post('/', async (req, res) => {
  
  const newResume = new Resume(req.body);
  console.log(req.body);
  try {
    
    const savedResume = await newResume.save();
    
    
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Update an existing resume
router.get('/:id/update', async (req, res) => {
  const resume = await Resume.findById(req.params.id);
  res.json(resume);
});
router.post('/:id', async (req, res) => {
  try {
    const updatedResume = await Resume.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedResume);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



router.get('/:id/template1/download', async (req, res) => {
  const resumeId = req.params.id;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`http://localhost:5173/download/template1/${resumeId}`, { waitUntil: 'networkidle0' });
  const pdf = await page.pdf({ format: 'A4' });

  res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length ,'Content-Disposition': `attachment; filename=CV_Resume.pdf`});
  res.send(pdf);

  await browser.close();
});

router.get('/:id/template2/download', async (req, res) => {
  const resume = await Resume.findById(req.params.id);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`http://localhost:5173/download/template2/${resume._id}`, { waitUntil: 'networkidle0' });
  const pdf = await page.pdf({ format: 'A4' });

  res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length ,'Content-Disposition': `attachment; filename=${resume.personalInfo.name}_Resume.pdf`});
  res.send(pdf);

  await browser.close();
});
router.get('/:id/template3/download', async (req, res) => {
  const resume = await Resume.findById(req.params.id);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`http://localhost:5173/download/template3/${resume._id}`, { waitUntil: 'networkidle0' });
  const pdf = await page.pdf({ format: 'A4' });

  res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length ,'Content-Disposition': `attachment; filename=${resume.personalInfo.name}_Resume.pdf`});
  res.send(pdf);

  await browser.close();
});

module.exports = router;
