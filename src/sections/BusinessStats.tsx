import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const growthData = [
    {
        number: 64,
        text: 'Revenue Increase',
        color: '#808080'
    },
    {
        number: 284,
        text: 'Customer Retention',
        color: '#808080'
    },
    {
        number: 212,
        text: 'Market Expansion',
        color: '#808080'
    }
]

export default function BusinessStats() {
    return (
        <Box sx={{ background: '#f9f9f9' }}>
            <Container maxWidth='lg' sx={{ textAlign: 'center', py: 8 }}>
                <Typography variant='h2' sx={{ pb: 2 }} >
                    Delivering Organic Growth
                </Typography>
                <Typography variant='body1' sx={{ pb: 8 }} gutterBottom>
                Experience effortless, long-term business growth powered by sophisticated, organic strategies—elevating your brand without the need for paid ads
                </Typography>
                <Box sx={{ display: 'flex', gap: 4, justifyContent: 'space-between' }}>
                    {growthData.map((card, index) => (
                        <Box key={index} sx={{ p: 4, flexGrow: 1 }}>
                            <Typography color={card.color} component='div' variant='h1' gutterBottom>
                                +{card.number}%
                            </Typography>
                            <Typography variant='body1' fontSize={30} color={'#222'}>{card.text}</Typography>
                        </Box>
                    ))}
                </Box>
            </Container >
        </Box>

    )
}
