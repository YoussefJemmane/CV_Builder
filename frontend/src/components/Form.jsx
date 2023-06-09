import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import Navbar from './Navbar';
const Form = () => {
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
    navigate("/list");
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
        country: "",
        city: "",
        diplome: "",
        field: "",
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
  function addTechnical() {
    setTechnicals([
      ...technicals,
      {
        skill: "",
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

  return (
    <>
      <Navbar />
      <div className=" bg-base-200  min-h-screen">
        <div className='flex flex-wrap items-center justify-center '>
          <div x-data="{ step: 1 }">
            <form action="">
              <section class=" dark:bg-gray-900" x-show="step === 1">
                <div class="flex flex-wrap items-center justify-center p-[50px]" >
                  <div className="card w-96 bg-base-100 shadow-xl" data-theme="emerald">
                    <div className="card-body">
                      <h2 className="card-title">Personal Info</h2>
                      <div className="space-y-4 md:space-y-6" >
                        <div>
                          <label htmlFor="name" className="block mb-2 text-sm font-medium  dark:text-white">Your Name</label>
                          <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jhon Doe" required="" onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })} />
                        </div>
                        <div>
                          <label htmlFor="email" className="block mb-2 text-sm font-medium  dark:text-white">Your email</label>
                          <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block mb-2 text-sm font-medium dark:text-white">Your Phone</label>
                          <input type="text" name="phone" id="phone" placeholder="060000000" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
                          />
                        </div>
                        <div>
                          <label htmlFor="profession" className="block mb-2 text-sm font-medium dark:text-white">Your Profession</label>
                          <input type="text" name="profession" id="profession" placeholder="Developer" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e) => setPersonalInfo({ ...personalInfo, profession: e.target.value })}
                          />
                        </div>
                        <div>
                          <label htmlFor="profile" className="block mb-2 text-sm font-medium dark:text-white">Your Profile</label>
                          <textarea type="text" name="profile" id="profile" placeholder="I am Developer who workes remotely" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e) => setPersonalInfo({ ...personalInfo, profile: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex justify-center  pb-4'>
                  <button type='button' className='btn btn-primary mr-[-170px]' data-theme="emerald" x-on:click="step = 2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" /></svg></button>
                </div>
              </section>
              <section className=" dark:bg-gray-900" x-show="step === 2">
                <div className="flex flex-wrap items-center justify-center p-[50px]" >
                  {educations.map((education, index) => (
                    <div className="card w-96 bg-base-100 shadow-xl m-4" data-theme="emerald">
                      <div className="card-body">
                        <h2 className="card-title">Educations</h2>
                        <div className="space-y-4 md:space-y-6" >
                          <div>
                            <label htmlFor={`institution-${index}`} className="block mb-2 text-sm font-medium  dark:text-white">Your Insititution</label>
                            <input type="text" name="institution" id={`institution-${index}`} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="MIT" required="" value={education.institution} onChange={(e) => {
                              const updatedEducations = [...educations];
                              updatedEducations[index].institution = e.target.value;
                              setEducations(updatedEducations);
                            }} />
                          </div>
                          <div>
                            <label htmlFor={`country-${index}`} className="block mb-2 text-sm font-medium  dark:text-white">Your Country</label>
                            <input type="text" name="country" id={`country-${index}`} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="USA" required="" value={education.country} onChange={(e) => {
                              const updatedEducations = [...educations];
                              updatedEducations[index].country = e.target.value;
                              setEducations(updatedEducations);
                            }} />
                          </div>
                          <div>
                            <label htmlFor={`city-${index}`} className="block mb-2 text-sm font-medium dark:text-white">Your City</label>
                            <input type="text" name="city" id={`city-${index}`} placeholder="Massachussets" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e) => {
                              const updatedEducations = [...educations];
                              updatedEducations[index].city = e.target.value;
                              setEducations(updatedEducations);
                            }}
                            />
                          </div>
                          <div>
                            <label htmlFor={`degree-${index}`} className="block mb-2 text-sm font-medium dark:text-white">Your Degree</label>
                            <input type="number" name="degree" id={`degree-${index}`} placeholder="15.76" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e) => {
                              const updatedEducations = [...educations];
                              updatedEducations[index].degree = e.target.value;
                              setEducations(updatedEducations);
                            }}
                            />
                          </div>
                          <div>
                            <label htmlFor={`field-${index}`} className="block mb-2 text-sm font-medium dark:text-white">Your Field</label>
                            <input type="text" name="field" id={`field-${index}`} placeholder="Computer Science" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e) => {
                              const updatedEducations = [...educations];
                              updatedEducations[index].field = e.target.value;
                              setEducations(updatedEducations);
                            }}
                            />
                          </div>
                          <div>
                            <label htmlFor={`diplome-${index}`} className="block mb-2 text-sm font-medium dark:text-white">Your Diplome</label>
                            <input type="text" name="diplome" id={`diplome-${index}`} placeholder="Bachelor" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e) => {
                              const updatedEducations = [...educations];
                              updatedEducations[index].diplome = e.target.value;
                              setEducations(updatedEducations);
                            }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='flex justify-center  pb-4'>
                  <button type="button" className='btn btn-accent mr-6' data-theme="emerald" x-on:click="step = 1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" transform="scale(-1, 1)">
                    <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                  </svg>
                  </button>
                  <button onClick={addEducation} type="button" className='btn btn-primary mr-6'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M12 5v14M5 12h14" stroke="#000" stroke-width="2" stroke-linecap="round" />
                  </svg>
                  </button>
                  <button type="button" className='btn btn-primary ' data-theme="emerald" x-on:click="step = 3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" /></svg></button>
                </div>
              </section>
              <section className=" dark:bg-gray-900" x-show="step === 3">
                <div className="flex flex-wrap items-center justify-center p-[50px]" >
                  {experiences.map((experience, index) => (
                    <div className="card w-96 bg-base-100 shadow-xl m-4" data-theme="emerald">
                      <div className="card-body">
                        <h2 className="card-title">Experiences</h2>
                        <div className="space-y-4 md:space-y-6" >
                          <div>
                            <label htmlFor={`company-${index}`} className="block mb-2 text-sm font-medium  dark:text-white">Your Company</label>
                            <input type="text" name="company" id={`company-${index}`} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Meta" required="" value={experience.company} onChange={(e) => {
                              const updatedexperiences = [...experiences];
                              updatedexperiences[index].company = e.target.value;
                              setExperiences(updatedexperiences);
                            }} />
                          </div>
                          <div>
                            <label htmlFor={`position-${index}`} className="block mb-2 text-sm font-medium  dark:text-white">Your position</label>
                            <input type="text" name="position" id={`position-${index}`} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Senior Software Developer" required="" value={experience.position} onChange={(e) => {
                              const updatedexperiences = [...experiences];
                              updatedexperiences[index].position = e.target.value;
                              setExperiences(updatedexperiences);
                            }} />
                          </div>
                          <div>
                            <label htmlFor={`experienceStartDate-${index}`} className="block mb-2 text-sm font-medium dark:text-white">Your Start Date</label>
                            <input type="date" name="experienceStartDate" id={`experienceStartDate-${index}`} placeholder="Massachussets" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e) => {
                              const updatedexperiences = [...experiences];
                              updatedexperiences[index].experienceStartDate = e.target.value;
                              setExperiences(updatedexperiences);
                            }}
                            />
                          </div>
                          <div>
                            <label htmlFor={`experienceEndDate-${index}`} className="block mb-2 text-sm font-medium dark:text-white">Your End Date</label>
                            <input type="date" name="experienceEndDate" id={`experienceEndDate-${index}`} placeholder="Massachussets" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e) => {
                              const updatedexperiences = [...experiences];
                              updatedexperiences[index].experienceEndDate = e.target.value;
                              setExperiences(updatedexperiences);
                            }}
                            />
                          </div>
                          <div>
                            <label htmlFor={`description-${index}`} className="block mb-2 text-sm font-medium dark:text-white">Your description</label>
                            <textarea type="description" name="description" id={`description-${index}`} placeholder="I built a Full Stack web application using MERN Stack" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e) => {
                              const updatedexperiences = [...experiences];
                              updatedexperiences[index].description = e.target.value;
                              setExperiences(updatedexperiences);
                            }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='flex justify-center  pb-4'>
                  <button type="button" className='btn btn-accent mr-6' data-theme="emerald" x-on:click="step = 2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" transform="scale(-1, 1)">
                    <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                  </svg>
                  </button>
                  <button onClick={addExperience} type="button" className='btn btn-primary mr-6'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M12 5v14M5 12h14" stroke="#000" stroke-width="2" stroke-linecap="round" />
                  </svg>
                  </button>
                  <button type="button" className='btn btn-primary ' data-theme="emerald" x-on:click="step = 4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" /></svg></button>
                </div>
              </section>
              <section className=" dark:bg-gray-900" x-show="step === 4">
                <div className="flex flex-wrap items-center justify-center p-[50px]" >
                  {projects.map((project, index) => (
                    <div className="card w-96 bg-base-100 shadow-xl m-4" data-theme="emerald">
                      <div className="card-body">
                        <h2 className="card-title">Projects</h2>
                        <div className="space-y-4 md:space-y-6" >
                          <div>
                            <label htmlFor={`title-${index}`} className="block mb-2 text-sm font-medium  dark:text-white">Your Project Name</label>
                            <input type="text" name="title" id={`title-${index}`} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="CV Builder application" required="" value={project.title} onChange={(e) => {
                              const updatedprojects = [...projects];
                              updatedprojects[index].title = e.target.value;
                              setProjects(updatedprojects);
                            }} />
                          </div>
                          <div>
                            <label htmlFor={`description-${index}`} className="block mb-2 text-sm font-medium  dark:text-white">Your description</label>
                            <textarea type="text" name="description" id={`description-${index}`} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="this is an application that storing information and download a cv about those infos" required="" value={project.description} onChange={(e) => {
                              const updatedprojects = [...projects];
                              updatedprojects[index].description = e.target.value;
                              setProjects(updatedprojects);
                            }} />
                          </div>
                          <div>
                            <label htmlFor={`link-${index}`} className="block mb-2 text-sm font-medium dark:text-white">Your Link</label>
                            <input type="text" name="link" id={`link-${index}`} placeholder="https://github.com/YoussefJemmane/CV_Builder" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e) => {
                              const updatedprojects = [...projects];
                              updatedprojects[index].link = e.target.value;
                              setProjects(updatedprojects);
                            }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='flex justify-center  pb-4'>
                  <button type="button" className='btn btn-accent mr-6' data-theme="emerald" x-on:click="step = 3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" transform="scale(-1, 1)">
                    <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                  </svg>
                  </button>
                  <button onClick={addProject} type="button" className='btn btn-primary mr-6'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M12 5v14M5 12h14" stroke="#000" stroke-width="2" stroke-linecap="round" />
                  </svg>
                  </button>
                  <button type="button" className='btn btn-primary ' data-theme="emerald" x-on:click="step = 5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" /></svg></button>
                </div>
              </section>
              <section className=" dark:bg-gray-900" x-show="step === 5">
                <div className="flex flex-wrap items-center justify-center p-[50px]" >
                  {technicals.map((technical, index) => (
                    <div className="card w-96 bg-base-100 shadow-xl m-4" data-theme="emerald">
                      <div className="card-body">
                        <h2 className="card-title">technicals</h2>
                        <div className="space-y-4 md:space-y-6" >
                          <div>
                            <label htmlFor={`skill-${index}`} className="block mb-2 text-sm font-medium  dark:text-white">Your skill</label>
                            <input type="text" name="skill" id={`skill-${index}`} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Java" required="" value={technical.skill} onChange={(e) => {
                              const updatedtechnicals = [...technicals];
                              updatedtechnicals[index].skill = e.target.value;
                              setTechnicals(updatedtechnicals);
                            }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='flex justify-center  pb-4'>
                  <button type="button" className='btn btn-accent mr-6' data-theme="emerald" x-on:click="step = 4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" transform="scale(-1, 1)">
                    <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                  </svg>
                  </button>
                  <button onClick={addTechnical} type="button" className='btn btn-primary mr-6'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M12 5v14M5 12h14" stroke="#000" stroke-width="2" stroke-linecap="round" />
                  </svg>
                  </button>
                  <button type="button" className='btn btn-primary ' data-theme="emerald" x-on:click="step = 6"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" /></svg></button>
                </div>
              </section>
              <section className=" dark:bg-gray-900" x-show="step === 6">
                <div className="flex flex-wrap items-center justify-center p-[50px]" >
                  {skills.map((skill, index) => (
                    <div className="card w-96 bg-base-100 shadow-xl m-4" data-theme="emerald">
                      <div className="card-body">
                        <h2 className="card-title">skills</h2>
                        <div className="space-y-4 md:space-y-6" >
                          <div>
                            <label htmlFor={`skill-${index}`} className="block mb-2 text-sm font-medium  dark:text-white">Your skill</label>
                            <input type="text" name="skill" id={`skill-${index}`} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Team Worker" required="" value={skill.skill} onChange={(e) => {
                              const updatedskills = [...skills];
                              updatedskills[index].skill = e.target.value;
                              setSkills(updatedskills);
                            }} />
                          </div>
                          <div>
                            <label htmlFor={`description-${index}`} className="block mb-2 text-sm font-medium  dark:text-white">Your description</label>
                            <textarea type="text" name="description" id={`description-${index}`} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="I can Work with a team and contribute in an open source project" required="" value={skill.description} onChange={(e) => {
                              const updatedskills = [...skills];
                              updatedskills[index].description = e.target.value;
                              setSkills(updatedskills);
                            }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='flex justify-center  pb-4'>
                  <button type="button" className='btn btn-accent mr-6' data-theme="emerald" x-on:click="step = 4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" transform="scale(-1, 1)">
                    <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                  </svg>
                  </button>
                  <button onClick={addSkill} type="button" className='btn btn-primary mr-6'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M12 5v14M5 12h14" stroke="#000" stroke-width="2" stroke-linecap="round" />
                  </svg>
                  </button>
                  <a type="button" className='btn btn-primary ' data-theme="emerald" onClick={postResume}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" /></svg></a>
                </div>
              </section>

            </form>
          </div>
        </div>
      </div>

    </>

  )
}

export default Form
