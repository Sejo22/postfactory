import React from 'react'
import { Box, Typography, Button, Grid, Container, useTheme } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import parse from 'html-react-parser'
import Image from 'next/image';


interface ServicesHeroProps {
    title: string;
    serviceFeature: string[];
    link: string;
    image?: string;
    video?: boolean;
    isSocialPosts?: boolean;
    showImage?: boolean;
}

const channels = [
    { src: 'assets/facebookSVG.svg' },
    { src: 'assets/instagramSVG.svg' },
    { src: 'assets/linkedinSVG.svg' },
    { src: 'assets/pinterestSVG.svg' },
    { src: 'assets/youtubeSVG.svg' },
    { src: 'assets/tiktokSVG.svg' },
    { src: 'assets/twitterSVG.svg' },
]


export default function ServicesHero({ title, link, serviceFeature, video, isSocialPosts, showImage, image }: ServicesHeroProps) {

    const theme = useTheme()
    return (
        <Box sx={{ mt: 4, minHeight: '60svh', alignItems: 'center', display: 'flex' }}>
            <Container maxWidth='lg' >
                <Grid container spacing={6} sx={{ alignItems: 'center' }}>
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
                        {isSocialPosts && (
                            <Box sx={{ mt: 4 }}>
                                <Typography variant='body2' gutterBottom>Supported social media channels</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 2, mt: 1 }}>
                                    {channels.map((channel, index) => (
                                        <Box component={'img'} src={channel.src} key={index} sx={{ width: 32, height: 32, maxWidth: 32 }} />
                                    ))}
                                </Box>
                            </Box>
                        )}

                    </Grid>
                    <Grid item xs={12} md={6} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        {video ? (
                            <iframe width="100%" height={280} src="https://www.youtube.com/embed/DPt7tZrjl40" title="How It Works: Your Guide to Buying and Using Our Services ┃www.postfactory.co" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" frameBorder={0} allowFullScreen></iframe>
                        ) :
                            showImage ? (<Box
                                sx={{
                                    width: '100%',
                                    position: 'relative',
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                }}
                            >
                                <Image
                                    src={`${image}`}
                                    alt=""
                                    width={512}
                                    height={512}
                                    style={{
                                        objectFit: 'cover',
                                        width: '100%',
                                        height: '100%',
                                    }}
                                />
                            </Box>
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

