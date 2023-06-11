import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DownloadTemplate1 = () => {
  const [resume, setResume] = useState(null);
  const resumeId = useParams().id;
  useEffect(() => {
    async function getData() {
      const response = await fetch(`http://localhost:3000/api/resumes/resume/${resumeId}`)
      const data = await response.json();
      setResume(data)
    }
    getData()
    console.log(resume);
  }, [])
  return (
    <div>
      <div className='flex justify-center '>
        <div className='w-[800px] '>
          <div className='flex justify-center'>
            <h1 className='pt-2 font-bold uppercase underline text-2xl'>{resume && resume.personalInfo.name}</h1>
          </div>

          <div className='flex justify-center'>
            <p className='pt-2 font-bold text-cyan-700'>
              <a href={`mailto:${resume && resume.personalInfo.email}`}>{resume && resume.personalInfo.email}</a>
              <a className='pl-4' href={`tel:${resume && resume.personalInfo.phone}`}>{resume && resume.personalInfo.phone}</a>
            </p>
          </div>

          <div className='flex justify-center'>
            <h1 className='pt-2 pb-4 font-bold uppercase underline '>{resume && resume.personalInfo.profession}</h1>
          </div>
          <hr />
          <div className='flex justify-start'>
            <h1 className='pt-[10px] pl-[16px] font-bold uppercase '>Profile : </h1>
          </div>
          <div className='flex justify-start'>
            <div className='pt-[10px] pl-[16px] pb-[10px]' >
              <p>{resume && resume.personalInfo.profile}</p>
            </div>


          </div>

          <hr />
          <div className='flex justify-start'>
            <h1 className='pt-[10px] pl-[16px] font-bold uppercase '>Skills : </h1>
          </div>

          <div className='grid grid-cols-4'>
            {resume && resume.skills.map((skill, index) => (
              <div className='pt-[10px] pl-[16px] pb-[10px]' key={index}>
                <h1 className='font-bold'>{skill.skill}</h1>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>

          <hr />
          <div className='flex justify-start'>
            <h1 className='pt-[10px] pl-[16px] font-bold uppercase '>Technical Skills : </h1>
          </div>
          <div className='grid grid-cols-8'>
            {resume && resume.technicals.map((technical, index) => (
              <div className='pt-[10px] pl-[16px] pb-[10px]' key={index}>
                <h1 className='font-bold'>{technical.skill}</h1>
              </div>
            ))}
          </div>
          <hr />
          <div className='flex justify-start'>
            <h1 className='pt-[10px] pl-[16px] font-bold uppercase '>Education : </h1>
          </div>

          <div className='grid grid-cols-2'>
            {resume && resume.educations.map((education, index) => (
              <div className='pt-[10px] pl-[16px] pb-[10px]' key={index}>
                <div className='flex'>
                  <h1 className='font-bold'>{education.institution}</h1>
                  <p className='pl-4'>{education.country}</p>
                  <p className='pl-4'> - </p>
                  <p className='pl-4'> {education.city}</p>

                </div>
                <p>Grade : {education.degree}</p>
                <p>Field : {education.field}</p>
                <p>Diplome : {education.diplome}</p>
              </div>
            ))}

          </div>
          <hr />
          <div className='flex justify-start'>
            <h1 className='pt-[10px] pl-[16px] font-bold uppercase '>Experience : </h1>
          </div>
          <div className='grid grid-cols-2'>

            {resume && resume.experiences.map((experience, index) => {
              const startDate = new Date(experience.experienceStartDate).toLocaleDateString();
              const endDate = new Date(experience.experienceEndDate).toLocaleDateString();
              return (
                <div className='pt-[10px] pl-[16px] pb-[10px]' key={index}>
                  <div className='flex'>
                    <h1 className='font-bold'>{experience.company}</h1>
                    <p className='pl-4'>{startDate}</p>
                    <p className='pl-4'> - </p>
                    <p className='pl-4'>{endDate}</p>

                  </div>
                  <p>Position : {experience.position}</p>
                  <p>Desctiption : {experience.description}</p>
                </div>
              )
            })}

          </div>
          <hr />
          <div className='flex justify-start'>
            <h1 className='pt-[10px] pl-[16px] font-bold uppercase '>Projects : </h1>
          </div>
          <div className='grid grid-cols-2'>

            {resume && resume.projects.map((project, index) => {
              return (
                <div className='pt-[10px] pl-[16px] pb-[10px]' key={index}>
                  <div className='flex'>
                    <h1 className='font-bold'>{project.title}</h1>
                  </div>
                  <p>Link : <a className='text-cyan-700' href={project.link}>{project.link}</a></p>
                  <p>Desctiption : {project.description}</p>
                </div>
              )
            })}
          </div>
          <hr />
              <div className='flex justify-start'>
                <h1 className='pt-[10px] pl-[16px] font-bold uppercase '>Languages : </h1>
              </div>

              <div className='grid grid-cols-4'>
                {resume && resume.languages.map((language, index) => (
                  <div className='pt-[10px] pl-[16px] pb-[10px]' key={index}>
                    <h1 className='font-bold'>{language.name}</h1>
                    
                  </div>
                ))}
              </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadTemplate1