import React from 'react'
import { Container, Typography, Box, Button, useTheme } from '@mui/material'
import SocialMediaPostImage from '@/components/SocialMediaPostImage'

const cardsDetails = [
    {
        image: 'assets/social-media-visual-featured-1.webp',
        modalTitle: 'This is Title for card 1',
        modalDesc: "Success isn&apos;t about waiting for the perfect moment, it&apos;s about making the moment perfect through hard work! 📚 <br /> <br /> Whether it&apos;s finishing that book you&apos;ve been meaning to read or reaching a new personal goal, the power to achieve it is in YOUR hands.<br /><br /> What&apos;s one thing you&apos;re working hard on this week? Drop it in the comments!👇<br /><br /> #Goodreaders #BookLovers #MotivationMonday #WorkForIt #GoalGetter",
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
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr 1fr', md: '1fr 1fr 1fr' }, gap: 4 }}>
                {cardsDetails.map((detail, index) => (
                    <SocialMediaPostImage key={index} cardImage={detail.image} modalDesc={detail.modalDesc} />
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
