import React from "react";
import './Experiences.css';

const Experiences = () => {
    const exps = [
        {
            company: 'Zelio, LLC',
            period: '2024 - 2025',
            position: 'Co-Founder/Manager',
            description: 'Founded and operated a thriving gift shop, curating a range of high-quality, unique products to meet customer preferences.'+
            'Oversaw day-to-day operations, including inventory management, vendor relations, and sales tracking, ensuring seamless business performance.'+
            'Fostered a welcoming environment and built strong customer relationships, enhancing satisfaction and loyalty.'+
            'Drove traffic and sales through innovative marketing strategies, such as seasonal promotions and social media campaigns.'+
            'Conducted data-driven analysis of sales trends to optimize product offerings, resulting in consistent growth and customer retention.'+
            'Recruited, trained, and mentored part-time staff, cultivating a positive and efficient work environment.',
            skills: 'Project Management · Data Analysis · Probleming Solving · Leadership · Customer Experience · Strategic Planning'
        },
        {
            company: 'Springboard', 
            period: '2023 - 2024',
            position: 'Software Engineer Fellow',
            description: 'Mastered skills in front-end and back-end web development, '+
            'databases, and data structures and algorithms. Developed two dynamic websites: ' +
            'MetaCity, a responsive web application for superhero enthusiasts using HTML, ' + 
            'Python, JavaScript, Flask, PostgreSQL; and MusicSphere, a dynamic music '+ 
            'platform built with JavaScript, Node.js, Express.js, React.js, and PostgreSQL. '+
            'Integrated MusicDB API for extensive music content, enabling users to explore '+
            'music, create accounts, and manage playlists. These projects honed my full-stack '+
            'development, RESTful API implementation, and database management skills, providing '+
            'engaging, responsive user experiences.',
            skills: 'HTML & CSS · Python · Flask · JavaScript · Node.js · React.js · ' +
            'Express.js · PostgreSQL'
        },
        {
            company: 'Burmese Ghouls',
            period: '2021 - 2022',
            position: 'Team Leader',
            description: 'Led, monitored, and supervised the players in my team ' +
            'to achieve goals that contribute to the growth of the organization. ' + 
            'Motivated and inspired my team by creating an environment that promotes ' +
            'positive communication, encourages bonding of team members, and ' + 
            'demonstrates flexibility. Analyzed my team and created the better ' + 
            'gaming mechanics to achieve better goals. Trained new team members. '+
            'Managed and scheduled meeting minutes during discussion with E-sports organizers.',
            skills: 'Gaming Mechanics · Team Leadership · Online Gaming · Communication'
        },
        {
            company: 'Mandalay Technology',
            period: '2020 - 2021',
            position: 'IT Intern',
            description: 'Diagnosed and repaired software/hardware faults, resolved ' +
            'network issues, and installed/configured hardware and software. Conducted ' +
            'thorough testing of new software and hardware, developed/executed test plans, ' +
            'and identified bugs/issues before deployment. Collaborated with developers to ' +
            'provide feedback, documented test findings, and followed up on resolution progress to ensure optimal performance.',
            skills: 'Problem Solving · Technical Support · Communication · Translation'
        },
        {
            company: 'Department of Civil Aviation',
            period: '2019 - 2020',
            position: 'Freelance',
            description: ' Participated in a tech event and collaborated with the Department ' +
            'of Civil Aviation Myanmar to develop a multiple-choice question exam for pilots ' +
            'using Java, JavaFX, and MySQL. Coded, designed, and managed the application, ensuring ' +
            'it met specific requirements. Conducted comprehensive testing to enhance reliability ' +
            'and provided end-user support for seamless usage.',
            skills: 'Oracle · HTML & CSS · JavaFX · PHP · MySQL'
        }
    ]

    return (
        <section id="experiences" className="exp-sec">
          <p className="exp-header">Experiences</p>
          {exps.map((exp, index) => (
            <div key={index} className="expmain">
              <div className='period'>
                <p>{exp.period}</p>
              </div>
              <div className='exp'>
                <p className='pos'>{exp.position} · {exp.company}</p>
                <p className='description'>{exp.description}</p>
                <p className='skills'>{exp.skills}</p>
              </div>
            </div>
          ))}
        </section>
    );
} 

export default Experiences;
