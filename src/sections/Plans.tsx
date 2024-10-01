import React, { useCallback, useRef } from 'react'
import { Container, Typography, Box, Button } from '@mui/material'
import ServiceCard from '@/components/ServiceCard'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

interface PlansProps {
    isBgWhite?: boolean;
}

const cards = [
    {
        title: 'Soical Media Management',
        price: '99.99',
        desc: 'Enhance your online presence with our expert Social Media Management services, where we craft engaging posts, stories, and reels to captivate your audience and drive engagement on all major platforms.',
        link: 'https://postfactory.spp.io/order/E24M70'
    },
    {
        title: 'Business Growth',
        price: '1999.99',
        desc: "SEO-optimized blog posts can help you get more traffic, engage your audience, and drive more conversions. Our professionals develop custom content that places high in search engines and gives you the opportunity to grow your business.",
        link: 'https://postfactory.spp.io/order/E7RJ93'
    },
    {
        title: 'SEO Blog Posts',
        price: '59.99',
        desc: 'SEO-optimized blog posts can help you get more traffic, engage your audience, and drive more conversions. Our professionals develop custom content that places high in search engines and gives you the opportunity to grow your business.',
        link: 'https://postfactory.spp.io/order/Y70O96'
    },
    {
        title: 'Web Design',
        price: '199.99',
        desc: 'Transform your digital footprint with our innovative Web Design services, designed to create visually stunning and highly functional websites that attract and retain customers.',
        link: 'https://postfactory.spp.io/order/Y70O96'
    }
]

const SwiperButtons = () => {
    const swiper = useSwiper();

    const style =
    {
        cursor: 'pointer',
        background: '#222',
        display: 'grid',
        placeContent: 'center',
        borderRadius: 16,
        p: 1,
        '&:hover': {
            opacity: .7
        }
    }


    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
            <Box sx={style} onClick={() => swiper.slidePrev()}><ArrowBackIosRoundedIcon sx={{ color: '#fff' }} /></Box>
            <Box sx={style} onClick={() => swiper.slideNext()}><ArrowForwardIosRoundedIcon sx={{ color: '#fff' }} /></Box>
        </Box>
    )
}


export default function Plans({ isBgWhite }: PlansProps) {

    return (
        <Box sx={{ backgroundColor: isBgWhite === true ? '#fff' : '#f7f0ff' }}>

            <Container maxWidth='lg' sx={{ paddingBlock: 16, }}>
                <Typography variant='h2' sx={{ pb: 2, textAlign: 'center' }} >
                    Pick a Plan
                </Typography>
                <Typography variant='body1' textAlign={'center'} gutterBottom>
                    Decide the best path to elevate your brand: choose our Social Media Management to engage your audience, Logo Design to forge a memorable identity, or Website Design to optimize your online presence.
                </Typography>
                <Box sx={{ overflow: 'hidden', py: 4 }}>
                    <Swiper
                        spaceBetween={16}
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
                        {cards.map((card, index) => (
                            <SwiperSlide key={index} style={{ display: 'flex', height: 'auto' }}>
                                <ServiceCard serviceTitle={card.title} serviceDesc={card.desc} servicePrice={card.price} serviceLink={card.link} />
                            </SwiperSlide>
                        ))}
                        <SwiperButtons />

                    </Swiper>
                </Box>



            </Container >
        </Box >
    )
}
