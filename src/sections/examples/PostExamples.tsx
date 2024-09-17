import React from 'react'
import { Box, Container, Typography, useTheme, useMediaQuery, Tabs, Tab } from '@mui/material'
import SocialMediaPostImage from '@/components/SocialMediaPostImage';
import { postCardsDetails } from './postCardsDetails';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

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

const categories = [
    { name: 'Featured', id: 0 },
    { name: 'Products', id: 1 },
    { name: 'Professional Services', id: 2 },
    { name: 'Home Services', id: 3 },
    { name: 'Beauty & Salons', id: 4 },
    { name: 'Marketing Agencies', id: 5 },
    { name: 'Health & Wellness', id: 6 },
    { name: 'SaaS & Tech', id: 7 },
    { name: 'Travel & Tourism', id: 8 },
    { name: 'Education & Sport', id: 9 },
    { name: 'Other', id: 10 }
]

const cardsDetails = postCardsDetails;

function PostExamples() {
    const [value, setValue] = React.useState(0);
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box>
            <Container maxWidth='lg'>
                <Box sx={{ margin: '64px auto 0 auto', maxWidth: { xs: '100%', md: '75%' }, pb: 2 }}>
                    <Typography variant='h2' sx={{ pb: 2, textAlign: 'center' }} >
                    Social Media Post Examples
                    </Typography>
                    <Typography variant='body1' textAlign={'center'} gutterBottom>
                        Browse our static post examples: see how our streamlined hashtags and captions save you time and simplify your social media strategy.
                    </Typography>
                </Box>

                <Box sx={{ mt: 4 }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        // variant={isMobile ? 'scrollable' : 'standard'}
                        aria-label="basic tabs example"
                        variant='scrollable'
                    // centered={!isMobile}
                    >
                        {categories.map((category, index) => (
                            <Tab label={category.name} {...a11yProps(index)} key={index} />
                        ))}
                    </Tabs>
                </Box>
                {categories.map((category) => (
                    <CustomTabPanel value={value} index={category.id} key={category.id}>
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: ' 1fr 1fr 1fr' }, gap: 4 }}>
                            {cardsDetails
                                .filter(detail => detail.categoryName === category.name)
                                .map((detail, index) => (
                                    <SocialMediaPostImage key={index} categoryName={category.name} cardImage={detail.image} modalDesc={detail.modalDesc} />
                                ))}
                        </Box>
                    </CustomTabPanel>
                ))}
            </Container>
        </Box>
    )
}

export default PostExamples