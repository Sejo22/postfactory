import React from 'react'
import { Container, Typography, Box, Button, useTheme } from '@mui/material'
import SocialMediaPostImage from '@/components/SocialMediaPostImage'

const cardsDetails = [
    {
        image: 'assets/post1.webp',
        modalTitle: 'This is Title for card 1',
        modalDesc: "Explore our gallery of captivating static social media posts, complete with compelling captions and targeted hashtags, expertly designed to boost engagement and amplify your brand's message across platforms.",
    },
    {
        image: 'assets/post2.webp',
        modalTitle: 'This is Title for card 2',
        modalDesc: "Explore our gallery of captivating static social media posts, complete with compelling captions and targeted hashtags, expertly designed to boost engagement and amplify your brand's message across platforms.",
    },
    {
        image: 'assets/post3.webp',
        modalTitle: 'This is Title for card 3',
        modalDesc: "Explore our gallery of captivating static social media posts, complete with compelling captions and targeted hashtags, expertly designed to boost engagement and amplify your brand's message across platforms.",
    },
    {
        image: 'assets/post4.webp',
        modalTitle: 'This is Title for card 3',
        modalDesc: "Explore our gallery of captivating static social media posts, complete with compelling captions and targeted hashtags, expertly designed to boost engagement and amplify your brand's message across platforms.",
    },
    {
        image: 'assets/post5.webp',
        modalTitle: 'This is Title for card 3',
        modalDesc: "Explore our gallery of captivating static social media posts, complete with compelling captions and targeted hashtags, expertly designed to boost engagement and amplify your brand's message across platforms.",
    },
    {
        image: 'assets/post6.webp',
        modalTitle: 'This is Title for card 3',
        modalDesc: "Explore our gallery of captivating static social media posts, complete with compelling captions and targeted hashtags, expertly designed to boost engagement and amplify your brand's message across platforms.",
    }

]
export default function SocialMediaPostExamples() {
    const theme = useTheme();


    return (
        <Container maxWidth='lg' sx={{ textAlign: 'center', mt: 8, paddingBlock: 8 }}>
            <Typography variant='h2' sx={{ pb: 2 }} >
                Social Media Post Examples
            </Typography>
            <Typography variant='body1' sx={{ pb: 8 }} gutterBottom>
                Explore our gallery of captivating static social media posts, complete with compelling captions and targeted hashtags, expertly designed to boost engagement and amplify your brand&apos;s message across platforms.
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 4 }}>
                {cardsDetails.map((detail, index) => (
                    <SocialMediaPostImage key={index} cardImage={detail.image} modalTitle={detail.modalTitle} modalDesc={detail.modalDesc} />
                ))}
            </Box>

            <Button sx={{
                mt: 8, background: theme.palette.primary.accentGradient, px: 4, transition: 'unset',
                '&:hover': {
                    background: theme.palette.primary.main
                }
            }} variant='contained' size='large'>See more</Button>
        </Container>
    )
}
