import React from 'react';
import { AboutData } from '../../data/About/AboutData';
import InfoAbout from '../../components/About/InfoAbout';




function About() {
    return (
        <div>
            <InfoAbout {...AboutData} />
        </div>
    )
}

export default About
