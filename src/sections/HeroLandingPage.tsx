import React from 'react'
import { Box, Typography, Button, Grid, Container, useTheme } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';


const channels = [
    { src: 'assets/facebookSVG.svg' },
    { src: 'assets/instagramSVG.svg' },
    { src: 'assets/linkedinSVG.svg' },
    { src: 'assets/pinterestSVG.svg' },
    { src: 'assets/youtubeSVG.svg' },
    { src: 'assets/tiktokSVG.svg' },
    { src: 'assets/twitterSVG.svg' },
]

export default function HeroLandingPage() {
    const theme = useTheme()
    return (
        <Box sx={{ mt: 4, minHeight: '60svh', alignItems: 'center', display: 'flex' }}>
            <Container maxWidth='lg' sx={{}}>
                <Grid container sx={{ alignItems: 'center', minHeight: '90vh' }} spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h1' sx={{ mb: 4 }} gutterBottom >
                            Maximize Reach.<br />
                            Amplify Engagement. <br />
                            <span style={{ position: 'relative' }}>Boost Sales. <Box sx={{ position: 'absolute', bottom: -30, left: '50%', transform: 'translateX(-50%)', display: { xs: 'none', sm: 'block' } }}>
                                <svg className='svgLine' width="300" height="17" viewBox="0 0 259 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className='svgPath' d="M2.01196 14.3625C3.44898 12.403 6.91279 11.18 9.04814 10.5951C14.6572 9.05879 22.8348 8.01633 28.1622 7.43717C51.1485 4.9382 74.2856 3.79552 97.3882 3.14344C133.325 2.1291 169.462 1.84852 205.396 3.14344C222.783 3.77 239.759 5.5692 300.81 8.87764" stroke="#000000" strokeWidth="4" strokeLinecap="round" />
                                </svg>
                            </Box></span></Typography>
                        <Box sx={{ mb: 4 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: .5, mb: 1 }}>
                                <VerifiedIcon sx={{ color: theme.palette.primary.accentGradient }} />,
                                <Typography variant='body1' sx={{ color: '#111', fontWeight: 500 }}>Unlock your <strong>business&apos;s</strong> full potential</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: .5, mb: 1 }}>
                                <VerifiedIcon sx={{ color: theme.palette.primary.accentGradient }} />,
                                <Typography variant='body1' sx={{ color: '#111', fontWeight: 500 }}>With our <strong>comprehensive</strong> suite</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: .5, mb: 1 }}>
                                <VerifiedIcon sx={{ color: theme.palette.primary.accentGradient }} />,
                                <Typography variant='body1' sx={{ color: '#111', fontWeight: 500 }}><strong>All designed</strong> to elevate your brand</Typography>
                            </Box>
                        </Box>

                        {/* <Typography variant='body1' gutterBottom sx={{ mb: 4 }}>Unlock your business&apos;s full potential with our comprehensive suite of Social Media and Web Design services, including expertly crafted posts, stories, reels, blogs, and websites, all designed to elevate your brand, enhance customer engagement, and drive substantial growth.</Typography> */}
                        <Box sx={{ display: 'flex', gap: 2, mb: 4, flexDirection: { xs: 'column', sm: 'row' } }}>
                            <Button size='large' variant='contained'>Get started</Button>
                            <Button size='large' variant='outlined'>Book a Demo</Button>
                        </Box>
                        <Box>
                            <Typography variant='body2' gutterBottom>Supported social media channels</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 2, mt: 1 }}>
                                {channels.map((channel, index) => (
                                    <Box component={'img'} src={channel.src} key={index} sx={{ maxWidth: 32 }} />
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ justifyContent: 'center', alignItems: 'center', }}>
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
                    </Grid>
                </Grid>
                <Box className='linear-gradient__bg-effect' sx={{
                    background: 'linear-gradient(45deg, #fff 1%, #4285F4, #fff, #7832D1, #fff 80%)', position: 'absolute', width: '100%', height: '100%', maxHeight: '100vh', borderRadius: 256, top: 0, left: 0, zIndex: -1, filter: 'blur(110px)', opacity: .2
                }} />
            </Container>
        </Box >

    )
}
