import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import Navbar from './Navbar';


const Alpine = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [user, navigate]);
  console.log(user);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    profession: "",
    phone: "",
    profile: "",
    user_id: user ? user.id : "",
  });

  const [educations, setEducations] = useState([{
    institution: "",
    degree: "",
    country: "",
    city: "",
    field: "",
    diplome: "",
  }]);
  const [experiences, setExperiences] = useState([{
    company: "",
    position: "",
    experienceStartDate: "",
    experienceEndDate: "",
    description: "",
  }]);
  const [skills, setSkills] = useState([{
    skill: "",
    description: "",
  }]);
  const [technicals, setTechnicals] = useState([{
    skill: "",
  }]);
  const [projects, setProjects] = useState([{
    title: "",
    description: "",
    link: "",
  }]);

  async function postResume() {
    const response = await fetch("http://localhost:3000/api/resumes/resume", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalInfo,
        educations,
        experiences,
        skills,
        technicals,
        projects,

      }),
    });
    const resume = await response.json();
    console.log(resume);
    location.href = "/";
  }

  


  // Add education
  function addEducation() {
    setEducations([
      ...educations,
      {
        institution: "",
        degree: "",
        country: "",
        city: "",
        diplome: "",
        field: "",
      },
    ]);
  }
  function addTechnical() {
    setTechnicals([
      ...technicals,
      {
        skill: "",
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
        description: "",
      },
    ]);
  }
  // Add skill
  function addSkill() {
    setSkills([
      ...skills,
      {
        skill: "",
        description: "",
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


  return (
    <>
      <Navbar />
      <div className='flex justify-center'>
        <div x-data="{ step: 1 }">

          <form className='m-3'>
            <div className='rounded border p-3 '>
              <div className='flex justify-center'>
                <h1>Form</h1>
              </div>
              <div x-show="step === 1" >
                <h1 className='flex justify-center'>Personal Information</h1>
                <div className='pt-3'>
                  <label htmlFor="name">Name</label><br />
                  <input className="rounded border py-2 px-3 text-grey-darkest w-[290px]" type="text" id="name" name="name" onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })} />
                </div>
                <div className='pt-3'>
                  <label htmlFor="email">Email</label><br />
                  <input className="rounded border py-2 px-3 text-grey-darkest w-[290px]" type="email" id="email" name="email" onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })} />
                </div>
                <div className='pt-3'>
                  <label htmlFor="phone">Phone</label><br />
                  <input className="rounded border py-2 px-3 text-grey-darkest w-[290px]" type="text" id="phone" name="phone" onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })} />
                </div>
                <div className='pt-3'>
                  <label htmlFor="profession">Profession</label><br />
                  <input className="rounded border py-2 px-3 text-grey-darkest w-[290px]" type="text" id="profession" name="profession" onChange={(e) => setPersonalInfo({ ...personalInfo, profession: e.target.value })} />
                </div>
                <div className='pt-3'>
                  <label htmlFor="profile">Profile</label><br />
                  <textarea className="rounded border py-2 px-3 text-grey-darkest w-[290px]" id="profile" name="profile" onChange={(e) => setPersonalInfo({ ...personalInfo, profile: e.target.value })} />
                </div>
                <div className='flex justify-end'>
                  <button type="button" className='px-[12px] py-[5px] rounded border bg-green-600' x-on:click="step = 2">Next</button>
                </div>
              </div>
              <div x-show="step === 2" >
                <h1 className='flex justify-center'>Educations</h1>
                {educations.map((education, index) => (
                  <div key={index}>
                    <div className='pt-3'>
                      <label htmlFor={`institution-${index}`}>Institution</label><br />
                      <input className="border py-2 px-3 text-grey-darkest w-[290px]" type="text" id={`institution-${index}`} name="institution" value={education.institution} onChange={(e) => {
                        const updatedEducations = [...educations];
                        updatedEducations[index].institution = e.target.value;
                        setEducations(updatedEducations);
                      }} />
                    </div>
                    <div className='pt-3'>
                      <label htmlFor={`country-${index}`}>Country</label><br />
                      <input className="border py-2 px-3 text-grey-darkest w-[290px]" type="text" id={`country-${index}`} name="degree" value={education.country} onChange={(e) => {
                        const updatedEducations = [...educations];
                        updatedEducations[index].country = e.target.value;
                        setEducations(updatedEducations);
                      }} />
                    </div>
                    <div className='pt-3'>
                      <label htmlFor={`city-${index}`}>City</label><br />
                      <input className="border py-2 px-3 text-grey-darkest w-[290px]" type="text" id={`city-${index}`} name="city" value={education.city} onChange={(e) => {
                        const updatedEducations = [...educations];
                        updatedEducations[index].city = e.target.value;
                        setEducations(updatedEducations);
                      }} />
                    </div>
                    <div className='pt-3'>
                      <label htmlFor={`Degree-${index}`}>Degree</label><br />
                      <input className="border py-2 px-3 text-grey-darkest w-[290px]" type="text" id={`Degree-${index}`} name="Degree" value={education.Degree} onChange={(e) => {
                        const updatedEducations = [...educations];
                        updatedEducations[index].degree = e.target.value;
                        setEducations(updatedEducations);
                      }} />
                    </div>
                    <div className='pt-3'>
                      <label htmlFor={`field-${index}`}>field</label><br />
                      <input className="border py-2 px-3 text-grey-darkest w-[290px]" type="text" id={`field-${index}`} name="field" value={education.field} onChange={(e) => {
                        const updatedEducations = [...educations];
                        updatedEducations[index].field = e.target.value;
                        setEducations(updatedEducations);
                      }} />
                    </div>
                    <div className='pt-3'>
                      <label htmlFor={`diplome-${index}`}>diplome</label><br />
                      <input className="border py-2 px-3 text-grey-darkest w-[290px]" type="text" id={`diplome-${index}`} name="diplome" value={education.diplome} onChange={(e) => {
                        const updatedEducations = [...educations];
                        updatedEducations[index].diplome = e.target.value;
                        setEducations(updatedEducations);
                      }} />
                    </div>

                  </div>

                ))}
                <div className='flex justify-center pt-3'>
                  <button onClick={addEducation} type="button" className='px-[12px] py-[5px] rounded border bg-blue-600'>Add Education</button>
                </div>
                <div className='flex justify-between pt-3'>
                  <button type="button" className='px-[12px] py-[5px] rounded border bg-red-600' x-on:click="step = 1">Back</button>

                  <button type="button" className='px-[12px] py-[5px] rounded border bg-green-600' x-on:click="step = 3">Next</button>
                </div>
              </div>
              <div x-show="step === 3" >
                <h1 className='flex justify-center'>Experiences</h1>
                {experiences.map((experience, index) => (
                  <div key={index}>
                    <div className='pt-3'>
                      <label htmlFor={`company-${index}`}>Company</label><br />
                      <input className="border py-2 px-3 text-grey-darkest w-[290px]" type="text" id={`company-${index}`} name="company" value={experience.company} onChange={(e) => {
                        const updatedExperiences = [...experiences];
                        updatedExperiences[index].company = e.target.value;
                        setExperiences(updatedExperiences);
                      }} />
                    </div>
                    <div className='pt-3'>
                      <label htmlFor={`position-${index}`}>Position</label><br />
                      <input className="border py-2 px-3 text-grey-darkest w-[290px]" type="text" id={`position-${index}`} name="position" value={experience.position} onChange={(e) => {
                        const updatedExperiences = [...experiences];
                        updatedExperiences[index].position = e.target.value;
                        setExperiences(updatedExperiences);
                      }} />
                    </div>
                    <div className='pt-3'>
                      <label htmlFor={`experienceStartDate-${index}`}>Start Date</label><br />
                      <input className="border py-2 px-3 text-grey-darkest w-[290px]" type="date" id={`experienceStartDate-${index}`} name="experienceStartDate" value={experience.experienceStartDate} onChange={(e) => {
                        const updatedExperiences = [...experiences];
                        updatedExperiences[index].experienceStartDate = e.target.value;
                        setExperiences(updatedExperiences);
                      }} />
                    </div>
                    <div className='pt-3'>
                      <label htmlFor={`experienceEndDate-${index}`}>End Date</label><br />
                      <input className="border py-2 px-3 text-grey-darkest w-[290px]" type="date" id={`experienceEndDate-${index}`} name="experienceEndDate" value={experience.experienceEndDate} onChange={(e) => {
                        const updatedExperiences = [...experiences];
                        updatedExperiences[index].experienceEndDate = e.target.value;
                        setExperiences(updatedExperiences);
                      }} />
                    </div>
                    <div className='pt-3'>
                      <label htmlFor={`description-${index}`}>description</label><br />
                      <textarea className="border py-2 px-3 text-grey-darkest w-[290px]" type="text" id={`description-${index}`} name="description" value={experience.description} onChange={(e) => {
                        const updatedExperiences = [...experiences];
                        updatedExperiences[index].description = e.target.value;
                        setExperiences(updatedExperiences);
                      }} />
                    </div>
                  </div>
                ))}
                <div className='flex justify-center pt-3'>
                  <button onClick={addExperience} type="button" className='px-[12px] py-[5px] rounded border bg-blue-600'>Add Experience</button>
                </div>
                <div className='flex justify-between pt-3'>
                  <button type="button" className='px-[12px] py-[5px] rounded border bg-red-600' x-on:click="step = 2">Back</button>

                  <button type="button" className='px-[12px] py-[5px] rounded border bg-green-600' x-on:click="step = 4">Next</button>
                </div>
              </div>
              <div x-show="step === 4" >
                <h1 className='flex justify-center'>Skills</h1>
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className='pt-3'>
                      <label htmlFor={`skill-${index}`}>Skill</label><br />
                      <input className="border py-2 px-3 text-grey-darkest w-[290px]" type="text" id={`skill-${index}`} name="skill" value={skill.skill} onChange={(e) => {
                        const updatedSkills = [...skills];
                        updatedSkills[index].skill = e.target.value;
                        setSkills(updatedSkills);
                      }} />
                    </div>
                    <div className='pt-3'>
                      <label htmlFor={`description-${index}`}>Description</label><br />
                      <textarea className="border py-2 px-3 text-grey-darkest w-[290px]" type="text" id={`description-${index}`} name="description" value={skill.description} onChange={(e) => {
                        const updatedSkills = [...skills];
                        updatedSkills[index].description = e.target.value;
                        setSkills(updatedSkills);
                      }} />
                    </div>
                  </div>
                ))}
                <div className='flex justify-center pt-3'>
                  <button onClick={addSkill} type="button" className='px-[12px] py-[5px] rounded border bg-blue-600'>Add Skill</button>
                </div>
                <div className='flex justify-between pt-3'>
                  <button type="button" className='px-[12px] py-[5px] rounded border bg-red-600' x-on:click="step = 3">Back</button>

                  <button type="button" className='px-[12px] py-[5px] rounded border bg-green-600' x-on:click="step = 5">Next</button>
                </div>
              </div>
              <div x-show="step === 5" >
                <h1 className='flex justify-center'>Technical</h1>
                {technicals.map((technical, index) => (
                  <div key={index}>
                    <div className='pt-3'>
                      <label htmlFor={`technical-${index}`}>Technical</label><br />
                      <input className="border py-2 px-3 text-grey-darkest  w-[290px]" type="text" id={`technical-${index}`} name="skill" value={technical.skill} onChange={(e) => {
                        const updatedTechnicals = [...technicals];
                        updatedTechnicals[index].skill = e.target.value;
                        setTechnicals(updatedTechnicals);
                      }} />
                    </div>
                  </div>
                ))}
                <div className='flex justify-center pt-3'>
                  <button onClick={addTechnical} type="button" className='px-[12px] py-[5px] rounded border bg-blue-600'>Add Technical</button>
                </div>
                <div className='flex justify-between pt-3'>
                  <button type="button" className='px-[12px] py-[5px] rounded border bg-red-600' x-on:click="step = 4">Back</button>

                  <button type="button" className='px-[12px] py-[5px] rounded border bg-green-600' x-on:click="step = 6">Next</button>
                </div>
              </div>
              <div x-show="step === 6" >
                <h1 className='flex justify-center'>Projects</h1>
                {projects.map((project, index) => (
                  <div key={index}>
                    <div className='pt-3'>
                      <label htmlFor={`title-${index}`}>Title</label>
                      <input className="border py-2 px-3 text-grey-darkest" type="text" id={`title-${index}`} name="title" value={project.title} onChange={(e) => {
                        const updatedProjects = [...projects];
                        updatedProjects[index].title = e.target.value;
                        setProjects(updatedProjects);
                      }} />
                    </div>
                    <div className='pt-3'>
                      <label htmlFor={`description-${index}`}>Description</label>
                      <textarea className="border py-2 px-3 text-grey-darkest" type="text" id={`description-${index}`} name="description" value={project.description} onChange={(e) => {
                        const updatedProjects = [...projects];
                        updatedProjects[index].description = e.target.value;
                        setProjects(updatedProjects);
                      }} />
                    </div>
                    <div className='pt-3'>
                      <label htmlFor={`link-${index}`}>Link</label>
                      <input className="border py-2 px-3 text-grey-darkest" type="text" id={`link-${index}`} name="link" value={project.link} onChange={(e) => {
                        const updatedProjects = [...projects];
                        updatedProjects[index].link = e.target.value;
                        setProjects(updatedProjects);
                      }} />
                    </div>
                  </div>
                ))}
                <div className='flex justify-center pt-3'>
                  <button onClick={addProject} type="button" className='px-[12px] py-[5px] rounded border bg-blue-600'>Add Project</button>
                </div>
                <div className='flex justify-between pt-3'>
                  <button type="button" className='px-[12px] py-[5px] rounded border bg-red-600' x-on:click="step = 5">Back</button>
                  <Link to={'/list'}>
                    <button type="button" className='px-[12px] py-[5px] rounded border bg-green-600' onClick={postResume}>Save</button>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>

  )
}

export default Alpine