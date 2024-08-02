import React from 'react'
import { Box, Typography, Button, Grid, Container, useTheme } from '@mui/material'

interface ServicesHeroProps {
    title: string;
    description: string;
    link: string;
    image: string;
}

export default function ServicesHero({ title, description, link, image }: ServicesHeroProps) {
    const theme = useTheme()
    return (
        <Box sx={{ mt: 4 }}>
            <Container maxWidth='xl' >
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
                        <Box
                            component={'img'}
                            src={image}
                            sx={{
                                maxWidth: '100%'
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>

    )
}
