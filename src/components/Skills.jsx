import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver.jsx';
import '../styles/Skills.css';

const Skills = ({ items }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="skills" ref={ref} className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}>
      <h2>Skills</h2>
      <div className="card">
        {Object.entries(items).map(([category, skills], index) => (
          <div key={index} className="skill-category">
            <h3>{category}</h3>
            <ul className="skills-list">
              {skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;