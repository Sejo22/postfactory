import React from 'react'
import { Container, Typography, Box, Button } from '@mui/material'
import SocialMediaPostImage from '@/components/SocialMediaPostImage'

export default function SocialMediaPostExamples() {
    return (
        <Container maxWidth='lg' sx={{ textAlign: 'center', pt: 8 }}>
            <Typography variant='h2' sx={{ pb: 2 }} >
                Social Media Post Examples
            </Typography>
            <Typography variant='body1' sx={{ pb: 8 }} gutterBottom>
                Explore our gallery of captivating static social media posts, complete with compelling captions and targeted hashtags, expertly designed to boost engagement and amplify your brand&apos;s message across platforms.
            </Typography>
            <SocialMediaPostImage />
            <Button sx={{ mt: 8 }} variant='contained' size='large'>See more</Button>
        </Container>
    )
}
