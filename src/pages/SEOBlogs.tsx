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
    title: 'Craft Your Online Presence - Custom Web Design Packages Starting at $199.99!',
    description: 'Well-designed website not only attracts attention but also communicates professionalism, credibility, and reliability to your audience.',
    link: '#',
    image: './assets/webDesignService.gif'
}

const serviceFeatureDetails = [
    {
        title: 'Time Efficiency',
        description: 'Save valuable hours each with our comprehensive web design.',
        icon: <AccessTimeIcon sx={styles.icon} />,
    },
    {
        title: 'Customized Content Creation',
        description: 'Receive tailor-made web design that resonate with your target audience.',
        icon: <BrushIcon sx={styles.icon} />,
    },
    {
        title: 'Affordable Pricing',
        description: 'Get the most cost-effective web design services available.',
        icon: <PaidOutlinedIcon sx={styles.icon} />,
    },
]
const pricingPlans = [
    {
        title: 'Web Design Starter',
        price: '199.99',
        features: [
            'Up to 5 pages',
            'Up to 2 revisions per page',
            'Basic wireframe prototyping',
            'Static design elements',
            'Basic user flow mapping',
        ],
        link: '#',
        isStrikethrough: false,
    },
    {
        title: 'Web Design Standard',
        price: '349.99',
        features: [
            'Up to 10 pages',
            'Up to 4 revisions per page',
            'Interactive prototypes',
            'Basic animations/transitions',
            'Usability testing',
        ],
        link: '#',
        isStrikethrough: false,
    },
    {
        title: 'Web Design Premium',
        price: '699.99',
        features: [
            'Unlimited pages',
            'Up to 8 revisions per page',
            'Advanced interactive prototypes',
            'Advanced animations/effects',
            'Comprehensive user testing and feedback',
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
                title={serviceHeroDetails.title}
                description={serviceHeroDetails.description}
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
            <Container maxWidth='lg'>
                <Box sx={{ textAlign: 'center', my: 8 }}>
                    <Typography variant='h3' gutterBottom>Choose your web design package</Typography>
                    <Typography variant='body1' sx={{ maxWidth: { xs: 'inherit', md: '75%' }, mx: 'auto' }}>
                        Find the perfect fit with our range of budget-friendly web design packages. Each plan is designed to maximize your online visibility and engagement. Start saving time and boosting your brand today!
                    </Typography>
                </Box>
                <Grid container columnSpacing={4} rowSpacing={{ xs: 4, md: 0 }} sx={{
                    alignItems: 'center',
                    py: 6,
                }} >
                    {pricingPlans.map((item, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <PricingWithFeatures serviceLink={item.link} servicePrice={item.price} serviceFeatures={item.features} serviceTitle={item.title} isStrikethrough={item.isStrikethrough} />
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* <FaqSocialPosts /> */}
            <CTA />

        </>
    )
}
