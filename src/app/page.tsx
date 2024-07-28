'use client'
import React from 'react';
import MainLayout from '@/components/MainLayout';
import { Container } from '@mui/material';
import HeroLandingPage from '@/sections/HeroLandingPage';
import TrustedBy from '@/sections/TrustedBy';
import SocialMediaPostExamples from '@/sections/SocialMediaPostExamples';
import axios from "axios";
import { useState, useEffect } from "react"
import Plans from '@/sections/Plans';
import Services from '@/sections/Services';
import FaqLandingPage from '@/sections/FaqLandingPage';
import CTA from '@/components/CTA';

const Home: React.FC = () => {

  // const [data, setData] = useState(null)

  // useEffect(() => {
  //   const options = {
  //     method: 'GET',
  //     url: "https://postfactory.vercel.app/",
  //   }
  //   axios.request(options)
  //     .then(function (response) {
  //       setData(response.data.data)
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     })
  // }, [])

  // console.log(data)
  return (
    <MainLayout>
      {/* <Container maxWidth='lg'> */}
      <HeroLandingPage />
      <TrustedBy />
      <SocialMediaPostExamples />
      <Plans />
      <Services />
      <FaqLandingPage />
      <CTA />
      {/* </Container> */}
    </MainLayout>
  );
};

export default Home;
