import React from 'react';
import Resume from "../../assets/Resume.pdf";

const AboutMe = () => {
    <section className='my-5 text-background'>
        <embed id="Resume" src={Resume} width="100%" height="750px"></embed>
    </section>
};

export default AboutMe;