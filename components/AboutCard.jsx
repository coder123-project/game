import React from 'react';
import github from '../assets/github-brands.svg';
import linkedin from '../assets/linkedin-brands.svg';
import { StyledAboutCard } from './styles/AboutCard.styled';

function AboutCard() {
  return (
    <StyledAboutCard>
        <div className="container">
            <div className="about">
                <h3 className='white'>Hello, This is Raven</h3>
                <p className='text'>I am a Front-End Web Developer working on various projects to improve my skills. And this is one of them!</p>
            </div>
            <div className="contact">
                <h5 className='white'>Contact Me</h5>
                <p className='text'>E-mail: purplebox02@gmail.com</p>
                <h5 className='white'>Or Have a Look at These</h5>
                <div className="image-container">
                  <a href="https://github.com/Raven-Isaac-Finch"><img src={github} alt="github" /></a>
                  <a href="!#"><img src={linkedin} alt="linkedin" /></a>
                </div>
            </div>
        </div>
    </StyledAboutCard>
  )
}

export default AboutCard