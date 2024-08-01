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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import blankPage from '@/pages/blankPage';
import AllMyLinks from '@/components/AllLinks';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <Router>
        <Switch>
          <Route path="/blank-page" component={blankPage} />
        </Switch>
      </Router>
      <AllMyLinks />
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
