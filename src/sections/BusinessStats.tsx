import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const growthData = [
    {
        number: 64,
        text: 'Revenue Increase',
        color: '#825DF1'
    },
    {
        number: 284,
        text: 'Customer Retention',
        color: '#f1825d'
    },
    {
        number: 212,
        text: 'Market Expansion',
        color: '#41a85b'
    }
]

export default function BusinessStats() {
    return (
        <Box sx={{ background: '#f9f9f9' }}>
            <Container maxWidth='lg' sx={{ textAlign: 'center', py: 8 }}>
                <Typography variant='h2' sx={{ pb: 2 }} >
                    Business Stats?
                </Typography>
                <Typography variant='body1' sx={{ pb: 8 }} gutterBottom>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, blanditiis.
                </Typography>
                <Box sx={{ display: 'flex', gap: 4, justifyContent: 'space-between' }}>
                    {growthData.map((card, index) => (
                        <Box key={index} sx={{ p: 4, flexGrow: 1 }}>
                            <Typography color={card.color} component='div' variant='h1' gutterBottom>
                                +{card.number}%
                            </Typography>
                            <Typography variant='body1' fontSize={20} color={'#222'}>{card.text}</Typography>
                        </Box>
                    ))}
                </Box>
            </Container >
        </Box>

    )
}
