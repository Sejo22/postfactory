import React from 'react'
import { Container, Grid, Box, Typography, Button, Link, TextField, useTheme } from '@mui/material'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import routes from '../app/routes';

const quickLinks = [
    { title: 'Home', link: routes.home },
    { title: 'Examples', link: routes.examples },
    { title: 'Pricing', link: routes.pricing },
    { title: 'How it works', link: routes.howItWorks },
    { title: 'Contact', link: routes.contact }
];
const services = [
    { title: 'Social Posts', link: routes.services.socialPosts },
    { title: 'Business Growth Package', link: routes.services.businessGrowth },
    { title: 'SEO Blog Posts', link: routes.services.businessGrowth },
    { title: 'Web Design', link: routes.services.webDesign }
];

const socialLinks = [
    { icon: <FacebookRoundedIcon />, link: '#' },
    { icon: <XIcon />, link: '#' },
    { icon: <InstagramIcon />, link: '#' },
]

export default function Footer() {
    const theme = useTheme()
    return (
        <footer style={{ borderTop: '1px solid rgba(0,0,0,.12)', paddingBlock: 64, marginTop: 88 }}>
            <Container maxWidth='lg'>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={3}>
                        <Link href={routes.home}>
                            <Box component={'img'} src='assets/footerLogo.png' sx={{ maxWidth: '80%' }} />
                        </Link>
                        <Typography variant='body2' sx={{ mt: 3 }}>Post Factory excels in boosting your business&apos;s online presence through expert social media management, professional logo design, and innovative website design.</Typography>
                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 3 }}>
                            {socialLinks.map((socialLink, index) => (
                                <Link href={socialLink.link} key={index}>
                                    {socialLink.icon}
                                </Link>
                            ))}

                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Typography variant='h6' sx={{ position: 'relative', '&::before': { content: "''", ml: -2, position: 'absolute', width: '4px', height: '100%', left: 0, top: 0, background: theme.palette.primary.iconColor } }}>
                            Quick Links
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mt: 3 }}>
                            {quickLinks.map((quickLink, index) => (
                                <Button href={quickLink.link} sx={{ p: 0, mt: 1, textAlign: 'left', justifyContent: 'flex-start', color: theme.palette.primary.text, fontWeight: 400, '&:hover': { color: theme.palette.primary.iconColor, background: 'none' } }} variant='text' key={index} >{quickLink.title}</Button>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Typography variant='h6' sx={{ position: 'relative', '&::before': { content: "''", ml: -2, position: 'absolute', width: '4px', height: '100%', left: 0, top: 0, background: theme.palette.primary.iconColor } }}>
                            Services
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mt: 3 }}>
                            {services.map((service, index) => (
                                <Button href={service.link} sx={{ p: 0, mt: 1, textAlign: 'left', justifyContent: 'flex-start', color: theme.palette.primary.text, fontWeight: 400, '&:hover': { color: theme.palette.primary.iconColor, background: 'none' } }} variant='text' key={index} >{service.title}</Button>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Typography variant='h6' sx={{ position: 'relative', '&::before': { content: "''", ml: -2, position: 'absolute', width: '4px', height: '100%', left: 0, top: 0, background: theme.palette.primary.iconColor } }}>
                            Newsletter
                        </Typography>
                        <Typography variant='body2' sx={{ mt: 3 }}>Get all latest content delivered to your email a few times a month. Updates and news about all categories will send to you.</Typography>
                        <form method='post' target='_blank' noValidate style={{ marginTop: 24 }}>
                            <Box sx={{ position: 'relative' }}>
                                <TextField placeholder='Your Email' size='medium' fullWidth variant='outlined' sx={{ '.MuiInputBase-root>input': { width: 'calc(100% - 110px)' } }} />
                                <Button size='small' variant='contained' sx={{ px: 3, background: theme.palette.primary.accentGradient, position: 'absolute', top: '50%', right: 8, transform: 'translateY(-50%)', '&:hover': { background: theme.palette.primary.main, transition: 'box-shadow ease .2s' } }}>Join</Button>
                            </Box>
                        </form>
                    </Grid>
                </Grid>
            </Container>


        </footer>
    )
}
