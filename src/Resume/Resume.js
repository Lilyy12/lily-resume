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
        Hey there! 👋 I'm Lily, and I'm a junior software engineer with a genuine love for all things tech. You could say I'm a bit of a tech enthusiast – whether it's diving into the latest programming languages, experimenting with cool new frameworks, or just geeking out over the latest gadgets, I'm always up for it!<br/><br/>
        I thrive on learning and growth, and I'm not afraid to dive headfirst into new challenges. The tech world moves fast, and I see that as an opportunity rather than a hurdle. My goal is to soak up as much knowledge as I can and apply it to create innovative solutions that make a real impact.<br/><br/>
        But it's not just about the code for me. I believe in the power of collaboration and teamwork. I love bouncing ideas off my fellow developers, brainstorming creative solutions, and working together to bring projects to life.<br/><br/>
        So, if you're ever up for a tech chat, a coding challenge, or just want to explore the ever-evolving world of technology, count me in! Let's learn, grow, and create awesome things together. 🚀💻
        </p>
      </section>

      <section className="work-experience">
        <h2>Work Experiences</h2>
        <div className="experience-item">
          <h3>Graduate Software Engineer</h3>
          <p>https://www.codat.io/</p>
          <p>September 2022 - August 2023 (1 Year)</p>
          <p>Tech Stack: C#, .NET, Azure, ASP.NET, SQL, REST API, TypeScript, React</p>
          <ul>
            <li>Write clean, maintainable, and efficient C# code for backend systems.</li>
            <li>Develop and implement server-side logic and APIs using .NET technologies.</li>
            <li>Build RESTful APIs for communication between the frontend and backend systems.</li>
            <li>Conduct thorough testing and debugging of applications.</li>
            <li>Work closely with cross-functional teams to understand project requirements and deliver on time.</li>
            <li>Use version control systems like Git to manage code repositories and collaborate with team members.</li>
            <li>Participate in code reviews to maintain code quality and ensure adherence to coding standards.</li>
            <li>Write unit tests to validate the functionality of code modules.</li>
            <li>Conduct automated testing and ensure code coverage.</li>
            <li>Stay up-to-date with industry trends, new technologies, and best practices in backend development.</li>
            <li>Maintain clear and effective communication with team members, stakeholders, and clients.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Business Analyst Intern</h3>
          <p>https://gigabitnetworks.co.uk/</p>
          <p>July 2021 - October 2021 (4 months)</p>
          <ul>
            <li>Conduct market research to gather information about industry trends and competitive analysis.</li>
            <li>Analyze business processes, workflows, and data to identify areas for improvement.</li>
            <li>Act as a liaison between business stakeholders and technical teams to ensure clear communication.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Student Teaching and Learning Consultant (Researcher)</h3>
          <p>https://www.dmu.ac.uk/</p>
          <p>January 2021 - June 2021 (6 months)</p>
          <ul>
            <li>Conduct research to identify best practices and trends in online education and digital learning.</li>
            <li>Assist in gathering data and information related to online learning initiatives.</li>
            <li>Collect and analyse data from various sources, such as surveys, student feedback, and online learning platforms.</li>
            <li>Summarise research findings and provide insights to inform decision-making.</li>
            <li>Evaluate the quality and effectiveness of online course materials, including videos, lectures, and interactive content.</li>
            <li>Communicate research findings and recommendations to relevant stakeholders.</li>
            <li>Ensure that research activities comply with ethical guidelines and standards.</li>
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
