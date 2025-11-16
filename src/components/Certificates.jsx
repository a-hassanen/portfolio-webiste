import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver.jsx';
import '../styles/Certificates.css';

const Certificates = ({ items }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="certificates" ref={ref} className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}>
      <h2>Certificates</h2>
      <div className="card">
        {Object.entries(items).map(([category, certs], index) => (
          <div key={index} className="certificate-category">
            <h3>{category}</h3>
            <ul>
              {certs.map((cert, certIndex) => (
                <li key={certIndex}>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">{cert.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;