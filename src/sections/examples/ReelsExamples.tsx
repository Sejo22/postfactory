'use client'
import React from 'react'
import { Box, Container, Typography, useTheme } from '@mui/material'
import Video from '@/components/Video';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const videos = [
    './assets/videos/video1.mp4',
    './assets/videos/video2.mp4',
    './assets/videos/video3.mp4',
    './assets/videos/video4.mp4',
]

function ReelsExamples() {
    const theme = useTheme();

    return (
        <Box>
            <Container maxWidth='lg'>
                <Box sx={{ margin: '64px auto 0 auto', maxWidth: { xs: '100%', md: '75%' }, py: 8 }}>
                    <Typography variant='h2' sx={{ pb: 2, textAlign: 'center' }} >
                        Reels Examples
                    </Typography>
                    <Typography variant='body1' textAlign={'center'} gutterBottom>
                        Experience Our Creativity: Watch Our Reels in Action. Explore compelling reel examples that highlight our innovative approach and drive engagement.
                    </Typography>
                </Box>
                <Box sx={{ overflow: 'hidden', py: 4 }}>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={16}
                        autoplay={{
                            delay: 1,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        speed={5000}
                        slidesPerView={1}
                        breakpoints={{
                            576: {
                                slidesPerView: 2
                            },
                            1024: {
                                slidesPerView: 3
                            }
                        }}
                        loop={true}
                        style={{ overflow: 'unset', alignItems: 'stretch' }}
                    >

                        {videos.map((video, index) => (
                            <SwiperSlide key={index} style={{ maxHeight: 'auto', aspectRatio: 9 / 16 }}>
                                <Video path={video} />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </Box>

                {/* <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 4 }}>
                    {videos.map((video, index) => (
                        <Video path={video} key={index} />
                    ))}
                </Box> */}

                {/* <SimpleSlider /> */}

            </Container>
        </Box>
    )
}

export default ReelsExamples