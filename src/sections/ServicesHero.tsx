import React from 'react'
import { Box, Typography, Button, Grid, Container, useTheme } from '@mui/material'

interface ServicesHeroProps {
    title: string;
    description: any;
    link: string;
    image?: string;
    video?: boolean;
}

export default function ServicesHero({ title, description, link, image, video }: ServicesHeroProps) {
    const theme = useTheme()
    return (
        <Box sx={{ mt: 4, minHeight: '60svh', alignItems: 'center', display: 'flex' }}>
            <Container maxWidth='lg' >
                <Grid container columnSpacing={18} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h1' sx={{ mb: 2 }} >
                            {title}
                        </Typography>

                        <Typography variant='body1' sx={{ mb: 2 }}>
                            {description}
                        </Typography>
                        <Button size='large' variant='contained' sx={{ background: theme.palette.primary.accentGradient }} href={link}>Get started</Button>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        {video ? (
                            <iframe width="100%" height={280} src="https://www.youtube.com/embed/DPt7tZrjl40" title="How It Works: Your Guide to Buying and Using Our Services ┃www.postfactory.co" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" frameBorder={0} allowFullScreen></iframe>
                        ) : (
                            <Box
                                component={'img'}
                                src={image}
                                sx={{
                                    maxWidth: '100%'
                                }}
                            />
                        )}
                    </Grid>
                </Grid>
                <Box className='linear-gradient__bg-effect' sx={{
                    background: 'linear-gradient(45deg, #fff 1%, #4285F4, #fff, #7832D1, #fff 80%)', position: 'absolute', width: '100%', height: '100%', maxHeight: '100vh', borderRadius: 256, top: 0, left: 0, zIndex: -1, filter: 'blur(110px)', opacity: .2
                }} />
            </Container>
        </Box>

    )
}
