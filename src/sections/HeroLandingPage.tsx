import React from 'react'
import { Box, Typography, Button, Grid, Container, useTheme } from '@mui/material'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import StarIcon from '@mui/icons-material/Star';

// const path = document.querySelector('.svgPath')
// let pathLength = path.getTotalLength();
// console.log(pathLength)

export default function HeroLandingPage() {
    const theme = useTheme()
    return (
        <Container maxWidth='lg'>
            <Grid container sx={{ alignItems: 'center', minHeight: '100vh' }}>
                <Grid item xs={12} md={6}>
                    <Typography variant='h1' sx={{ mb: 2 }} >Start <span style={{
                        // background: 'linear-gradient(90deg,#4285F4, #7832D1)',
                        // WebkitBackgroundClip: 'text',
                        // WebkitTextFillColor: 'transparent',
                        position: 'relative'
                    }}>growing
                        <Box sx={{ position: 'absolute', bottom: -30, left: -25, display: { xs: 'none', sm: 'block' } }}>
                            <svg className='svgLine' width="256" height="17" viewBox="0 0 259 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className='svgPath' d="M2.01196 14.3625C3.44898 12.403 6.91279 11.18 9.04814 10.5951C14.6572 9.05879 22.8348 8.01633 28.1622 7.43717C51.1485 4.9382 74.2856 3.79552 97.3882 3.14344C133.325 2.1291 169.462 1.84852 205.396 3.14344C222.783 3.77 239.759 5.5692 256.81 8.87764" stroke="#000000" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </Box>
                    </span> your business with only $89.99/month</Typography>

                    <Typography variant='body1' sx={{ mb: 2 }}>Unlock your business's full potential with our comprehensive suite of Social Media and Web Design services, including expertly crafted posts, stories, reels, logos, and websites.</Typography>
                    <Box sx={{ display: 'flex', gap: 2, mb: 8 }}>
                        <Button size='large' variant='contained'>Get started</Button>
                        <Button size='large' variant='outlined'>How it works?</Button>
                    </Box>

                    <Box>

                        <StarIcon sx={{ color: 'orange' }} />
                        <StarIcon sx={{ color: 'orange' }} />
                        <StarIcon sx={{ color: 'orange' }} />
                        <StarIcon sx={{ color: 'orange' }} />
                        <StarIcon sx={{ color: 'orange' }} />
                        <Typography variant='body2' sx={{ mb: 2 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ratione. Sapiente, eaque vero similique aperiam blanditiis accusamus modi excepturi necessitatibus eius minus, cum, quod inventore?</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexDirection: 'row' }}>
                            <Box sx={{ width: 64, background: 'url(/assets/heroReview.jpg)', height: 64, borderRadius: 64, backgroundSize: 'cover' }} />

                            <Box>
                                <Typography sx={{ fontWeight: 600 }} variant='body2' gutterBottom>Michael Douglas</Typography>
                                <Typography variant='body2' gutterBottom>CEO at Company LLC</Typography>
                            </Box>
                        </Box>


                    </Box>

                    {/* <Typography sx={{ fontWeight: 600 }} variant='body2' gutterBottom>Supported Channels:</Typography>
                    <Box>
                        <FacebookRoundedIcon sx={{ fontSize: 40 }} />
                        <InstagramIcon sx={{ fontSize: 40 }} />
                        <LinkedInIcon sx={{ fontSize: 40 }} />
                        <PinterestIcon sx={{ fontSize: 40 }} />
                    </Box> */}

                </Grid>
                <Grid item xs={12} md={6} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Box
                        component={'img'}
                        src='./assets/heroImage.webp'
                        sx={{
                            maxWidth: '100%'
                        }}
                    />
                </Grid>
            </Grid>
            <Box className='linear-gradient__bg-effect' sx={{
                background: 'linear-gradient(45deg, #fff 10%, #4285F4, #fff, #7832D1, #fff 80%)', position: 'absolute', width: '100%', height: '100%', maxHeight: '100vh', borderRadius: 256, top: 0, left: 0, zIndex: -1, filter: 'blur(120px)', opacity: .35
            }} />
        </Container>
    )
}
