import React from 'react'
import { Box, Typography, Button, Grid, Container, useTheme, Divider, SvgIcon } from '@mui/material'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import StarIcon from '@mui/icons-material/Star';

// const path = document.querySelector('.svgPath')
// let pathLength = path.getTotalLength();
// console.log(pathLength)

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
        <Box>
            <Container maxWidth='lg' sx={{ '& *:not(button)': { color: '#000' } }}>
                <Grid container sx={{ alignItems: 'center', minHeight: '100vh' }} spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h1' sx={{ mb: 4 }} gutterBottom >
                            Maximize Reach.<br />
                            Amplify Engagement. <br />
                            <span style={{ position: 'relative' }}>Boost Sales. <Box sx={{ position: 'absolute', bottom: -30, left: '50%', transform: 'translateX(-50%)', display: { xs: 'none', sm: 'block' } }}>
                                <svg className='svgLine' width="300" height="17" viewBox="0 0 259 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className='svgPath' d="M2.01196 14.3625C3.44898 12.403 6.91279 11.18 9.04814 10.5951C14.6572 9.05879 22.8348 8.01633 28.1622 7.43717C51.1485 4.9382 74.2856 3.79552 97.3882 3.14344C133.325 2.1291 169.462 1.84852 205.396 3.14344C222.783 3.77 239.759 5.5692 300.81 8.87764" stroke="#000000" strokeWidth="4" strokeLinecap="round" />
                                </svg>
                            </Box></span></Typography>

                        <Typography variant='body1' gutterBottom sx={{ mb: 4 }}>Unlock your business&apos;s full potential with our comprehensive suite of Social Media and Web Design services, including expertly crafted posts, stories, reels, blogs, and websites, all designed to elevate your brand, enhance customer engagement, and drive substantial growth.</Typography>
                        <Box sx={{ display: 'flex', gap: 2, mb: 4, flexDirection: { xs: 'column', sm: 'row' } }}>
                            <Button size='large' variant='contained'>Get started</Button>
                            <Button size='large' variant='outlined'>Book a Demo</Button>
                        </Box>
                        <Box>
                            <Typography variant='body2'>Supported social media channels</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 2, mt: 1 }}>
                                {channels.map((channel, index) => (
                                    <Box component={'img'} src={channel.src} key={index} sx={{ maxWidth: 32 }} />
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ justifyContent: 'center', alignItems: 'center', }}>
                        <Box sx={{}}>
                            <Box
                                component={'img'}
                                src='./assets/heroImage.webp'
                                sx={{
                                    maxWidth: '100%'
                                }}
                            />
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
