import React, { useState } from 'react'
import { Card, CardContent, CardActions, Button, Typography, Divider, useTheme, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface PricingWithFeaturesProps {
    serviceTitle: string;
    servicePrice: string;
    serviceFeatures: string[];
    serviceLink: string;
    monthly?: boolean;
    isStrikethrough?: boolean;
}


export default function PricingWithFeatures({ serviceTitle, servicePrice, serviceFeatures, serviceLink, monthly, isStrikethrough }: PricingWithFeaturesProps) {
    const theme = useTheme();
    return (
        <>
            <Card variant='outlined' sx={{ position: 'relative', transition: 'all ease .2s', p: 2, borderRadius: 4, '&:hover': { borderColor: theme.palette.primary.iconColor, boxShadow: '0 24px 24px -8px rgba(0,0,0,.1)', transform: 'translateY(-8px)' } }} >
                <CardContent >
                    <Typography variant='h6' gutterBottom>{serviceTitle}</Typography>
                    <Typography variant='caption' gutterBottom>Starting from</Typography>
                    <Typography component={'div'} sx={{ display: 'flex', alignItems: 'center', gap: .7 }} variant='h5'>
                        ${servicePrice}
                        {monthly && (
                            <Typography variant='body1' sx={{ color: theme.palette.primary.text }}>/ month</Typography>
                        )}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    {serviceFeatures.map((feature, index) => (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, opacity: isStrikethrough && index === serviceFeatures.length - 1 ? 0.25 : 1 }} key={index}>
                            <CheckCircleIcon sx={{ color: theme.palette.primary.iconColor }} />
                            <Typography variant='body2' sx={{ textDecoration: isStrikethrough && index === serviceFeatures.length - 1 ? 'line-through' : 'none' }}>{feature}</Typography>
                        </Box>
                    ))}

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
                    <Box sx={{ position: 'absolute', display: 'grid', placeContent: 'center', py: 1, width: 120, background: theme.palette.primary.accentGradient, right: -30, top: 14, transform: 'rotate(45deg)', color: '#fff', fontSize: 14 }}>Best seller</Box>
                )}
            </Card>
        </>
    )
}
