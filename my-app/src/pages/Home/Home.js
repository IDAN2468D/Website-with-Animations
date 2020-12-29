import React from 'react';
import Hero from '../../components/Hero';
import InfoSection from '../../components/InfoSection';
import { SliderData } from '../../data/Home/SliderData';
import { InfoData } from '../../data/Home/InfoData';
import { InfoDataTwo } from '../../data/Home/InfoData';

function Home() {
    return (
        <div>
            <Hero slides={SliderData} />
            <InfoSection {...InfoData} />
            <InfoSection {...InfoDataTwo} />
        </div>
    )
}

export default Home
