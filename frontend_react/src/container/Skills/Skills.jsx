import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap,MotionWrap } from '../../wrapper';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { urlFor, client } from '../../client';
import './Skills.scss';


const Skills = () => {

  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);


  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query)
      .then((data) => {
        setExperience(data);
      })

    client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
      })

  }, []);




  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills && skills.length > 0 ? (
            skills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='app__skills-item app__flex'
                key={skill.name}
              >
                <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className='p-text'>{skill.name}</p>
              </motion.div>
            ))
          ) : (
            <p>Loading skills...</p>
          )}

        </motion.div>
           
        <motion.div className='app__skills-exp'>
          {experience && experience.length > 0 ? ( 
            experience.map((exp) => (
              <motion.div className='app__skills-exp-items' key={exp.year}>
                <div className='app__skills-exp-year'>
                  <p className='bold_text'>{exp.year}</p>
                </div>
                <motion.div className='app__skills-exp-works'>
                  {exp.works?.map((work) => (
                    <React.Fragment key={work.name}>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        data-tooltip-id={work.name}
                        data-tooltip-content={work.desc}
                        className='app__skills-exp-work'
                        key={work.name}
                      >
                        <h4 className='bold-text'>{work.name}</h4>
                        <p className='p-text'>{work.company}</p>
                      </motion.div>
                      <ReactTooltip
                        id={work.name}
                        effect='solid'
                        arrowColor='#fff'
                        className='skills-tooltip'
                      >
                        {work.desc}
                      </ReactTooltip>
                    </React.Fragment>
                  ))}
                </motion.div>
              </motion.div>
            ))
          ) : (
            <p>Loading experience...</p>
          )}


        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg');
