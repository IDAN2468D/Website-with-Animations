import React from 'react';
import Hero from '../../components/Home/Hero';
import InfoSection from '../../components/Home/InfoSection';
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
