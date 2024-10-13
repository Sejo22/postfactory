import MainLayout from '@/components/MainLayout'
import SocialPostsFeature from '@/components/serviceFeatures/SocialPostsFeature'
import ServicesHero from '@/sections/ServicesHero'
import React from 'react'
import CTA from '@/components/CTA'
import FaqSocialPosts from '@/sections/faqs/FaqSocialPosts'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BrushIcon from '@mui/icons-material/Brush';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import { Grid, Container, Box, useTheme, Typography } from '@mui/material'
import PricingWithFeatures from '@/components/PricingWithFeatures'
import FaqLandingPage from '@/sections/FaqLandingPage'
import Plans from '@/sections/Plans'


const styles =
{
    icon: {
        color: '#fff',
        fontSize: 48
    }
}




const serviceHeroDetails = {
    title: 'From Concept to Completion.',
    description: <span>Everything you need to know about purchasing and utilizing our services is demonstrated in the video.<br /><br /> For any additional questions, feel free to reach out to us through our contact form.</span>,
    link: '#',
}

const serviceFeatureDetails = [
    {
        title: 'Time Efficiency',
        description: 'Save valuable hours each with our comprehensive services.',
        icon: <AccessTimeIcon sx={styles.icon} />,
    },
    {
        title: 'Customized Content Creation',
        description: 'Receive tailor-made services that resonate with your target audience.',
        icon: <BrushIcon sx={styles.icon} />,
    },
    {
        title: 'Affordable Pricing',
        description: 'Get the most cost-effective services available.',
        icon: <PaidOutlinedIcon sx={styles.icon} />,
    },
]



export default function HowItWorks() {
    const theme = useTheme()
    return (
        <>

            <ServicesHero
                title={serviceHeroDetails.title}
                description={serviceHeroDetails.description}
                link={serviceHeroDetails.link}
                video={true}
            />
            <Box sx={{ background: theme.palette.primary.main, mt: 8 }}>
                <Container maxWidth='lg' >
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
            <Plans />
            <FaqLandingPage />
            <CTA />

        </>
    )
}
