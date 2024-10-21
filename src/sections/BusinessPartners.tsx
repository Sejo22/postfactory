import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image';
import React from 'react'

const brands = [
    '/assets/rolex_logo.png',
    '/assets/brand2.png',
    '/assets/brand3.png',
    '/assets/brand4.png',
    '/assets/brand5.png',
    '/assets/brand6.png',
];

export default function BusinessPartners() {
    return (
        <Box sx={{ background: '#000000', py: 4 }}>
            <Container maxWidth='lg'>
                <Grid container>
                    <Grid item xs={12} md={5}>
                        <Typography component={'h2'} variant='h1' sx={{ color: '#fff', fontWeight: 600 }}>
                            Give your brand breath of <span style={{ fontStyle: 'italic', fontWeight: 400, fontFamily: ' "Noto Serif Display", serif' }}>luxury</span>.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    {brands.map((brand, index) => (
                        <Grid item key={index} xs={12} md={4} sx={{ display: 'grid', placeContent: 'center' }}>
                            <Image src={brand} width={220} height={220} alt='brand' style={{ filter: 'invert(1)' }} />
                        </Grid>

                    ))}
                </Grid>
            </Container>
        </Box>
    )
}
