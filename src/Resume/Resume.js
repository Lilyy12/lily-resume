import React from 'react';
import './Resume.css'; 

function Resume() {


  return (
    <div className="resume">
      <header>
        <h1>Lily Mingthaisong</h1>
        <p>Email: lily.mingt@gmail.com</p>
        <p>Location: London, United Kingdom</p>
      </header>

      <section className="personal-statement">
        <h2>Personal Statement</h2>
        <p>
        I'm software engineer specialise in C# and .NET with almost 2 years of experiences working in trading company and API providers start-up. 
        My main area of expertise is backend but not limited, I also have experience in frontend and DevEx helping team successfully deploy the system and achieving product purposes.
        </p>
      </section>

      <section className="work-experience">
        <h2>Work Experiences</h2>
        <div className="experience-item">
            <h3>Software Engineer</h3>
          <p>https://www.trayport.com/</p>
          <p>September 2023 - Present (10 Months)</p>
          <p><b>Tech Stack</b>: C#, .NET, Azure, SQL Server, Git, Docker</p>
          <ul>
            <li>Be part of connectivity team, helping Trayport build backend core system using C# and .NET framework</li>
            <li>Use git version control to manage code repositories and collaborate with team members</li>
            <li>Participate in code reviews to maintain code quality and ensure adherence to coding standards</li>
            <li>Write unit tests to validate the functionality of code modules</li>
            <li>Maintain clear and effective communication with team members, stakeholders, and clients</li>
            <li>Build CI/CD on Azure cloud to help team deploy project on multiple environments</li>
            <li>Write RFC, investigate tech debt issue and do timeline estimation for small project</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Graduate Software Engineer</h3>
          <p>https://www.codat.io/</p>
          <p>September 2022 - August 2023 (1 Year)</p>
          <p><b>Tech Stack</b>: C#, .NET, Azure, ASP.NET, SQL, REST API, TypeScript, React</p>
          <ul>
            <li>Part of graduate program at Codat, they are offering the training program which including the opportunities to working across software engineer team</li>
            <li>Design, develop and maintain scalable and efficient backend systems using .NET framework</li>
            <li>Research and evaluate new technologies and frameworks, and propose and implement improvements to existing backend infrastructure and processes to improve development productivity and system performance</li>
            <li>Implemented unit testing and deployment processes for backend services</li>
            <li>Build RESTful APIs as a service and help SMEs integrated financial data to big technology software</li>
            <li>Conduct automated testing and ensure code coverage</li>
          </ul>
        </div>
      </section>

      <section className="education">
        <h2>Educational Record</h2>
        <div className="education-item">
          <h3>De Montfort University</h3>
          <p>Major: MSc. Information Systems Management</p>
        </div>
        <div className="education-item">
          <h3>Mahidol University</h3>
          <p>Major: BSc. Actuarial Sciences</p>
        </div>
        <div className="education-item">
          <h3>Ramkhamhaeng University</h3>
          <p>Major: Llb. Laws</p>
        </div>
      </section>
    </div>
  );
}

export default Resume;
