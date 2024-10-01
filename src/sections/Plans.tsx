import React, { useCallback, useRef } from 'react'
import { Container, Typography, Box, Button } from '@mui/material'
import ServiceCard from '@/components/ServiceCard'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import PhotoIcon from '@mui/icons-material/Photo';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PreviewIcon from '@mui/icons-material/Preview';
import DashboardIcon from '@mui/icons-material/Dashboard';


interface PlansProps {
    isBgWhite?: boolean;
}
const iconStyle = {
    border: '2px solid rgba(0,0,0,.12)',
    borderRadius: .5,
    p: .25,
    color: '#333'
}

const cards = [
    {
        title: 'Soical Media Management',
        price: '99.99',
        desc: 'Highly engaging social media posts for your socials.',
        link: 'https://postfactory.spp.io/order/E24M70',
        category: 'Social Media',
        icon: <PhotoIcon sx={iconStyle} />
    },
    {
        title: 'Short-Form Videos',
        price: '99.99',
        desc: 'Short, engaging 15-60 second videos designed for TikTok, Reels, and Shorts.',
        link: 'https://postfactory.spp.io/order/Y70O96',
        category: 'Social Media',
        icon: <PreviewIcon sx={iconStyle} />
    },
    {
        title: 'SEO Blog Posts',
        price: '59.99',
        desc: 'Completely SEO-optimized blog posts tailored for your website.',
        link: 'https://postfactory.spp.io/order/Y70O96',
        category: 'SEO Optimization',
        icon: <PreviewIcon sx={iconStyle} />
    },
    {
        title: 'UGC Videos',
        price: '99.99',
        desc: 'Authentic video content crafted by real users to boost genuine brand promotion.',
        link: 'https://postfactory.spp.io/order/Y70O96',
        category: 'Social Media',
        icon: <PreviewIcon sx={iconStyle} />
    },
    {
        title: 'Web Design',
        price: '199.99',
        desc: 'Expert web design services that create stunning, mobile-friendly, and SEO- optimized websites.',
        link: 'https://postfactory.spp.io/order/Y70O96',
        category: 'Design',
        icon: <DashboardIcon sx={iconStyle} />
    },
    {
        title: 'Business Growth',
        price: '1999.99',
        desc: "Accelerate your brand's growth with expert social media strategies, content creation, lead generation, and community management.",
        link: 'https://postfactory.spp.io/order/E7RJ93',
        category: 'Business',
        icon: <BusinessCenterIcon sx={iconStyle} />
    },
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
        <Box sx={{ backgroundColor: isBgWhite === true ? '#fff' : 'rgba(76,118,237,.05)' }}>

            <Container maxWidth='lg' sx={{ paddingBlock: 16, }}>
                <Typography variant='h2' sx={{ pb: 2, textAlign: 'center' }} >
                All Services
                </Typography>
                <Typography variant='body1' textAlign={'center'} gutterBottom>
                Get your creative and marketing tasks done efficiently without the hassle of unreliable freelancers or overpriced agencies. Benefit from a fixed, predictable monthly rate—no contracts, hidden fees, or surprises.

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
                                <ServiceCard serviceCategory={card.category} serviceIcon={card.icon} serviceTitle={card.title} serviceDesc={card.desc} servicePrice={card.price} serviceLink={card.link} />
                            </SwiperSlide>
                        ))}
                        <SwiperButtons />

                    </Swiper>
                </Box>



            </Container >
        </Box >
    )
}
