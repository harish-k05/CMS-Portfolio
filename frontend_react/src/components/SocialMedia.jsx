import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href="https://github.com/harish-k05" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/harish-kandasamy131605/" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
