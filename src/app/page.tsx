'use client'
import React from 'react';
import MainLayout from '@/components/MainLayout';
import { Container } from '@mui/material';
import HeroLandingPage from '@/sections/HeroLandingPage';
import TrustedBy from '@/sections/TrustedBy';
import SocialMediaPostExamples from '@/sections/SocialMediaPostExamples';

const Home: React.FC = () => {
  return (
    <MainLayout>
      {/* <Container maxWidth='lg'> */}
      <HeroLandingPage />
      <TrustedBy />
      <SocialMediaPostExamples />
      {/* </Container> */}
    </MainLayout>
  );
};

export default Home;
