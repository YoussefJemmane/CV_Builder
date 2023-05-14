import React, { useEffect, useState } from 'react';


function List() {
  const [resumes, setResumes] = useState([]);
  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const resumes = await (
        await fetch(
          "http://localhost:3000/api/resumes"
        )
      ).json();

      // set state when the data received
      setResumes(resumes);
    };

    dataFetch();
  }, []);


  return (
    <div className="resume-list">
      <h2>Resumes</h2>
      <a href="/create">Add Resume</a>
      {resumes.map((resume) => (
        <div className="resume" key={resume.id}>
          <h3>{resume.personalInfo.name}</h3>
          <p>{resume._id}</p>
          <a href={`/template/${resume._id}`}>Choose Template</a>
        </div>
      ))}



    </div>
  );
}

export default List;
