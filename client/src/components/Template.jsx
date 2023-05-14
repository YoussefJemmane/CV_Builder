import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
const Template = () => {
  const [resume, setResume] = useState(null);
  const resumeId = useParams().id;
  
  const template1 = `http://localhost:3000/api/resumes/${resumeId}/template1/download`;
  const template2 = `http://localhost:3000/api/resumes/${resumeId}/template2/download`;
  const update = `http://localhost:3000/api/resumes/${resumeId}/update`;
  useEffect(() => {
    const fetchResume = async () => {
      const fetchedResume = await (
        await fetch(`http://localhost:3000/api/resumes/${resumeId}/template`)
      ).json();

      setResume(fetchedResume);
    };

    fetchResume();
  }, []);

  return (
    <div>
      <a href="/">Go Back</a>
      <h1>Choose the template to download the cv</h1>
      {<a href={template1}>Template 1 </a>}
      <a href={template2}>Template 2 </a>
      <div>or</div>
      <a href="/api/resumes/${resumeId}/update">Update </a>

    </div>
  )
}

export default Template