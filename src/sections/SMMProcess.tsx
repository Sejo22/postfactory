import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface ProcessCardsProps {
    bgColor: string;
    title: string;
    desc: string;
    image: string;
}

const ProcessCards = ({ bgColor, title, desc, image }: ProcessCardsProps) => {
    return (
        <Box sx={{ backgroundColor: `${bgColor}`, textAlign: 'left', p: 4, borderRadius: 2 }}>
            <Typography component={'div'} variant='h6' gutterBottom>{title}</Typography>
            <Typography variant='body1' sx={{ mb: 2 }} gutterBottom>{desc}</Typography>
            <Image src={image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                alt='' />

        </Box>
    )
}

const cardsData = [{
    title: 'Select Service',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, veniam?',
    image: '/assets/post1.webp',
    bgColor: '#eee9fd'
},
{
    title: 'Submit Questionnaire',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, veniam?',
    image: '/assets/post1.webp',
    bgColor: '#D3ECFE'
}, {
    title: 'Receive Content',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, veniam?',
    image: '/assets/post1.webp',
    bgColor: '#FEEBEC'
},]


export default function SMMProcess() {
    return (
        <Container maxWidth='lg' sx={{ textAlign: 'center', mt: 8, paddingBlock: 8 }}>
            <Typography variant='h2' sx={{ pb: 2 }} >
                How it works?
            </Typography>
            <Typography variant='body1' sx={{ pb: 8 }} gutterBottom>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, blanditiis.
            </Typography>
            <Grid container spacing={4}>
                {cardsData.map((card, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <ProcessCards bgColor={card.bgColor} title={card.title} desc={card.desc} image={card.image} />
                    </Grid>
                ))}

            </Grid>
        </Container>
    )
}
