import SocialPostsFeature from '@/components/serviceFeatures/SocialPostsFeature'
import ServicesHero from '@/sections/ServicesHero'
import React from 'react'
import CTA from '@/components/CTA'
import FaqLogoDesign from '@/sections/faqs/FaqLogoDesign'
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import FormatPaintOutlinedIcon from '@mui/icons-material/FormatPaintOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import { Grid, Container, Box, Typography, useTheme } from '@mui/material'
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
    title: 'Affordable professional logo design: Create your signature brand for just $149.99!',
    description: 'Boost your brand identity with custom, high-quality logos designed to stand out. A distinctive logo captures attention, establishes professionalism, and builds trust among your target audience. Let us help you make a lasting impression that drives business success.',
    link: '#',
    image: './assets/socialPostsGIF.gif'
}

const serviceFeatureDetails = [
    {
        title: 'Customization',
        description: 'Each logo is uniquely tailored to reflect your brand’s values and vision.',
        icon: <HandymanOutlinedIcon sx={styles.icon} />,
    },
    {
        title: 'Expertise',
        description: 'Work with experienced designers who bring creativity and professionalism to every project.',
        icon: <FormatPaintOutlinedIcon sx={styles.icon} />,
    },
    {
        title: 'Versatility',
        description: 'Receive your logo in multiple file formats that are suitable for all types of uses, from digital to print.',
        icon: <LayersOutlinedIcon sx={styles.icon} />,
    },
]

const pricingPlans = [
    {
        title: 'Essential Suite',
        price: '149.99',
        features: [
            '1 designer',
            'up to 4 designs',
            'up to 2 revisions',
            'copyright ownership of 1 design',
            'industry-standard file',
        ],
        link: '#',
        isStrikethrough: false,
    },
    {
        title: 'Executive Package',
        price: '249.99',
        features: [
            '2 designers',
            'up to 8 designs',
            'unlimited revisions',
            'copyright ownership of 1 design',
            'industry-standard file',
        ],
        link: '#',
        isStrikethrough: false,
    },
    {
        title: 'Elite Portfolio',
        price: '399.99',
        features: [
            '3 designers',
            'up to 20 designs',
            'unlimited revisions',
            'copyright ownership of 1 design',
            'industry-standard file',
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
            <Container maxWidth='xl'>
                <Box sx={{ textAlign: 'center', my: 8 }}>
                    <Typography variant='h3' gutterBottom>Select your logo design package</Typography>
                    <Typography variant='body1' sx={{ maxWidth: { xs: 'inherit', md: '75%' }, mx: 'auto' }}>
                        Explore our range of custom logo design packages tailored to fit every brand&apos;s vision and budget. Choose from multiple design options and benefit from the expertise of dedicated designers focused on creating your perfect logo. Start your journey to a memorable brand identity today!
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

            <FaqLogoDesign />
            <CTA />

        </>
    )
}
