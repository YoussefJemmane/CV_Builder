const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const resumeRoutes = require('./routes/resume');
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');
app.use('/api/resumes', resumeRoutes);


const db = async() =>{
  try{
    const con = await mongoose.connect('mongodb://127.0.0.1:27017/resumeDB')
    console.log("Connection Successfull ",con.connection.host);
  }catch(err){
    console.log(err);
  }
}
db()
app.get('/', (req, res) => {
  res.render('home');
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
