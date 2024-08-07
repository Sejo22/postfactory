import React from 'react'
import { Box, Container, Typography, useTheme } from '@mui/material'
import SocialMediaPostExamples from '../SocialMediaPostExamples';
import SocialMediaPostImage from '@/components/SocialMediaPostImage';

const stories = [{
    image: 'assets/story1.webp',
    modalTitle: 'This is Title for card 1',
    modalDesc: "Explore our gallery of captivating static social media posts, complete with compelling captions and targeted hashtags, expertly designed to boost engagement and amplify your brand's message across platforms.",
},
{
    image: 'assets/story2.webp',
    modalTitle: 'This is Title for card 2',
    modalDesc: "Explore our gallery of captivating static social media posts, complete with compelling captions and targeted hashtags, expertly designed to boost engagement and amplify your brand's message across platforms.",
}, {
    image: 'assets/story3.webp',
    modalTitle: 'This is Title for card 1',
    modalDesc: "Explore our gallery of captivating static social media posts, complete with compelling captions and targeted hashtags, expertly designed to boost engagement and amplify your brand's message across platforms.",
},
{
    image: 'assets/story4.webp',
    modalTitle: 'This is Title for card 2',
    modalDesc: "Explore our gallery of captivating static social media posts, complete with compelling captions and targeted hashtags, expertly designed to boost engagement and amplify your brand's message across platforms.",
}, {
    image: 'assets/story5.webp',
    modalTitle: 'This is Title for card 1',
    modalDesc: "Explore our gallery of captivating static social media posts, complete with compelling captions and targeted hashtags, expertly designed to boost engagement and amplify your brand's message across platforms.",
},
{
    image: 'assets/story6.webp',
    modalTitle: 'This is Title for card 2',
    modalDesc: "Explore our gallery of captivating static social media posts, complete with compelling captions and targeted hashtags, expertly designed to boost engagement and amplify your brand's message across platforms.",
},
{
    image: 'assets/story7.webp',
    modalTitle: 'This is Title for card 1',
    modalDesc: "Explore our gallery of captivating static social media posts, complete with compelling captions and targeted hashtags, expertly designed to boost engagement and amplify your brand's message across platforms.",
},
{
    image: 'assets/story8.webp',
    modalTitle: 'This is Title for card 2',
    modalDesc: "Explore our gallery of captivating static social media posts, complete with compelling captions and targeted hashtags, expertly designed to boost engagement and amplify your brand's message across platforms.",
}]


function StoryExamples() {
    const theme = useTheme();

    return (
        <Box>
            <Container maxWidth='xl'>
                <Box sx={{ margin: '64px auto 0 auto', maxWidth: { xs: '100%', md: '75%' }, py: 8 }}>
                    <Typography variant='h2' sx={{ pb: 2, textAlign: 'center' }} >
                        Story Examples
                    </Typography>
                    <Typography variant='body1' textAlign={'center'} gutterBottom>
                        Discover Success Stories: Real Examples, Real Impact. Explore how our innovative strategies have transformed our client&apos;s presence online.
                    </Typography>
                </Box>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 4 }}>

                    {stories.map((story, index) => (
                        <SocialMediaPostImage key={index} isStory={true} disableBottomBar cardImage={story.image} modalDesc={story.modalDesc} modalTitle={story.modalTitle} />
                    ))}
                </Box>
            </Container>
        </Box>
    )
}

export default StoryExamples