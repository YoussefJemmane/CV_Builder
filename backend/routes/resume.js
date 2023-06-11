const express = require('express');
const router = express.Router();

const { ResumeList, ShowResume, DeleteResume, ShowTemplates, CreateResume, DownloadTemplate1, DownloadTemplate2, DownloadTemplate3, EditResume } = require('../controller/ResumeController');
const requireAuth = require('../middleware/requireAuth')


router.get('/resume/:id', ShowResume);

router.get('/resumes/:userid', ResumeList);

router.get('/resume/:id/template', ShowTemplates);

router.get('/resume/:id/delete', DeleteResume);

router.post('/resume', CreateResume);

router.post('/resume/update/:id', EditResume);

router.get('/resume/:id/template1/download', DownloadTemplate1);

router.get('/resume/:id/template2/download', DownloadTemplate2);

router.get('/resume/:id/template3/download', DownloadTemplate3);

module.exports = router;
