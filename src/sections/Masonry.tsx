import React from 'react'
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

const WaveItem = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 2, background: 'white', boxShadow: '0 8px 12px -2px rgba(0,0,0,.5)', borderRadius: 64 }}>
            <CancelIcon sx={{ color: '#eb2027' }} />
            <Typography variant='body2' sx={{ fontWeight: 600 }}>Limited Expertise</Typography>
        </Box>
    )
}

export default function Masonry() {
    return (
        <Container maxWidth='lg'>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Paper elevation={2}>Item 1</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ background: 'linear-gradient(-45deg,#E9D3C8,#FAF9F7)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, p: 6, borderRadius: 4 }}>
                        {Array.from({ length: 8 }, (_, index) => (
                            <WaveItem key={index} />
                        ))}
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Paper elevation={2}>Item 3</Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper elevation={2}>Item 4</Paper>
                </Grid>
            </Grid>
        </Container>

    )
}
