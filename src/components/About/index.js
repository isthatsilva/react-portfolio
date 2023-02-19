import React from 'react';
import ProfilePhoto from '../../assets/images/profile.JPG'

const About = () => {
    return (
        <section className='my-5 about' name='container' style={{'textAlign': 'center'}}>
            <div className=''>
                <img className='bio-photo' alt='David' src={ProfilePhoto}/>
            </div>
            <h1 id='about'>About Me</h1>
            <p className='text-background' id='aboutText'>
            Hello, my name is David Silva, and I am an aspiring Full Stack Web Developer. 
            <br />
            I am currently enrolled at Clayton State University and pursuing a major in Computer Science.
            <br />
            Web Development has always been an interest to me. It facinates me how websites are developed and I would like to know more of the many languages and technologies that are out there.
            My goal in the near future is to become a Front End Web Developer, 
            and as I improve my skills, work my way towards being a Full Stack Web Developer! 
            <br />
            Feel free to check out my work!
            </p>
        </section>
    )
};

export default About;