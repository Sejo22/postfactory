import React from 'react'
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material'

interface SocialPostsAdditonalProps {
    serviceTitle: string;
    servicePrice: string;
    serviceDescription: string;
}

function SocialPostsAdditonal({ serviceTitle, servicePrice, serviceDescription }: SocialPostsAdditonalProps) {
    const theme = useTheme();
    return (
        <>
            <Card variant='outlined' sx={{ position: 'relative', transition: 'all ease .2s', p: 2, borderRadius: 4, '&:hover': { borderColor: theme.palette.primary.iconColor, boxShadow: '0 24px 24px -8px rgba(0,0,0,.1)', transform: 'translateY(-8px)' } }} >
                <CardContent >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box>
                            <Typography variant='h6' gutterBottom>{serviceTitle}</Typography>
                            <Typography variant='body1'>{serviceDescription}</Typography>
                        </Box>
                        <Typography component={'div'} sx={{ display: 'flex', alignItems: 'center', gap: .7 }} variant='h5'>
                            ${servicePrice}
                        </Typography>
                    </Box>
                </CardContent>

            </Card>
        </>
    )
}

export default SocialPostsAdditonal