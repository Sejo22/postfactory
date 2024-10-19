import SocialPostsFeature from '@/components/serviceFeatures/SocialPostsFeature'
import ServicesHero from '@/sections/ServicesHero'
import React from 'react'
import CTA from '@/components/CTA'
import FaqSocialPosts from '@/sections/faqs/FaqSocialPosts'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BrushIcon from '@mui/icons-material/Brush';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import { Grid, Container, Box, useTheme, Typography } from '@mui/material';
import PricingWithFeatures from '@/components/PricingWithFeatures'
import PricingTabs from '@/components/PricingTabs'
import PostExamples from '@/sections/examples/PostExamples'
import Masonry from '@/sections/Masonry'

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
    title: 'Professional Social Media Management from $99.99/month',
    link: '#',
    image: './assets/socialPostsGIF.webp',
    features: ['<strong>High-Quality</strong> Content Created by Experts', '<strong>Analytics & Reporting</strong> on Key Metrics', 'Multi-Platform <strong>Management and Optimization</strong>']
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

const pricingPlans = [
    {
        title: 'Beginner Package',
        price: '99.99',
        features: [
            '10 Static Posts',
            'Engaging Captions',
            'AI – Analyzed, Engagement Hashtags',
            'Content Calendar',
            'Unlimited Revisions',
            'One Free Scheduling Channel',
            'No Hidden Costs',
            'Feed preview',
        ],
        link: '#',
        isStrikethrough: true,
    },
    {
        title: 'Standard Package',
        price: '189.99',
        features: [
            '20 Static Posts',
            'Engaging Captions',
            'AI – Analyzed, Engagement Hashtagss',
            'Content Calendar',
            'Unlimited Revisions',
            'One free scheduling channel',
            'No Hidden Costs',
            'Feed preview',
        ],
        link: '#',
        isStrikethrough: true,
    },
    {
        title: 'Premium Package',
        price: '279.99',
        features: [
            '30 Static Posts',
            'Engaging Captions',
            'AI – Analyzed, Engagement Hashtags',
            'Content Calendar',
            'Unlimited Revisions',
            'One free scheduling channel',
            'No Hidden Costs',
            'Feed preview',
        ],
        link: '#',
        isStrikethrough: false
    }
]

export default function SocialPosts() {
    const theme = useTheme()
    return (
        <>
            <ServicesHero
                isSocialPosts
                title={serviceHeroDetails.title}
                serviceFeature={serviceHeroDetails.features}
                link={serviceHeroDetails.link}
                image={serviceHeroDetails.image}
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
            <PostExamples />

            <Container maxWidth='lg'>
                <Box sx={{ textAlign: 'center', my: 8 }}>
                    <Typography variant='h3' gutterBottom>Choose your social media package</Typography>
                    <Typography variant='body1' sx={{ maxWidth: { xs: 'inherit', md: '75%' }, mx: 'auto' }}>
                        Find the perfect fit with our range of budget-friendly social media packages. Each plan is designed to maximize your online visibility and engagement. Start saving time and boosting your brand today!
                    </Typography>
                </Box>
                <Grid container columnSpacing={4} rowSpacing={{ xs: 4, md: 0 }} sx={{
                    alignItems: 'center',
                    py: 6,
                }} >
                    {pricingPlans.map((item, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <PricingWithFeatures monthly={true} serviceLink={item.link} servicePrice={item.price} serviceFeatures={item.features} serviceTitle={item.title} isStrikethrough={item.isStrikethrough} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <PricingTabs />
            <Masonry />
            <FaqSocialPosts />
            <CTA />

        </>
    )
}
