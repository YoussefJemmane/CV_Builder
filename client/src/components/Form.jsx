import React, { useState } from "react";

export default function ResumeForm() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    date_of_birth: "",
  });
  const [educations, setEducations] = useState([{
    institution: "",
    degree: "",
    educationStartDate: "",
    educationEndDate: "",
  }]);
  const [experiences, setExperiences] = useState([{
    company: "",
    position: "",
    experienceStartDate: "",
    experienceEndDate: "",
  }]);
  const [skills, setSkills] = useState([{
    skill: "",
  }]);
  const [projects, setProjects] = useState([{
    title: "",
    description: "",
    link: "",
  }]);




  // Handle form submission

  async function postResume() {
    const response = await fetch("http://localhost:3000/api/resumes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalInfo,
        educations,
        experiences,
        skills,
        projects,
      }),
    });
    const resume = await response.json();
    console.log(resume);
  }



  // Add education
  function addEducation() {
    setEducations([
      ...educations,
      {
        institution: "",
        degree: "",
        educationStartDate: "",
        educationEndDate: "",
      },
    ]);
  }

  // Add experience
  function addExperience() {
    setExperiences([
      ...experiences,
      {
        company: "",
        position: "",
        experienceStartDate: "",
        experienceEndDate: "",
      },
    ]);
  }
  // Add skill
  function addSkill() {
    setSkills([
      ...skills,
      {
        skill: "",
      },
    ]);
  }

  // Add project
  function addProject() {
    setProjects([
      ...projects,
      {
        title: "",
        description: "",
        link: "",
      },
    ]);
  }





// Render input fields for each field in the schema
return (
  <div>
    <h3>Resume Form</h3>
    <a href="/">Return </a>
    <form onSubmit={postResume}>
      <div>
        <h4>Personal Info</h4>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })} />
        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" onChange={(e) => setPersonalInfo({ ...personalInfo, address: e.target.value })} />
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" name="phone" onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })} />
        <label htmlFor="date_of_birth">Date of Birth</label>
        <input type="date" id="date_of_birth" name="date_of_birth" onChange={(e) => setPersonalInfo({ ...personalInfo, date_of_birth: e.target.value })} />

      </div>
      <div>


        {educations.map((education, index) => (
          <div key={index}>
            <h4>Education {index + 1}</h4>
            <label htmlFor={`institution-${index}`}>Institution</label>
            <input type="text" id={`institution-${index}`} name="institution" value={education.institution} onChange={(e) => {
              const updatedEducations = [...educations];
              updatedEducations[index].institution = e.target.value;
              setEducations(updatedEducations);
            }} />
            <label htmlFor={`degree-${index}`}>Degree</label>
            <input type="text" id={`degree-${index}`} name="degree" value={education.degree} onChange={(e) => {
              const updatedEducations = [...educations];
              updatedEducations[index].degree = e.target.value;
              setEducations(updatedEducations);
            }} />
            <label htmlFor={`educationStartDate-${index}`}>Start Date</label>
            <input type="date" id={`educationStartDate-${index}`} name="educationStartDate" value={education.educationStartDate} onChange={(e) => {
              const updatedEducations = [...educations];
              updatedEducations[index].educationStartDate = e.target.value;
              setEducations(updatedEducations);
            }} />
            <label htmlFor={`educationEndDate-${index}`}>End Date</label>
            <input type="date" id={`educationEndDate-${index}`} name="educationEndDate" value={education.educationEndDate} onChange={(e) => {
              const updatedEducations = [...educations];
              updatedEducations[index].educationEndDate = e.target.value;
              setEducations(updatedEducations);
            }} />
          </div>
        ))}

        <button type="button" onClick={addEducation}>Add Education</button>
      </div>
      <div>
        {experiences.map((experience, index) => (
          <div key={index}>
            <h4>Experience {index + 1}</h4>
            <label htmlFor={`company-${index}`}>Company</label>
            <input type="text" id={`company-${index}`} name="company" value={experience.company} onChange={(e) => {
              const updatedExperiences = [...experiences];
              updatedExperiences[index].company = e.target.value;
              setExperiences(updatedExperiences);
            }} />
            <label htmlFor={`position-${index}`}>Position</label>
            <input type="text" id={`position-${index}`} name="position" value={experience.position} onChange={(e) => {
              const updatedExperiences = [...experiences];
              updatedExperiences[index].position = e.target.value;
              setExperiences(updatedExperiences);
            }} />
            <label htmlFor={`experienceStartDate-${index}`}>Start Date</label>
            <input type="date" id={`experienceStartDate-${index}`} name="experienceStartDate" value={experience.experienceStartDate} onChange={(e) => {
              const updatedExperiences = [...experiences];
              updatedExperiences[index].experienceStartDate = e.target.value;
              setExperiences(updatedExperiences);
            }} />
            <label htmlFor={`experienceEndDate-${index}`}>End Date</label>
            <input type="date" id={`experienceEndDate-${index}`} name="experienceEndDate" value={experience.experienceEndDate} onChange={(e) => {
              const updatedExperiences = [...experiences];
              updatedExperiences[index].experienceEndDate = e.target.value;
              setExperiences(updatedExperiences);
            }} />
          </div>
        ))}
        <button type="button" onClick={addExperience}>Add Experience</button>
      </div>
      <div>
        {skills.map((skill, index) => (
          <div key={index}>
            <h4>Skill {index + 1}</h4>
            <label htmlFor={`skill-${index}`}>Skill</label>
            <input type="text" id={`skill-${index}`} name="skill" value={skill.skill} onChange={(e) => {
              const updatedSkills = [...skills];
              updatedSkills[index].skill = e.target.value;
              setSkills(updatedSkills);
            }} />
          </div>
        ))}
        <button type="button" onClick={addSkill}>Add Skill</button>
      </div>
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <h4>Project {index + 1}</h4>
            <label htmlFor={`title-${index}`}>Title</label>
            <input type="text" id={`title-${index}`} name="title" value={project.title} onChange={(e) => {
              const updatedProjects = [...projects];
              updatedProjects[index].title = e.target.value;
              setProjects(updatedProjects);
            }} />
            <label htmlFor={`description-${index}`}>Description</label>
            <input type="text" id={`description-${index}`} name="description" value={project.description} onChange={(e) => {
              const updatedProjects = [...projects];
              updatedProjects[index].description = e.target.value;
              setProjects(updatedProjects);
            }} />
            <label htmlFor={`link-${index}`}>Link</label>
            <input type="text" id={`link-${index}`} name="link" value={project.link} onChange={(e) => {
              const updatedProjects = [...projects];
              updatedProjects[index].link = e.target.value;
              setProjects(updatedProjects);
            }} />
          </div>
        ))}
        <button type="button" onClick={addProject}>Add Project</button>
      </div>



      <input type="submit" value="Submit" />
    </form>
  </div>
);
}
