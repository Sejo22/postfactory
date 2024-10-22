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
import SEOBlogExamples from '@/sections/examples/SEOBlogExamples'
import FaqLandingPage from '@/sections/FaqLandingPage'
import Reviews from '@/sections/Reviews'
import FavoriteIcon from '@mui/icons-material/Favorite';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import DoneIcon from '@mui/icons-material/Done';
import PaidIcon from '@mui/icons-material/Paid';


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
    title: 'SEO Blog Posts for Organic Growth From $59.99',
    features: ['<strong>Keyword Research</strong> & Integration', 'Content <strong>Optimization for Conversion</strong>', ' <strong>Original</strong> & Plagiarism-Free Content'],
    link: '#',
    image: "/assets/seo-blog-posts-featured-image.png"
}

const serviceFeatureDetails = [
    {
        title: 'Complete SEO Strategies',
        description: 'Included on-page optimization, proper use of headers, meta descriptions, and internal linking.',
        icon: <AccessTimeIcon sx={styles.icon} />,
    },
    {
        title: 'Expertly Crafted Content',
        description: 'Experienced writers who specialize in creating high-quality, engaging, and SEO-optimized blog posts.',
        icon: <BrushIcon sx={styles.icon} />,
    },
    {
        title: 'Customizable Packages',
        description: 'We offer customizable blogging packages that cater to your specific needs and budget.',
        icon: <PaidOutlinedIcon sx={styles.icon} />,
    },
]
const pricingPlans = [
    {
        title: '500 Words SEO Blog',
        price: '59.99',
        features: [
            'SEO-Optimized',
            'Premium Images',
            'Keyword research',
            'Relevant Links',
            'High-Quality, Original Content',
            'Professional Writers',
        ],
        link: '#',
        isStrikethrough: false,
    },
    {
        title: '1000 Words SEO Blog',
        price: '89.99',
        features: [
            'SEO-Optimized',
            'Premium Images',
            'Keyword research',
            'Relevant Links',
            'High-Quality, Original Content',
            'Professional Writers',
        ],
        link: '#',
        isStrikethrough: false,
    },
    {
        title: '1500 Words SEO Blog',
        price: '109.99',
        features: [
            'SEO-Optimized',
            'Premium Images',
            'Keyword research',
            'Relevant Links',
            'High-Quality, Original Content',
            'Professional Writers',
        ],
        link: '#',
        isStrikethrough: false
    }
]


const iconStyle = {
    color: '#4C76ED',
    fontSize: 40
}



const blogFeaturesCards = [
    { icon: <FavoriteIcon sx={iconStyle} />, feature: 'Get Qualified Buyers' },
    { icon: <KeyboardDoubleArrowUpIcon sx={iconStyle} />, feature: 'Rank Higher on Google' },
    { icon: <DoneIcon sx={iconStyle} />, feature: 'Get Verified on Social' },
    { icon: <PaidIcon sx={iconStyle} />, feature: 'Increase Sales' },
]

const BlogFeatures = ({ feature, icon }: { feature: string, icon: any; }) => {
    const theme = useTheme()
    return (
        <Box sx={{ borderRadius: 4, transition: 'all ease .2s', p: 2, flex: 1, display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
            <Box sx={{ background: '#fff', borderRadius: 1, p: 1, display: 'grid', placeContent: 'center' }}>
                {icon}
            </Box>
            <Typography variant='body1' sx={{ color: theme.palette.primary.main, fontWeight: 700, textAlign: 'center' }} >{feature}</Typography>
        </Box>
    )

}




export default function SEOBlogs() {
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
                        alignItems: 'stretch',
                        py: 6,
                    }}>
                        {serviceFeatureDetails.map((feature, index) => (
                            <Grid item xs={12} sm={4} key={index} sx={{ display: 'flex' }}  >
                                <SocialPostsFeature icon={feature.icon} title={feature.title} description={feature.description} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box >
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
            <Box sx={{ backgroundColor: 'rgba(76,118,237,.15)', py: 4 }}>
                <Container maxWidth='lg' >
                    <Typography variant='h3' textAlign={'center'} gutterBottom>
                        Why You Need SEO Blogs for Your Business?
                    </Typography>
                    <Typography textAlign={'center'} color={'#222'} variant='body1' gutterBottom>
                        Drive Organic Traffic, Increase Visibility, and Boost Your Search Rankings with Optimized Content
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 4, justifyContent: 'space-between', mt: 4 }}>
                        {blogFeaturesCards.map((card, index) => (
                            <BlogFeatures key={index} icon={card.icon} feature={card.feature} />
                        ))}
                    </Box>
                </Container>
            </Box>
            <SEOBlogExamples />

            <Reviews />

            <FaqLandingPage />



            {/* <FaqSocialPosts /> */}
            <CTA />

        </>
    )
}
