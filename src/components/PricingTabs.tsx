import React from 'react';
import { Box, Tabs, Tab, Container, Grid, Typography, Button, useTheme } from '@mui/material'
import SocialPostsAdditonal from './SocialPostsAdditonal';
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
import SlideshowIcon from '@mui/icons-material/Slideshow';
import WebStoriesOutlinedIcon from '@mui/icons-material/WebStoriesOutlined';
import ViewCarouselOutlinedIcon from '@mui/icons-material/ViewCarouselOutlined';

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const reelsPlans = [
    {
        title: 'Silver',
        description: '4 Reels per month',
        price: '89.99',
        link: '#'
    },
    {
        title: 'Gold',
        description: '8 Reels per month',
        price: '159.99',
        link: '#'
    },
    {
        title: 'Platinum',
        description: '12 Reels per month',
        price: '259.99',
        link: '#'
    }
]

const storiesPlans = [
    {
        title: 'Silver',
        description: '10 stories per month',
        price: '49.99',
        link: '#'
    },
    {
        title: 'Gold',
        description: '20 stories per month',
        price: '89.99',
        link: '#'
    },
    {
        title: 'Platinum',
        description: '30 stories per month',
        price: '129.99',
        link: '#'
    }
]

const carouselPlans = [
    {
        title: 'Standard',
        description: 'Up to 8 slides',
        price: '9.99',
        link: '#'
    }
]


export default function PricingTabs() {
    const [value, setValue] = React.useState(0);
    const theme = useTheme();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Container maxWidth='lg'>
                <Box sx={{ textAlign: 'center', my: 8 }}>
                    <Typography variant='h3' gutterBottom>Additional boost for your content with exclusive add-ons
                    </Typography>
                    <Typography variant='body1'>
                        Enhance your engagement with our add-on options: reels, stories, and carousel posts. Customize your package further to capture more attention and engage effectively with your audience!
                    </Typography>
                </Box>

                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} variant='fullWidth' aria-label="basic tabs example">
                        <Tab iconPosition='start' icon={<SlideshowIcon />} label="Reels" {...a11yProps(0)} />
                        <Tab iconPosition='start' icon={<WebStoriesOutlinedIcon />} label="Stories" {...a11yProps(1)} />
                        <Tab iconPosition='start' icon={<ViewCarouselOutlinedIcon />} label="Carousels" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Grid container spacing={4}  >
                        <Grid item xs={12} md={8}>
                            {reelsPlans.map((reels, index) => (
                                <Box sx={{ mb: 4 }}>
                                    <SocialPostsAdditonal serviceDescription={reels.description} servicePrice={reels.price} serviceTitle={reels.title} key={index} />
                                </Box>

                            ))}
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant='body1' sx={{ mb: 2 }}>We provide additional items for social media posts text goes here Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ut, molestiae doloribus dicta, esse minima in culpa tempora exercitationem delectus corrupti error amet rerum neque consectetur ad explicabo magnam aliquid.</Typography>
                            <Button variant='contained' size='large' sx={{
                                background: theme.palette.primary.accentGradient, px: 4, transition: 'unset',
                                '&:hover': {
                                    background: theme.palette.primary.main
                                }
                            }} >Sign up</Button>
                        </Grid>
                    </Grid>

                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Grid container spacing={4}  >
                        <Grid item xs={12} md={8}>
                            {storiesPlans.map((stories, index) => (
                                <Box sx={{ mb: 4 }}>
                                    <SocialPostsAdditonal serviceDescription={stories.description} servicePrice={stories.price} serviceTitle={stories.title} key={index} />
                                </Box>

                            ))}
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant='body1' sx={{ mb: 2 }}>We provide additional items for social media posts text goes here Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ut, molestiae doloribus dicta, esse minima in culpa tempora exercitationem delectus corrupti error amet rerum neque consectetur ad explicabo magnam aliquid.</Typography>
                            <Button variant='contained' size='large' sx={{
                                background: theme.palette.primary.accentGradient, px: 4, transition: 'unset',
                                '&:hover': {
                                    background: theme.palette.primary.main
                                }
                            }} >Sign up</Button>
                        </Grid>
                    </Grid>

                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Grid container spacing={4}  >
                        <Grid item xs={12} md={8}>
                            {carouselPlans.map((carousel, index) => (
                                <Box sx={{ mb: 4 }}>
                                    <SocialPostsAdditonal serviceDescription={carousel.description} servicePrice={carousel.price} serviceTitle={carousel.title} key={index} />
                                </Box>

                            ))}
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant='body1' sx={{ mb: 2 }}>We provide additional items for social media posts text goes here Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ut, molestiae doloribus dicta, esse minima in culpa tempora exercitationem delectus corrupti error amet rerum neque consectetur ad explicabo magnam aliquid.</Typography>
                            <Button variant='contained' size='large' sx={{
                                background: theme.palette.primary.accentGradient, px: 4, transition: 'unset',
                                '&:hover': {
                                    background: theme.palette.primary.main
                                }
                            }} >Sign up</Button>
                        </Grid>
                    </Grid>

                </CustomTabPanel>
            </Container>

        </Box>
    );
}