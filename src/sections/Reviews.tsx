import React from 'react';
import { Box, Typography, Divider, Container, useTheme } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const reviews = [
    {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ratione. Sapiente, eaque vero similique aperiam blanditiis accusamus modi excepturi necessitatibus eius minus, cum, quod inventore?',
        author: 'Michael Douglas',
        position: 'CEO at Company LLC',
        image: '/assets/heroReview.jpg'
    },
    {
        text: ' Non, ratione. Sapiente, eaque vero similique aperiam blanditiis accusamus modi excepturi necessitatibus eiadipisicing elit.',
        author: 'Michael Douglas',
        position: 'CEO at Company LLC',
        image: '/assets/heroReview.jpg'
    },
    {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ratione. Sapiente, eaque vero similique aperiam blanditiis accusamus modi excepturi necessitatibus eius minus, cum, quod inventore?orem ipsum dolor sit amet consectetur adipisicing elit. Non, ratione. Sapiente, eaque vero similique aperiam blanditiis accusamus modi excepturi necessitatibus eius minus, cum, quod inventore?orem ipsum dolor sit amet consectetur adipisicing elit. Non, ratione. Sapiente, eaque vero similique aperiam blanditiis accusamus modi excepturi necessitatibus eius minus, cum, quod inventore?',
        author: 'Michael Douglas',
        position: 'CEO at Company LLC',
        image: '/assets/heroReview.jpg'
    },
    {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ratione. Sapiente, eaque vero similique aperiam blanditiis accusamus modi excepturi necessitatibus eius minus, cum, quod inventore?',
        author: 'Michael Douglas',
        position: 'CEO at Company LLC',
        image: '/assets/heroReview.jpg'
    },
    {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ratione. Sapiente, eaque vero similique aperiam blanditiis accusamus modi excepturi necessitatibus eius minus, cum, quod inventore?',
        author: 'Michael Douglas',
        position: 'CEO at Company LLC',
        image: '/assets/heroReview.jpg'
    },
    {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ratione. Sapiente, eaque vero similique aperiam blanditiis accusamus modi excepturi necessitatibus eius minus, cum, quod inventore?',
        author: 'Michael Douglas',
        position: 'CEO at Company LLC',
        image: '/assets/heroReview.jpg'
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
                    &apos;Non, ratione. Sapiente, eaque vero similique aperiam <span style={{ color: 'orangered' }}>  blanditiis accusamus modi excepturi</span> necessitatibus eius minus, cum, quod inventore&apos;
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, flexDirection: 'row' }}>
                    <Box sx={{ width: 48, background: 'url(./assets/heroReview.jpg)', height: 48, borderRadius: 48, backgroundSize: 'cover' }} />
                    <Box>
                        <Typography sx={{ fontWeight: 600, color: theme.palette.primary.main }} variant='body2' gutterBottom>
                            Michael D.
                        </Typography>
                        <Typography variant='body2' gutterBottom>
                            CEO at Google
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
