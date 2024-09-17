import React from 'react'
import { Box, Container, Typography, useTheme } from '@mui/material'
import SocialMediaPostImage from '@/components/SocialMediaPostImage';


const logos = [{
    image: 'assets/logo1.webp',
    modalTitle: 'This is Title for card 1',
    modalDesc: "Explore our gallery of captivating static social media posts, complete with compelling captions and targeted hashtags, expertly designed to boost engagement and amplify your brand's message across platforms.",
},
{
    image: 'assets/logo2.webp',
    modalTitle: 'This is Title for card 2',
    modalDesc: "Explore our gallery of captivating static social media posts, complete with compelling captions and targeted hashtags, expertly designed to boost engagement and amplify your brand's message across platforms.",
}, {
    image: 'assets/logo3.webp',
    modalTitle: 'This is Title for card 1',
    modalDesc: "Explore our gallery of captivating static social media posts, complete with compelling captions and targeted hashtags, expertly designed to boost engagement and amplify your brand's message across platforms.",
},
{
    image: 'assets/logo4.webp',
    modalTitle: 'This is Title for card 2',
    modalDesc: "Explore our gallery of captivating static social media posts, complete with compelling captions and targeted hashtags, expertly designed to boost engagement and amplify your brand's message across platforms.",
}, {
    image: 'assets/logo5.webp',
    modalTitle: 'This is Title for card 1',
    modalDesc: "Explore our gallery of captivating static social media posts, complete with compelling captions and targeted hashtags, expertly designed to boost engagement and amplify your brand's message across platforms.",
},
{
    image: 'assets/logo6.webp',
    modalTitle: 'This is Title for card 2',
    modalDesc: "Explore our gallery of captivating static social media posts, complete with compelling captions and targeted hashtags, expertly designed to boost engagement and amplify your brand's message across platforms.",
},
{
    image: 'assets/logo7.webp',
    modalTitle: 'This is Title for card 1',
    modalDesc: "Explore our gallery of captivating static social media posts, complete with compelling captions and targeted hashtags, expertly designed to boost engagement and amplify your brand's message across platforms.",
},
{
    image: 'assets/logo8.webp',
    modalTitle: 'This is Title for card 2',
    modalDesc: "Explore our gallery of captivating static social media posts, complete with compelling captions and targeted hashtags, expertly designed to boost engagement and amplify your brand's message across platforms.",
}]



function LogoExamples() {
    const theme = useTheme();

    return (
        <Box>
            <Container maxWidth='lg'>
                <Box sx={{ margin: '64px auto 0 auto', maxWidth: { xs: '100%', md: '75%' }, py: 8 }}>
                    <Typography variant='h2' sx={{ pb: 2, textAlign: 'center' }} >
                        Logo Design Examples
                    </Typography>
                    <Typography variant='body1' textAlign={'center'} gutterBottom>
                        See Our Craftsmanship: Browse Our Portfolio of Logo Designs. Discover a variety of creative logos tailored to enhance brand identities across diverse industries.
                    </Typography>
                </Box>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 4 }}>

                    {logos.map((logo, index) => (
                        <SocialMediaPostImage key={index} isStory={false} disableBottomBar cardImage={logo.image} modalDesc={logo.modalDesc} modalTitle={logo.modalTitle} />
                    ))}
                </Box>
            </Container>
        </Box>
    )
}

export default LogoExamples