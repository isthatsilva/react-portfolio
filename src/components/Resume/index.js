import React from 'react';
import PDF from "../../assets/Resume.pdf";

const Resume = () => {
    return (
        <section>
            <embed id="Resume" src={PDF} width="100%" height="550" />
        </section>
    )
};

export default Resume;