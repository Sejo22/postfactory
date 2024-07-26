'use client'
import React from 'react';
import MainLayout from '@/components/MainLayout';
import { Container } from '@mui/material';
import HeroLandingPage from '@/sections/HeroLandingPage';
import TrustedBy from '@/sections/TrustedBy';
import SocialMediaPostExamples from '@/sections/SocialMediaPostExamples';
import axios from "axios";
import { useState, useEffect } from "react"

const Home: React.FC = () => {

  const [data, setData] = useState(null)

  useEffect(() => {
    const options = {
      method: 'GET',
      url: "http://localhost:3000",
    }
    axios.request(options)
      .then(function (response) {
        setData(response.data.data)
      })
      .catch(function (error) {
        console.error(error);
      })
  }, [])

  console.log(data)
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
