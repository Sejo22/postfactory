import React from 'react'
import { Card, CardHeader, CardContent, CardActions, Button, Typography, Divider, useTheme, Box } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

interface ServiceCardProps {
    serviceTitle: string;
    serviceIcon: any;
    serviceCategory: any;
    servicePrice: string;
    serviceDesc: string;
    serviceLink: string;
}


export default function ServiceCard({ serviceTitle, serviceIcon, serviceCategory, servicePrice, serviceDesc, serviceLink }: ServiceCardProps) {
    const theme = useTheme();
    return (
        <>
            <Card variant='outlined' sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', position: 'relative', transition: 'all ease .2s', p: 2, borderRadius: 4, '&:hover': { borderColor: theme.palette.primary.iconColor, boxShadow: '0 24px 24px -8px rgba(0,0,0,.1)', transform: 'translateY(-8px)' } }} >
                <CardContent >
                    <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between' }}>
                        {serviceIcon}
                        <Button variant='contained' sx={{ textTransform: 'uppercase', borderRadius: 64, fontSize: 12, padding: '2px 16px', background: '#d4d4d4', color: '#111', fontWeight: 600, pointerEvents: 'none' }}>{serviceCategory}</Button>
                    </Box>
                    <Typography variant='h6' gutterBottom>{serviceTitle}</Typography>
                    <Typography variant='body2' sx={{ mb: 4 }}>{serviceDesc}</Typography>

                    <Typography sx={{ display: 'flex', alignItems: 'center', gap: .7 }} variant='h5'>${servicePrice}</Typography>
                    <Typography variant='caption' gutterBottom>Pricing from</Typography>

                </CardContent>
                <CardActions sx={{ flexDirection: 'column', gap: 1 }}>
                    <Button target='_blank' rel='noreferrer' size='large' sx={{
                        background: theme.palette.primary.iconColor, px: 4, transition: 'unset', width: '100%',
                        '&:hover': {
                            background: theme.palette.primary.main
                        }
                    }} variant='contained' href={serviceLink}>Get Started</Button>
                    <Button variant='text' sx={{ width: '100%', color: theme.palette.primary.iconColor }}>Learn more<InfoIcon sx={{ ml: 1, fontSize: 20 }} /></Button>
                </CardActions>
                {/* {serviceTitle === "Soical Media Management" && (
                    <Box sx={{ position: 'absolute', display: 'grid', placeContent: 'center', py: 3, width: 160, background: theme.palette.primary.accentGradient, right: -48, top: 0, transform: 'rotate(45deg)', color: '#fff', fontSize: 14, boxShadow: '0 8px 24px rgba(0,0,120,.1)' }}>Bestseller</Box>
                )} */}
            </Card>
        </>
    )
}
