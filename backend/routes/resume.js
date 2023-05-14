const express = require('express');
const router = express.Router();
const Resume = require('../models/resume');
const puppeteer = require('puppeteer');
const resumeTemplate1 = require('../templates/resumeTemplate1');
const resumeTemplate2 = require('../templates/resumeTemplate2');
router.use(express.static('public'));

router.get('/', async (req, res) => {
  try {
    const resumes = await Resume.find({});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id/template', async (req, res) => {
  const resume = await Resume.findById(req.params.id);
  res.render('resume/template', { resume });
});
// Create a new resume 
router.post('/', async (req, res) => {
  
  const newResume = new Resume(req.body);
  console.log(req.body);
  try {
    
    const savedResume = await newResume.save();
    res.redirect(`/api/resumes/${savedResume.id}/template`);
    
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Update an existing resume
router.get('/:id/update', async (req, res) => {
  const resume = await Resume.findById(req.params.id);
  res.render('resume/edit', { resume });
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
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(resumeTemplate1(resume), {
      waitUntil: 'networkidle0',
    });

    const pdfBuffer = await page.pdf({ format: 'A4' });
    await browser.close();

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Length': pdfBuffer.length,
      'Content-Disposition': `attachment; filename=${resume.personalInfo.name}_Resume.pdf`,
    });

    res.send(pdfBuffer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get('/:id/template2/download', async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(resumeTemplate2(resume), {
      waitUntil: 'networkidle0',
    });

    const pdfBuffer = await page.pdf({ format: 'A4' });
    await browser.close();

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Length': pdfBuffer.length,
      'Content-Disposition': `attachment; filename=${resume.personalInfo.name}_Resume.pdf`,
    });

    res.send(pdfBuffer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
