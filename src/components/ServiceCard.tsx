import React from 'react'
import { Card, CardContent, CardActions, Button, Typography, Divider, useTheme, Box } from '@mui/material';

interface ServiceCardProps {
    serviceTitle: string;
    servicePrice: string;
    serviceDesc: string;
    serviceLink: string;
}


export default function ServiceCard({ serviceTitle, servicePrice, serviceDesc, serviceLink }: ServiceCardProps) {
    const theme = useTheme();
    return (
        <>
            <Card variant='outlined' sx={{ position: 'relative', transition: 'all ease .2s', p: 2, borderRadius: 4, '&:hover': { borderColor: theme.palette.primary.iconColor, boxShadow: '0 24px 24px -8px rgba(0,0,0,.1)', transform: 'translateY(-8px)' } }} >
                <CardContent >
                    <Typography variant='h6' gutterBottom>{serviceTitle}</Typography>
                    <Typography variant='caption' gutterBottom>Starting at</Typography>
                    <Typography component={'div'} sx={{ display: 'flex', alignItems: 'center', gap: .7 }} variant='h5'>
                        ${servicePrice}
                        {serviceTitle === 'Soical Media Management' && (
                            <Typography variant='body1' sx={{ color: theme.palette.primary.text }}>/ month</Typography>
                        )}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant='body2'>{serviceDesc}</Typography>
                </CardContent>
                <CardActions>
                    <Button target='_blank' rel='noreferrer' size='large' sx={{
                        background: theme.palette.primary.accentGradient, px: 4, transition: 'unset',
                        '&:hover': {
                            background: theme.palette.primary.main
                        }
                    }} variant='contained' href={serviceLink}>Get Started</Button>
                </CardActions>
                {serviceTitle === "Soical Media Management" && (
                    <Box sx={{ position: 'absolute', display: 'grid', placeContent: 'center', py: 3, width: 160, background: theme.palette.primary.accentGradient, right: -48, top: 0, transform: 'rotate(45deg)', color: '#fff', fontSize: 14, boxShadow: '0 8px 24px rgba(0,0,120,.1)' }}>Bestseller</Box>
                )}
            </Card>
        </>
    )
}
