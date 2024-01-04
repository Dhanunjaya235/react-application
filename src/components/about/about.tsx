import React, { FC } from 'react';
import './about.css';

interface AboutProps {}

const About: FC<AboutProps> = () => (
  <div className="about" data-testid="About">
    <h1>
      This web site is all about react practice
    </h1>
  </div>
);

export default About;
