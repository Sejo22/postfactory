import React from 'react'
import { Container, Box, Typography, Button, useTheme } from '@mui/material'

export default function CTA() {
    const theme = useTheme();
    return (
        <Box>
            <Container maxWidth='lg' sx={{ width: { xs: '90%', lg: 'inherit' }, textAlign: 'center', background: theme.palette.primary.accentGradient, borderRadius: 4, p: 6, my: 4 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography component={'h6'} variant='h4' sx={{ color: '#fff', mb: 4 }}>Start Growing Your Social Media</Typography>
                    <Typography variant='body1' sx={{ color: '#fff', mb: 4, maxWidth: { xs: 'inherit', sm: '75%' } }}>Have questions or need assistance? Complete our contact form to connect with our expert team, and let us help you achieve your business goals!</Typography>
                    <Button variant='contained' href='#' >Get in touch</Button>
                </Box>

            </Container>
        </Box>
    )
}
