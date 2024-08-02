import React from 'react'
import { Container, Box, Button, Typography, Grid, useTheme } from '@mui/material'

export default function Services() {
    const theme = useTheme();
    return (
        <Box sx={{ mt: 4 }}>
            <Container maxWidth='xl' >
                <Grid container rowSpacing={1} columnSpacing={6} sx={{ mb: { xs: 6, md: 'inherit' }, alignItems: 'center', minHeight: '80vh', flexDirection: { xs: 'column-reverse', sm: 'row' } }}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant='h3' sx={{ mb: 3 }}>Logo Design</Typography>
                        <Typography variant='body1' sx={{ mb: 4 }}>
                            Did you know that it takes only <strong>10 seconds</strong> for consumers to form their first impression of your brand&apos;s logo?
                            <br />
                            <br />
                            Research indicates that while a logo becomes recognizable after 5-7 impressions, those initial moments <strong>are crucial.</strong>
                            <br />
                            <br />
                            Let us design a logo that makes every second count, <strong>enhancing your brand&apos;s impact</strong> from the first glance.
                        </Typography>
                        <Button variant='contained' size='large' sx={{
                            background: theme.palette.primary.accentGradient, px: 4, transition: 'unset',
                            '&:hover': {
                                background: theme.palette.primary.main
                            }
                        }}>See more</Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box component={'img'} src='assets/logoDesign.webp' sx={{ maxWidth: '100%' }} />
                    </Grid>
                </Grid>

                <Grid container rowSpacing={1} columnSpacing={6} sx={{ mb: { xs: 6, md: 'inherit' }, alignItems: 'center', minHeight: '80vh', flexDirection: { xs: 'column', sm: 'row' } }}>
                    <Grid item xs={12} sm={6}>
                        <Box component={'img'} src='assets/webDesign.webp' sx={{ maxWidth: '100%' }} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant='h3' sx={{ mb: 3 }}>Web Design</Typography>
                        <Typography variant='body1' sx={{ mb: 4 }}>
                            Transform your digital identity with our custom <strong>web design services.</strong> We create stunning, user-friendly websites that not only look great but also perform exceptionally.
                            <br />
                            <br />
                            Our designs are tailored to your brand&apos;s needs, ensuring that your site not only attracts visitors but also <strong>keeps them engaged</strong>.
                            <br />
                            <br />
                            Let us help you make <strong>a powerful impression</strong> online with a website that truly stands out.
                        </Typography>
                        <Button variant='contained' size='large' sx={{
                            background: theme.palette.primary.accentGradient, px: 4, transition: 'unset',
                            '&:hover': {
                                background: theme.palette.primary.main
                            }
                        }}>See more</Button>
                    </Grid>

                </Grid>
            </Container>
        </Box >
    )
}
