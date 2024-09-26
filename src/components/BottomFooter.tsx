import React from 'react'
import { Box, Container, Grid, Typography, Button, useTheme } from '@mui/material'


const links = [
    { title: 'Privacy Policy', link: '#' },
    { title: 'Terms and Conditions', link: '#' },
    { title: 'Refund Policy', link: '#' },
]


export default function BottomFooter() {
    const theme = useTheme();
    const today = new Date();
    return (
        <Box sx={{ backgroundColor: '#F5F5F5', py: 3 }}>
            <Container maxWidth='lg'>
                <Grid container sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='body2' sx={{ textAlign: { xs: 'center', md: 'left' }, mb: { xs: 3, md: 'inherit' } }}>Copyright {today.getFullYear()} - Post Factory LLC</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, alignItems: 'center', gap: 3 }}>
                            {links.map((link, index) => (
                                <Button href={link.link} sx={{ p: 0, color: theme.palette.primary.text, fontWeight: 400, fontSize: 14, '&:hover': { color: theme.palette.primary.iconColor, background: 'none' } }} variant='text' key={index} >{link.title}</Button>
                            ))}
                        </Box>

                    </Grid>
                </Grid>
            </Container>

        </Box>
    )
}
