import React from 'react';
import { Box, Typography, Divider, Container, useTheme } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const reviews = [
    {
        text: 'Our SEO efforts have changed significantly as a result of working with Post Factory. Their professional advice and SEO-optimized blogs have helped us achieve amazing outcomes. We are ecstatic about the explosive increase in organic traffic to our website!',
        author: 'Ethan S.',
        position: 'Chief Marketing Officer',
        image: '/assets/ethan.jpg'
    },
    {
        text: 'Post Factorys social media management services have transformed how our socials look with their stunning, beautifully created posts. I highly recommend them!',
        author: 'Liam H.',
        position: 'Founder & CEO',
        image: '/assets/liam.jpg'
    },
    {
        text: 'Their expertise and creativity have helped us grow our brand and reach new customers effectively. From managing our social media presence to executing their business package, their efforts have consistently delivered great results. The team is professional, responsive, and genuinely invested in the success of our business. We highly recommend Post Factory for anyone looking for top-notch marketing services!',
        author: 'Isabella M.',
        position: 'CEO',
        image: '/assets/Isabella.jpg'
    },
    {
        text: 'They have freed up a significant amount of my time and energy by managing my social media posts, allowing me to focus more on other aspects of my business!',
        author: 'Matthew W.',
        position: 'VP of Sales',
        image: '/assets/Mathew.jpg'
    },
    {
        text: 'Working with Post Factory has been my best decision in a while! The UGC videos they created not only showcased our products in a relatable way, but also resonated deeply with our audience. Since implementing these videos into our marketing strategy, we have seen a remarkable increase in customer engagement and sales.',
        author: 'Mia B.',
        position: 'Founder & CEO',
        image: '/assets/mia.jpg'
    },
    {
        text: 'Post Factory has completely transformed our marketing with their exceptional reel video content! The creative and engaging videos they have produced have captured our brands essence perfectly and have led to increased visibility on social media.',
        author: 'Zoe W.',
        position: 'Founder',
        image: '/assets/zoe.jpg'
    }
];

function Reviews() {
    const theme = useTheme();

    return (
        <Container maxWidth='lg'>
            <Box sx={{
                py: 8
            }}>
                <Typography component={'h3'} variant={'h1'} sx={{ textAlign: 'center' }} gutterBottom>
                    &apos;Post Factory changed the whole image of our brand <span style={{ color: 'orangered' }}>  in just a short period </span> because of effective strategy and engaging content.&apos;
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, flexDirection: 'row' }}>
                    <Box sx={{ width: 48, background: 'url(./assets/heroReview.jpg)', height: 48, borderRadius: 48, backgroundSize: 'cover' }} />
                    <Box>
                        <Typography sx={{ fontWeight: 600, color: theme.palette.primary.main }} variant='body2' gutterBottom>
                        David S.
                        </Typography>
                        <Typography variant='body2' gutterBottom>
                            CEO at NLC Logistics
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{
                    columnCount: { xs: 1, sm: 2, md: 3 },
                    columnGap: 2,
                    mt: 8
                }}>
                    {reviews.map((review, index) => (
                        <Box key={index} sx={{
                            breakInside: 'avoid',
                            marginBottom: 2,
                            background: 'rgba(255,255,255,.4)',
                            borderRadius: 4,
                            p: 2,
                            backdropFilter: 'blur(20px)',
                            border: 'solid 1px rgba(0,0,0,.12)'
                        }}>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexDirection: 'row' }}>
                                <Box sx={{ width: 48, background: `url(${review.image})`, height: 48, borderRadius: 48, backgroundSize: 'cover' }} />
                                <Box>
                                    <Typography sx={{ fontWeight: 700, color: theme.palette.primary.main }} variant='body1' >
                                        {review.author}
                                    </Typography>
                                    <Typography variant='body2' gutterBottom>
                                        {review.position}
                                    </Typography>
                                </Box>
                            </Box>
                            <Divider sx={{ my: 2 }} />

                            <Typography variant='body2' sx={{ mb: 2, fontStyle: 'italic' }}>
                                &apos;{review.text}&apos;
                            </Typography>

                            {Array.from({ length: 5 }).map((_, starIndex) => (
                                <StarIcon sx={{ color: 'orange' }} key={starIndex} />
                            ))}

                        </Box>
                    ))}
                </Box>
            </Box>

        </Container>
    );
}

export default Reviews;
