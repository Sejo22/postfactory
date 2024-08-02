import MainLayout from '@/components/MainLayout'
import SocialPostsFeature from '@/components/serviceFeatures/SocialPostsFeature'
import ServicesHero from '@/sections/ServicesHero'
import React from 'react'
import CTA from '@/components/CTA'
import FaqSocialPosts from '@/sections/faqs/FaqSocialPosts'
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import FormatPaintOutlinedIcon from '@mui/icons-material/FormatPaintOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
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
