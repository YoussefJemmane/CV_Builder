const puppeteer = require('puppeteer-core');
const Resume = require('../models/ResumeModel');

const ResumeList = async (req, res) => {
  const user_id = req.path.slice(9);
  console.log(user_id);
  try {
    const resumes = await Resume.find({ "personalInfo.user_id": user_id });
    console.log(resumes);
    res.json(resumes);
  } catch (error) {
    console.error("Error while querying resumes:", error);
  }

};



const ShowResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({ _id: req.params.id });
    res.json(resume);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const ShowTemplates = async (req, res) => {
  const resume = await Resume.findById(req.params.id);
  res.json(resume);
}

const DeleteResume = async (req, res) => {
  try {
    await Resume.findByIdAndDelete(req.params.id);
    res.redirect('http://localhost:5173/list');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
const EditResume = async (req, res) => {
  try {
    await Resume.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('http://localhost:5173/list');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
  const CreateResume = async (req, res) => {

    const newResume = new Resume(req.body);
    console.log(req.body);
    try {
      await newResume.save();
      res.redirect('http://localhost:5173/list');
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  const DownloadTemplate1 = async (req, res) => {
    const resume = await Resume.findById(req.params.id);
    console.log(req.params.id);
    const browser = await puppeteer.launch({ headless: "new", executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe' });
    const page = await browser.newPage();
    await page.goto(`http://localhost:5173/download/template1/${resume._id}`, { waitUntil: 'networkidle0' });
    const pdf = await page.pdf({ format: 'A4' });

    res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length, 'Content-Disposition': `attachment; filename=${resume.personalInfo.name}_Resume.pdf` });
    res.send(pdf);

    await browser.close();
  }
  const DownloadTemplate2 = async (req, res) => {
    const resume = await Resume.findById(req.params.id);
    const browser = await puppeteer.launch({ headless: "new", executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe' });
    const page = await browser.newPage();
    await page.goto(`http://localhost:5173/download/template2/${resume._id}`, { waitUntil: 'networkidle0' });
    const pdf = await page.pdf({ format: 'A4' });

    res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length, 'Content-Disposition': `attachment; filename=${resume.personalInfo.name}_Resume.pdf` });
    res.send(pdf);

    await browser.close();
  }
  const DownloadTemplate3 = async (req, res) => {
    const resume = await Resume.findById(req.params.id);
    const browser = await puppeteer.launch({ headless: "new", executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe' });
    const page = await browser.newPage();
    await page.goto(`http://localhost:5173/download/template3/${resume._id}`, { waitUntil: 'networkidle0' });
    const pdf = await page.pdf({ format: 'A4' });

    res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length, 'Content-Disposition': `attachment; filename=${resume.personalInfo.name}_Resume.pdf` });
    res.send(pdf);

    await browser.close();
  }

  module.exports = {
    ResumeList,
    ShowResume,
    ShowTemplates,
    DeleteResume,
    CreateResume,
    DownloadTemplate1,
    DownloadTemplate2,
    DownloadTemplate3,
    EditResume
  };