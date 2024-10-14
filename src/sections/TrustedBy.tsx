import React from 'react'
import { Box, Typography, Container } from '@mui/material'
import { motion, useAnimation, useCycle } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const brands = [
    './assets/brand1.png',
    './assets/brand2.png',
    './assets/brand3.png',
    './assets/brand4.png',
    './assets/brand5.png',
    './assets/brand6.png',
    './assets/brand7.png',
    './assets/brand8.png',
    './assets/brand9.png',
    './assets/brand10.png'
];

function TrustedBy() {
    // const [current, cycle] = useCycle(0, 1);
    const theme = useTheme()
    const controls = useAnimation();

    React.useEffect(() => {
        controls.start({
            x: ['0%', '-100%'],
            transition: { duration: 5, repeat: Infinity, ease: 'linear', repeatType: 'loop' },
        });
    }, [controls]);

    return (
        <Box component={'section'} sx={{ overflow: 'hidden', background: theme.palette.primary.main, py: 2 }}>
            <Container maxWidth='lg' >
                <Typography variant='h4' sx={{ textAlign: 'center', color: '#fff', pb: 4 }}>Trusted by 100+ Brands</Typography>
                <Box
                    sx={{
                        overflow: 'hidden',
                        width: '100%',
                        height: '120px',
                        position: 'relative',
                    }}
                >
                    <Box
                        component={motion.div}
                        sx={{
                            display: 'flex',
                            width: '200%',
                            height: '104px',
                            flexDirection: 'row',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                        }}
                        animate={{
                            x: ['0%', '-50%'],
                            transition: { duration: 45, repeat: Infinity, ease: 'linear', repeatType: 'loop' },
                        }}
                    >
                        {brands.map((brand, index) => (
                            <Box
                                key={index}
                                component={'img'}
                                src={brand}
                                sx={{
                                    width: '90px',
                                    height: '100%',
                                    flexShrink: 0,
                                    opacity: .5,
                                    ml: 4,
                                    filter: 'invert(1)',
                                    '&:hover': {
                                        opacity: 1
                                    }
                                }}
                            />
                        ))}
                        {brands.map((brand, index) => (
                            <Box
                                key={`clone-${index}`}
                                component={'img'}
                                src={brand}

                                sx={{
                                    width: '90px',
                                    height: '100%',
                                    flexShrink: 0,
                                    opacity: .5,
                                    ml: 4,
                                    filter: 'invert(1)',

                                    '&:hover': {
                                        opacity: 1
                                    }
                                }}
                            />
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default TrustedBy