import React from 'react';
import { useParams } from "react-router-dom";
import template1image from '../assets/images/template1.jpg';
import template2image from '../assets/images/template2.jpg';
import template3image from '../assets/images/template3.jpg';
import Navbar from './Navbar';
const Template = () => {

  const resumeId = useParams().id;
  const templates = [
    {
      path: `/template1/${resumeId}`,
      image: template1image,
    },
    {
      path: `/template2/${resumeId}`,
      image: template2image,
    },
    {
      path: `/template3/${resumeId}`,
      image: template3image,
    },
  ];
  return (
    <>
      <Navbar />
      <div className="bg-base-200  min-h-screen" >
        <div className='p-[30px]'>
          <div className="alert alert-success flex justify-center ">
            <span className='text-3xl'>Choose your Template</span>
          </div>
          <a href="/list" className='btn btn-accent my-4 mr-3' data-theme="emerald">Go Back</a>
        </div>
        <div className="flex flex-wrap justify-center">
          {
            templates && templates.map((template, index) => (
              <div className="card w-96 bg-base-100 shadow-xl m-2" data-theme="emerald">
                <div className="card-body">
                  <a href={template.path}>
                    <img src={template.image} />
                  </a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Template