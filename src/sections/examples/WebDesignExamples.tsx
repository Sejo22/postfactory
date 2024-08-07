import React from 'react'
import { Box, Container, Typography, useTheme } from '@mui/material'
import SocialMediaPostImage from '@/components/SocialMediaPostImage';


const websites = [{
    image: 'assets/website1.png',
    modalTitle: 'This is Title for card 1',
    modalDesc: "Explore our gallery of captivating static social media posts, complete with compelling captions and targeted hashtags, expertly designed to boost engagement and amplify your brand's message across platforms.",
},
{
    image: 'assets/website2.png',
    modalTitle: 'This is Title for card 2',
    modalDesc: "Explore our gallery of captivating static social media posts, complete with compelling captions and targeted hashtags, expertly designed to boost engagement and amplify your brand's message across platforms.",
}, {
    image: 'assets/website3.png',
    modalTitle: 'This is Title for card 1',
    modalDesc: "Explore our gallery of captivating static social media posts, complete with compelling captions and targeted hashtags, expertly designed to boost engagement and amplify your brand's message across platforms.",
},
{
    image: 'assets/website4.png',
    modalTitle: 'This is Title for card 2',
    modalDesc: "Explore our gallery of captivating static social media posts, complete with compelling captions and targeted hashtags, expertly designed to boost engagement and amplify your brand's message across platforms.",
}]



function WebsiteExamples() {
    const theme = useTheme();

    return (
        <Box>
            <Container maxWidth='xl'>
                <Box sx={{ margin: '64px auto 0 auto', maxWidth: { xs: '100%', md: '75%' }, py: 8 }}>
                    <Typography variant='h2' sx={{ pb: 2, textAlign: 'center' }} >
                        Web Design Examples
                    </Typography>
                    <Typography variant='body1' textAlign={'center'} gutterBottom>
                        Explore Our Web Design Mastery: View Our Portfolio of Innovative Sites. See how our tailored websites combine aesthetics with functionality to elevate brand experiences online.
                    </Typography>
                </Box>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 4, mb: 16 }}>

                    {websites.map((website, index) => (
                        <SocialMediaPostImage key={index} isStory={false} disableBottomBar cardImage={website.image} modalDesc={website.modalDesc} modalTitle={website.modalTitle} />
                    ))}
                </Box>
            </Container>
        </Box>
    )
}

export default WebsiteExamples