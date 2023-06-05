import React, { useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useResumesContext } from '../hooks/useResumeContext';
import Navbar from './Navbar';


function List() {
  const { resumes, dispatch } = useResumesContext()
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchResumes = async () => {
      const id = user.id;
      const response = await fetch(`http://127.0.0.1:3000/api/resumes/resumes/${id}`, {
        headers: { 'Authorization': `Bearer ${user.token}` },
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_RESUMES', payload: json })
      }
    }

    if (user) {
      fetchResumes()
    }
  }, [dispatch, user])

  const handleClick = async (resumeId, e) => {
    e.preventDefault();
    await fetch(`http://127.0.0.1:3000/api/resumes/resume/${resumeId}/delete`, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${user.token}` },
    });

    dispatch({ type: 'DELETE_RESUME', payload: resumeId });
  };




  return (
    <>
      <Navbar />


      <div className='flex justify-center'>
        <div>
          <div className='flex justify-center pb-4'>

            <h2 className='text-3xl'>Resumes</h2>
          </div>
          {/* make a tailwind card that map the resumes and have button delete and update and a button to go to Template.jsx page */}
          <div className='flex flex-wrap justify-center'>
            {resumes && resumes.length > 0 && resumes.map((resume, index) => (
              <div className="max-w-sm bg-cyan-100 m-3 text-black rounded overflow-hidden shadow-lg" key={index}>
                <div className="px-6 py-4 m-4">
                  <div className="font-bold text-xl mb-2">{resume.personalInfo.name}</div>
                  <p className="text-gray-700 text-base">
                    {resume.personalInfo.profession}
                  </p>
                </div>
                <div className="flex justify-between p-3">

                  <button onClick={(e) => handleClick(resume._id, e)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-5">
                    Delete
                  </button>

                  <a href={`/template/${resume._id}`} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Templates
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div >
    </>





  );
}

export default List;
