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
import BusinessStats from '@/sections/BusinessStats'
import BusinessPartners from '@/sections/BusinessPartners'
import FaqLandingPage from '@/sections/FaqLandingPage'


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
    title: 'Our Strategy = Your Success',
    features: ['<b>Tailored Strategies</b> for Your Business Needs', 'Proven Results and <b>ROI</b> ', '<b>Ongoing Support</b> and Adaptability'],
    link: '#',
    image: '/assets/business-growth-featured-image.png'
}


const serviceFeatureDetails = [
    {
        title: 'Luxury Branding & Design',
        description: ' Access a team of high-caliber designers and brand consultants who craft visually stunning and conversion-driven digital experiences.',
        icon: <AccessTimeIcon sx={styles.icon} />,
    },
    {
        title: 'High-Conversion Copywriting',
        description: 'Get premium-level copywriting tailored to your industry, crafted by senior writers who specialize in high-conversion strategies.',
        icon: <BrushIcon sx={styles.icon} />,
    },
    {
        title: 'Priority Support',
        description: 'Enjoy round-the-clock priority support from a dedicated team, ensuring your web platform is always running smoothly.',
        icon: <PaidOutlinedIcon sx={styles.icon} />,
    },
]
const pricingPlans = [
    {
        title: 'Luxury Progress',
        price: '1999.99',
        features: [
            'Premium Social Media Management',
            'Full-Funnel Digital Marketing Strategy',
            'Brand Positioning & Luxury Rebranding',
            'Advanced SEO Strategy',
            'Content Creation & Luxury Copywriting',
            'Social Media Strategy Development',
            'Exclusive Access to Partner Networks',
            'Video Marketing & Luxury Visuals',
            'Email Campaign for 2,000 Potential Clients',
            'Lead Generation and Nurturing',
            'Reputation Management',
            'Monthly Social Media Report',
            'Optional Onboarding & Monthly Content Review Call',
        ],
        link: '#',
        isStrikethrough: false,
    },
]




export default function BusinessGrowth() {
    const theme = useTheme()
    return (
        <>

            <ServicesHero
                title={serviceHeroDetails.title}
                serviceFeature={serviceHeroDetails.features}
                link={serviceHeroDetails.link}
                image={serviceHeroDetails.image}
                showImage
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
            <BusinessStats />
            <BusinessPartners />
            <Container maxWidth='lg'>
                <Box sx={{ textAlign: 'center', my: 8 }}>
                    <Typography variant='h3' gutterBottom>Business Growth Package</Typography>
                    <Typography variant='body1' sx={{ maxWidth: { xs: 'inherit', md: '75%' }, mx: 'auto' }}>
                    Step into the future of your brand—choose our Business Growth package and enjoy bespoke strategies designed for lasting, elegant success
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

            <FaqLandingPage />

            <CTA />

        </>
    )
}
