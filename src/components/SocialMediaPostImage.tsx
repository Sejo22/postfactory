import React, { useState } from 'react'
import { Card, CardMedia, Box, Typography, Modal, Grid, Divider, Button } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import SendIcon from '@mui/icons-material/Send';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useTheme } from '@mui/material/styles';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import parse from 'html-react-parser';
import { m } from 'framer-motion';

interface CardDetails {
    cardImage: string;
    modalDesc: string;
    modalTitle?: string;
    categoryName?: string;
    articleExcerpt?: string;
    wordCount?: string;
    blogCategory?: string
    disableBottomBar?: boolean;
    isStory?: boolean;
    isBlog?: boolean;
    isWebdesign?: boolean;
}

export default function SocialMediaPostImage({ isWebdesign, blogCategory, wordCount, cardImage, modalTitle, modalDesc, disableBottomBar, isStory, isBlog, articleExcerpt }: CardDetails) {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [openBlog, setOpenBlog] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleOpenBlog = () => setOpenBlog(true);
    const handleClose = () => setOpen(false);
    const handleCloseBlog = () => setOpenBlog(false);
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        display: 'flex',
        alignItems: 'center',
        transform: 'translate(-50%, -50%)',
        width: isStory === true ? 'inherit' : { xs: 320, sm: 400, md: 890, lg: 1100 },
        bgcolor: 'background.paper',
        borderRadius: { xs: 2, md: 4 },
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    };

    const BlogModal = () => {
        const style = {
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            // display: 'flex',
            // alignItems: 'center',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', md: '60%' },
            maxHeight: '80vh',
            overflow: 'auto',
            px: 4,
            bgcolor: 'background.paper',
            borderRadius: { xs: 2, md: 4 },
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        };
        return (
            <Modal open={openBlog} onClose={handleCloseBlog}>
                <Box sx={style}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, position: 'sticky', top: 0, background: '#fff', py: 2 }}>
                        <Typography component={'div'} variant='h6' sx={{ fontWeight: 700, color: '#4C76ED' }} >{modalTitle}</Typography>


                        <Box onClick={handleCloseBlog} sx={{
                            color: '#4C76ED', background: '#4C76ED22', borderRadius: 8, width: 20, height: 20, p: 1, display: 'grid', placeContent: 'center', cursor: 'pointer'
                        }}>
                            <CloseRoundedIcon />
                        </Box>
                    </Box>

                    <Box sx={{ '& :not(p)': { color: '#222', mb: 1 }, '& p': { mb: 2, color: theme.palette.primary.text }, '& img': { mb: 2, maxWidth: '100%' } }}> {parse(modalDesc)}</Box>
                </Box>
            </Modal>
        )
    }


    return (<>
        <Card className='card__wrapper' sx={{ position: 'relative', boxShadow: '0 4px 24px -4px rgba(0,0,0,.2)', borderRadius: 4, aspectRatio: isStory ? 9 / 16 : undefined }}>
            <Box sx={{ display: isBlog ? 'flex' : 'none', background: '#4C76ED', color: '#fff', position: 'absolute', top: 0, right: 0, m: 2, px: 2, py: 1, borderRadius: 100, fontWeight: 500, fontSize: 14, textTransform: 'uppercase' }}>{blogCategory}</Box>
            <CardMedia
                component={'img'}
                // height={{ xs: '345', md: '30' }}
                // image='https://postfactory.co/wp-content/uploads/elementor/thumbs/2-45-qoiyeh9pnnnnknkk4efwlj5wwlkyj1wu91p02pbov4.webp'
                image={cardImage}
                alt='img'
                sx={{
                    width: '100%', height: isStory || isWebdesign ? '100%' : 'calc(100% - 56px)'
                }}
            />
            <Box sx={{
                display: isBlog ? 'none' : 'grid', position: 'absolute', top: '0', left: '0', width: '100%', height: disableBottomBar ? '100%' : 'calc(100% - 56px)', background: 'rgba(66,133,244,.8)', placeContent: 'center', pointerEvents: 'none', opacity: 0, transition: 'all ease .2s',
                '.card__wrapper:hover &': {
                    opacity: 1,
                    pointerEvents: 'all',
                }
            }}>
                <Box onClick={handleOpen} sx={{
                    isolation: 'isolate', position: 'relative', display: 'grid', placeContent: 'center', cursor: 'pointer'
                }}>
                    <AddRoundedIcon sx={{ color: '#fff', fontSize: 32 }} />
                    <Box sx={{ position: 'absolute', content: "''", width: { xs: 64, md: 88 }, height: { xs: 64, md: 88 }, borderRadius: 64, backgroundColor: theme.palette.primary.main, top: '50%;', left: '50%', zIndex: -1, transform: 'translate(-50%,-50%)' }} />
                    {/* <Box sx={{ position: 'absolute', content: "''", width: 104, height: 104, borderRadius: 64, backgroundColor: theme.palette.primary.main, top: '50%;', left: '50%', zIndex: -2, transform: 'translate(-50%,-50%)', opacity: .5 }} />
                    <Box sx={{ position: 'absolute', content: "''", width: 120, height: 120, borderRadius: 64, backgroundColor: theme.palette.primary.main, top: '50%;', left: '50%', zIndex: -3, transform: 'translate(-50%,-50%)', opacity: .25 }} /> */}
                </Box>

            </Box>
            <Box sx={{
                width: '100%', background: '#fff', display: disableBottomBar ? 'none' : 'flex', justifyContent: { xs: 'center', sm: 'space-between' }
            }}>
                <Box sx={{ flex: { xs: 1, sm: 'auto' }, display: 'flex', alignItems: 'center', justifyContent: { xs: 'space-between', sm: 'flex-start' }, gap: { xs: 0, sm: 2 }, p: 2 }}>
                    <FavoriteIcon sx={{ color: '#eb2027' }} />
                    <ChatBubbleOutlineIcon />
                    <SendIcon />
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center', p: 2 }}>
                    <TurnedInNotIcon />
                </Box>

            </Box>
            {isBlog === true ? (
                <Box sx={{ p: 2 }}>
                    <Typography variant='body1' gutterBottom sx={{ fontWeight: 700 }}>{modalTitle}</Typography>
                    <Typography variant='body2' sx={{ mb: 4 }} >{parse(articleExcerpt ?? '')}</Typography>
                    <Typography variant='body1' sx={{ fontWeight: 500 }}>{wordCount}</Typography>
                    <Button onClick={handleOpenBlog} variant='contained' size='small' sx={{ mt: 1, width: '100%' }}>Read More</Button>
                </Box>
            ) : (
                undefined
            )}

        </Card >

        <BlogModal />

        <Modal open={open} onClose={handleClose} >
            <Box sx={style}>
                <Box onClick={handleClose} sx={{
                    position: 'absolute', top: -44, right: -44, color: '#fff', background: 'transparent', borderRadius: 8, border: '2px solid #fff', width: 20, height: 20, p: 1, display: 'grid', placeContent: 'center', cursor: 'pointer'
                }}><CloseRoundedIcon /></Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    maxHeight: '80vh',
                    aspectRatio: isStory === true ? 9 / 16 : 'inherit'
                }
                } >
                    <Box sx={{ position: 'relative', display: 'flex', flex: 4, aspectRatio: isStory === true ? 9 / 16 : 1 / 1, minHeight: isStory === true ? '66vh' : 'auto' }}>
                        <Box component={'img'} sx={{ maxWidth: '100%', maxHeight: '100%', borderRadius: { xs: 2, md: 4 }, aspectRatio: isStory === true ? 9 / 16 : 1 / 1, }} src={cardImage} />
                    </Box>
                    <Box sx={{ p: 2, flex: 3, display: isStory === true ? 'none' : 'block', overflow: 'auto' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Box component={'img'} src='assets/PFlogo.jpg' sx={{ maxWidth: 32, border: 'solid 1px #000', borderRadius: 32 }} />
                            <Typography variant='body2' sx={{ fontWeight: 700 }}>PostFactory</Typography>
                        </Box>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant='body2' sx={{ fontWeight: 700 }} gutterBottom>Caption:</Typography>
                        <Typography variant='body1' > {parse(modalDesc)}</Typography>
                    </Box>
                </Box>
            </Box>
        </Modal >
    </>

    )
}
