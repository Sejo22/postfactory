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
import PostExamples from '@/sections/examples/PostExamples'
import StoryExamples from '@/sections/examples/StoryExamples'
import ReelsExamples from '@/sections/examples/ReelsExamples'
import WebsiteExamples from '@/sections/examples/WebDesignExamples'


const styles =
{
    icon: {
        color: '#fff',
        fontSize: 48
    }
}




const serviceHeroDetails = {
    title: 'Social Media Management from Just $99/Month!',
    description: 'Expertly Crafted Static Posts, Stories, and Reels Tailored to Boost Your Social Media Engagement and Brand Visibility.',
    link: '#',
    image: './assets/socialPostsGIF.gif'
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



export default function Examples() {
    const theme = useTheme()
    return (
        <>

            {/* <ServicesHero
                title={serviceHeroDetails.title}
                description={serviceHeroDetails.description}
                link={serviceHeroDetails.link}
                image={serviceHeroDetails.image}
            /> */}
            <PostExamples />
            <StoryExamples />
            <ReelsExamples />
            <WebsiteExamples />
            <CTA />

        </>
    )
}
