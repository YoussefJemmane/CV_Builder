import React from 'react';
import { useParams } from "react-router-dom";
import Navbar from './Navbar';
const Template = () => {

  const resumeId = useParams().id;

  const template1 = `/template1/${resumeId}`;
  const template2 = `/template2/${resumeId}`;
  const template3 = `/template3/${resumeId}`;

  return (
    <div>
      <Navbar />
      <div className='p-[20px]'>
        <div className='flex justify-between'>
          <a href={`/list`} className='rounded border p-2 bg-gray-900 text-white' >Go Back</a>
        </div>
        <div className='flex flex-wrap justify-center'>
          <h1 className='pt-2 font-bold uppercase underline text-2xl'>Choose the template to download the cv</h1>
        </div>
        <div className='flex flex-wrap justify-center mt-4'>
          <a href={template1} className='rounded border p-2 bg-green-200'>Template 1 </a>
          <a href={template2} className='rounded border p-2 bg-green-200'>Template 2 </a>
          <a href={template3} className='rounded border p-2 bg-green-200'>Template 3 </a>
        </div>
      </div>




    </div>
  )
}

export default Template