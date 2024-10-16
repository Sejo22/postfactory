import React from 'react'
import { Box, Typography, Button, Grid, Container, useTheme } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import parse from 'html-react-parser'


interface ServicesHeroProps {
    title: string;
    serviceFeature: string[];
    link: string;
    image?: string;
    video?: boolean;
}


export default function ServicesHero({ title, link, serviceFeature, video }: ServicesHeroProps) {

    const features = ['feature', 'feature']
    const theme = useTheme()
    return (
        <Box sx={{ mt: 4, minHeight: '60svh', alignItems: 'center', display: 'flex' }}>
            <Container maxWidth='lg' >
                <Grid container columnSpacing={18} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h1' sx={{ mb: 2 }} >
                            {title}
                        </Typography>

                        <Box sx={{ mb: 4 }}>
                            {serviceFeature.map((feature, index) => (
                                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
                                    <VerifiedIcon sx={{ color: theme.palette.primary.iconColor }} />
                                    <Typography variant='body1' sx={{ color: '#111', fontWeight: 500 }}>
                                        {parse(feature)}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>

                        <Button size='large' variant='contained' sx={{ background: theme.palette.primary.accentGradient }} href={link}>Get started</Button>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        {video ? (
                            <iframe width="100%" height={280} src="https://www.youtube.com/embed/DPt7tZrjl40" title="How It Works: Your Guide to Buying and Using Our Services ┃www.postfactory.co" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" frameBorder={0} allowFullScreen></iframe>
                        ) : (
                            <Box sx={{ display: 'grid', width: '100%', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gridAutoColumns: '1fr', gap: 2, position: 'relative', overflow: 'hidden', mb: { xs: 4, md: 'initial' } }}>
                                <Box
                                    sx={{
                                        width: '100%',
                                        aspectRatio: 1,
                                        gridArea: 'span 1/ span 1/ span 1/ span 1',
                                        position: 'relative',
                                        borderRadius: 4,
                                        overflow: 'hidden'
                                    }}
                                >
                                    <video style={{ objectFit: 'cover', backgroundSize: 'cover', backgroundPosition: '-50%', width: '100%', height: '100%', margin: 'auto', position: 'absolute', inset: '-100%' }} autoPlay loop muted playsInline src="./assets/videos/Video_1.mp4"></video>
                                </Box>

                                <Box
                                    sx={{
                                        width: '100%',
                                        gridArea: 'span 2 / span 1 / span 2 / span 1',
                                        position: 'relative',
                                        borderRadius: 4,
                                        overflow: 'hidden'
                                    }}
                                >
                                    <video style={{ objectFit: 'cover', backgroundSize: 'cover', backgroundPosition: '-50%', width: '100%', height: '100%', margin: 'auto', position: 'absolute', inset: '-100%' }} autoPlay loop muted playsInline src="./assets/videos/Video_3.mp4"></video>
                                </Box>

                                <Box
                                    sx={{
                                        width: '100%',
                                        aspectRatio: 1,
                                        gridArea: 'span 1/ span 1/ span 1/ span 1',
                                        position: 'relative',
                                        borderRadius: 4,
                                        overflow: 'hidden'
                                    }}
                                >
                                    <video style={{ objectFit: 'cover', backgroundSize: 'cover', backgroundPosition: '-50%', width: '100%', height: '100%', margin: 'auto', position: 'absolute', inset: '-100%' }} autoPlay loop muted playsInline src="./assets/videos/Video_2.mp4"></video>
                                </Box>
                            </Box>
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
