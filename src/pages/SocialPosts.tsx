import MainLayout from '@/components/MainLayout'
import SocialPostsFeature from '@/components/serviceFeatures/SocialPostsFeature'
import ServicesHero from '@/sections/ServicesHero'
import React from 'react'
import CTA from '@/components/CTA'
import FaqSocialPosts from '@/sections/faqs/FaqSocialPosts'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BrushIcon from '@mui/icons-material/Brush';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import { Grid, Container, Box, useTheme } from '@mui/material'

const styles =
{
    icon: {
        color: '#fff',
        fontSize: 48
    },
    grid: {

    }
}



const serviceHeroDetails = {
    title: 'Affordable social media management: Start boosting your brand from $89.99!',
    description: 'High-quality social media content, customized for your business and posted with your approval. Save 10+ hours each week with Post Factory!',
    link: '#',
    image: './assets/socialPostsGIF.gif'
}

const serviceFeatureDetails = [
    {
        title: 'Time Efficiency',
        description: 'Save valuable hours each week with our comprehensive social media management.',
        icon: <AccessTimeIcon sx={styles.icon} />,
    },
    {
        title: 'Customized Content Creation',
        description: 'Receive tailor-made social media posts that resonate with your target audience.',
        icon: <BrushIcon sx={styles.icon} />,
    },
    {
        title: 'Affordable Pricing',
        description: 'Get the most cost-effective social media management services available.',
        icon: <PaidOutlinedIcon sx={styles.icon} />,
    },
]




export default function SocialPosts() {
    const theme = useTheme()
    return (
        <>
            <ServicesHero
                title={serviceHeroDetails.title}
                description={serviceHeroDetails.description}
                link={serviceHeroDetails.link}
                image={serviceHeroDetails.image}
            />

            <Box sx={{ background: theme.palette.primary.main, mt: 8 }}>
                <Container maxWidth='xl' >
                    <Grid container columnSpacing={4} rowSpacing={{ xs: 4, md: 0 }} sx={{
                        alignItems: 'center',
                        py: 6,
                    }}>
                        {serviceFeatureDetails.map((feature, index) => (
                            <Grid item xs={12} sm={4} key={index}>
                                <SocialPostsFeature icon={feature.icon} title={feature.title} description={feature.description} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <FaqSocialPosts />
            <CTA />

        </>
    )
}
