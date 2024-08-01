'use client'
import React from 'react';
import MainLayout from '@/components/MainLayout';
import HeroLandingPage from '@/sections/HeroLandingPage';
import TrustedBy from '@/sections/TrustedBy';
import SocialMediaPostExamples from '@/sections/SocialMediaPostExamples';
import Plans from '@/sections/Plans';
import Services from '@/sections/Services';
import FaqLandingPage from '@/sections/FaqLandingPage';
import CTA from '@/components/CTA';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <HeroLandingPage />
      <TrustedBy />
      <SocialMediaPostExamples />
      <Plans />
      <Services />
      <FaqLandingPage />
      <CTA />
    </MainLayout>
  );
};

export default Home;
