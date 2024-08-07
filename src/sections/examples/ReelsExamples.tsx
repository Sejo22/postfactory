'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import { Box, Container, Typography, useTheme } from '@mui/material'
import Video from '@/components/Video';
import SimpleSlider from "./SliderE";

const videos = [
    './assets/videos/video1.mp4',
    './assets/videos/video2.mp4',
    './assets/videos/video3.mp4',
    './assets/videos/video4.mp4',
]

function PauseOnHover() {
    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    }
}

function ReelsExamples() {
    const theme = useTheme();

    return (
        <Box>
            <Container maxWidth='xl'>
                <Box sx={{ margin: '64px auto 0 auto', maxWidth: { xs: '100%', md: '75%' }, py: 8 }}>
                    <Typography variant='h2' sx={{ pb: 2, textAlign: 'center' }} >
                        Reels Examples
                    </Typography>
                    <Typography variant='body1' textAlign={'center'} gutterBottom>
                        Experience Our Creativity: Watch Our Reels in Action. Explore compelling reel examples that highlight our innovative approach and drive engagement.
                    </Typography>
                </Box>

                {/* <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 4 }}>
                    {videos.map((video, index) => (
                        <Video path={video} key={index} />
                    ))}
                </Box> */}

                <SimpleSlider />

            </Container>
        </Box>
    )
}

export default ReelsExamples