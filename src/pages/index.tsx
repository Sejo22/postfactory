'use client'
import React from 'react';
import HeroLandingPage from '@/sections/HeroLandingPage';
import TrustedBy from '@/sections/TrustedBy';
import SocialMediaPostExamples from '@/sections/SocialMediaPostExamples';
import Plans from '@/sections/Plans';
import Services from '@/sections/Services';
import FaqLandingPage from '@/sections/FaqLandingPage';
import CTA from '@/components/CTA';
import Reviews from '@/sections/Reviews';
import Masonry from '@/sections/Masonry';
const Home: React.FC = () => {
    return (
        <>
            <HeroLandingPage />
            <TrustedBy />
            <Masonry />
            <SocialMediaPostExamples />
            <Plans />
            {/* <Services /> */}
            <Reviews />
            <FaqLandingPage />
            <CTA />
        </>
    );
};

export default Home;
