import { Box, Typography } from '@mui/material'
import React from 'react'

interface featuresProps {
    icon: any;
    title: string;
    description: string;
}

export default function SocialPostsFeature({ icon, title, description }: featuresProps) {
    return (
        <Box sx={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', flexGrow: 1, gap: 4

        }}>
            <Box>
                {icon}
            </Box>
            <Box sx={{ color: '#fff' }}>
                <Typography variant='h6' gutterBottom sx={{ color: '#fff', textAlign: 'center' }}>{title}</Typography>
                <Typography variant='body1' sx={{ color: '#fff', textAlign: 'center' }}>{description}</Typography>
            </Box>
        </Box >
    )
}
