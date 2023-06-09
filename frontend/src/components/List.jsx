import React, { useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useResumesContext } from '../hooks/useResumeContext';
import Navbar from './Navbar';


function List() {
  const { resumes, dispatch } = useResumesContext()
  const { user } = useAuthContext()
  
  useEffect(() => {
    const fetchResumes = async () => {
      const response = await fetch(`http://127.0.0.1:3000/api/resumes/resumes/${user.id}`, {
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

      {
        resumes && resumes.length == 0 ? (<div className="flex justify-center bg-base-200 items-center h-screen">
          <div className=" text-base-content rounded-box shadow-lg p-10" data-theme="emerald">
            <div className="flex flex-col items-center">
              <div className="font-bold text-5xl">No Resumes</div>
              <div className="font-bold text-2xl">Create a new resume</div>
              <div className="font-bold text-2xl">Click on the button below</div>
              <div className="font-bold text-2xl">to create a new resume</div>
              <div className="font-bold text-2xl">and start editing</div>
              <div className="font-bold text-2xl">your resume</div>
              <div className="font-bold text-2xl">now!</div>
              <div className="flex justify-center">
                <a href="/create" className="btn btn-primary mt-4">Create Resume</a>
              </div>
            </div>
          </div>
        </div>)
          :
          (<div className="bg-base-200  min-h-screen pt-4" >
            <section class=" dark:bg-gray-900 " >
              <div class="flex flex-wrap  px-[110px]" >
                {
                  resumes && resumes.length > 0 && resumes.map((resume, index) => (
                    <div className="card w-96 bg-base-100 shadow-xl m-2" key={index} data-theme="emerald">
                      <div className="card-body">
                        <h2 className="card-title">Name : {resume.personalInfo.name}</h2>
                        <h2 className="card-title">Profession : {resume.personalInfo.profession}</h2>

                        <div className="card-actions justify-between pt-4">
                          <button className="btn btn-accent" onClick={(e) => handleClick(resume._id, e)}>Delete</button>
                          <a className="btn btn-primary" href={`/template/${resume._id}`}>Templates</a>
                        </div>
                      </div>
                    </div>
                  ))
                }

              </div>
            </section>
          </div>)

      }


    </>
    // <div className="flex justify-center">
    //       <div>
    //         <div className="flex justify-center pb-4">
    //           <h2 className="text-3xl">Resumes</h2>
    //         </div>
    //         {/* Tailwind card that maps the resumes and includes buttons for delete, update, and templates */}
    //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    //           {resumes &&
    //             resumes.length > 0 &&
    //             resumes.map((resume, index) => (
    //               <div
    //                 className="bg-gray-200 rounded-lg overflow-hidden shadow-lg"
    //                 key={index}
    //               >
    //                 <div className="p-6">
    //                   <div className="font-bold text-xl mb-2">{resume.personalInfo.name}</div>
    //                   <p className="text-gray-700 text-base">
    //                     {resume.personalInfo.profession}
    //                   </p>
    //                 </div>
    //                 <div className="flex justify-end p-6">
    //                   <button
    //                     onClick={(e) => handleClick(resume._id, e)}
    //                     className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-3"
    //                   >
    //                     Delete
    //                   </button>
    //                   <a
    //                     href={`/template/${resume._id}`}
    //                     className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    //                   >
    //                     Templates
    //                   </a>
    //                 </div>
    //               </div>
    //             ))}
    //         </div>
    //       </div>
    //     </div>




  );
}

export default List;
