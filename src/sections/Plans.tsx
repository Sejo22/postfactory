import React from 'react'
import { Container, Typography, Box, Button } from '@mui/material'
import ServiceCard from '@/components/ServiceCard'

const cards = [
    {
        title: 'Soical Media Management',
        price: '89.99',
        desc: 'Enhance your online presence with our expert Social Media Management services, where we craft engaging posts, stories, and reels to captivate your audience and drive engagement on all major platforms.',
        link: 'https://postfactory.spp.io/order/E24M70'
    },
    {
        title: 'Logo Design',
        price: '149.99',
        desc: "Boost your brand's visibility and credibility with our professional logo design services - essential for creating a lasting impression and establishing a unique identity in your market.",
        link: 'https://postfactory.spp.io/order/E7RJ93'
    },
    {
        title: 'Web Design',
        price: '199.99',
        desc: 'Transform your digital footprint with our innovative Web Design services, designed to create visually stunning and highly functional websites that attract and retain customers.',
        link: 'https://postfactory.spp.io/order/Y70O96'
    }
]


export default function Plans() {

    return (
        <Box sx={{ backgroundColor: '#f7f0ff' }}>
            <Container maxWidth='xl' sx={{ mt: 8, paddingBlock: 8 }}>
                <Typography variant='h2' sx={{ pb: 2, textAlign: 'center' }} >
                    Pick a Plan
                </Typography>
                <Typography variant='body1' textAlign={'center'} gutterBottom>
                    Decide the best path to elevate your brand: choose our Social Media Management to engage your audience, Logo Design to forge a memorable identity, or Website Design to optimize your online presence.
                </Typography>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr ', md: '1fr 1fr', lg: '1fr 1fr 1fr' }, gap: 4, mt: 8 }}>
                    {cards.map((card, index) => (
                        <ServiceCard serviceTitle={card.title} serviceDesc={card.desc} servicePrice={card.price} serviceLink={card.link} key={index} />
                    ))}
                </Box>

            </Container>
        </Box>
    )
}
