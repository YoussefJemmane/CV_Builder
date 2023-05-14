const resumeTemplate = (data) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

    body {
      font-family: 'Roboto', sans-serif;
      font-size: 18px;
      line-height: 1.6;
      color: #333;
      max-width: 800px;
      margin: 0 auto;
      padding: 40px;
      background-color: #f7f7f7;
    }

    h1, h2, h3 {
      color: #444;
      margin-bottom: 20px;
    }

    h1 {
      font-size: 36px;
      text-align: center;
      color: #3b5999;
    }

    h2 {
      font-size: 24px;
      color: #1abc9c;
    }

    h3 {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 10px;
      color: #e67e22;
    }

    p {
      margin-bottom: 10px;
    }

    .email {
      font-size: 14px;
      color: #777;
      margin-bottom: 40px;
    }

    .section {
      margin-bottom: 40px;
    }

    .sub-section {
      margin-bottom: 20px;
    }

    .skills, .projects {
      display: flex;
      flex-wrap: wrap;
    }

    .skill, .project {
      flex: 1;
      margin-right: 10px;
      margin-bottom: 10px;
      padding: 10px;
      background-color: #fff;
      border: 2px solid #3498db;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease-in-out;
    }

    .skill:hover, .project:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }
  </style>
</head>
<body>
  <h1>${data.personalInfo.name}</h1>
  <p class="email">${data.personalInfo.email}</p>

  <div class="section">
    <h2>Education</h2>
    ${data.educations.map((edu) => `
      <div class="sub-section">
        <h3>${edu.institution}</h3>
        <p>${edu.degree}</p>
        <p>${edu.educationStartDate ? edu.educationStartDate.toLocaleDateString() : ""} - ${ edu.educationStartDate ? edu.educationStartDate.toLocaleDateString() : ""}</p>
      </div>
    `).join('')}
  </div>

  <div class="section">
    <h2>Experience</h2>
    ${data.experiences.map((exp) => `
      <div class="sub-section">
        <h3>${exp.company}</h3>
        <p>${exp.position}</p>
        <p>${exp.experienceStartDate ? exp.experienceStartDate.toLocaleDateString() : ""} - ${exp.experienceEndDate?exp.experienceEndDate.toLocaleDateString():""}</p>
      </div>
    `).join('')}
  </div>

  <div class="section">
    <h2>Skills</h2>
    <div class="skills">
      ${data.skills.map((skill) => `
        <div class="skill">
          <p>${skill.skill}</p>
        </div>
      `).join('')}
    </div>
  </div>

  <div class="section">
    <h2>Projects</h2>
    <div class="projects">
      ${data.projects.map((project) => `
        <div class="project">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <p>${project.link}</p>
        </div>
      `).join('')}
    </div>
  </div>
</body>
</html>
`;

module.exports = resumeTemplate;
