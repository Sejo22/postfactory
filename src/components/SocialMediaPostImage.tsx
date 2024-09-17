import React, { useState } from 'react'
import { Card, CardMedia, Box, Typography, Modal, Grid, Divider } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import SendIcon from '@mui/icons-material/Send';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useTheme } from '@mui/material/styles';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

interface CardDetails {
    cardImage: string;
    modalDesc: string;
    categoryName?: string;
    disableBottomBar?: boolean;
    isStory?: boolean;
}

export default function SocialMediaPostImage({ cardImage, modalDesc, disableBottomBar, isStory }: CardDetails) {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        display: 'flex',
        alignItems: 'center',
        transform: 'translate(-50%, -50%)',
        width: { xs: 320, sm: 400, md: 800, lg: 1080 },
        bgcolor: 'background.paper',
        borderRadius: { xs: 2, md: 4 },
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    };
    return (<>
        <Card className='card__wrapper' sx={{ position: 'relative', boxShadow: '0 4px 24px -4px rgba(0,0,0,.2)', borderRadius: 4, aspectRatio: isStory ? 9 / 16 : undefined }}>
            <CardMedia
                component={'img'}
                // height={{ xs: '345', md: '30' }}
                // image='https://postfactory.co/wp-content/uploads/elementor/thumbs/2-45-qoiyeh9pnnnnknkk4efwlj5wwlkyj1wu91p02pbov4.webp'
                image={cardImage}
                alt='img'
            />
            <Box sx={{
                display: 'grid', position: 'absolute', top: '0', left: '0', width: '100%', height: disableBottomBar ? '100%' : 'calc(100% - 56px)', background: 'rgba(66,133,244,.8)', placeContent: 'center', pointerEvents: 'none', opacity: 0, transition: 'all ease .2s',
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
        </Card >

        <Modal open={open} onClose={handleClose} >
            <Box sx={style}>
                <Box onClick={handleClose} sx={{
                    position: 'absolute', top: -44, right: -44, color: '#fff', background: 'transparent', borderRadius: 8, border: '2px solid #fff', width: 20, height: 20, p: 1, display: 'grid', placeContent: 'center', cursor: 'pointer'
                }}><CloseRoundedIcon /></Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' }
                }
                } >
                    <Box sx={{ position: 'relative', flex: 3 }}>
                        <Box component={'img'} sx={{ width: '100%', height: '100%', borderRadius: { xs: 2, md: 4 }, }} src={cardImage} />
                    </Box>
                    <Box sx={{ p: 2, flex: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Box component={'img'} src='assets/PFlogo.jpg' sx={{ maxWidth: 32, border: 'solid 1px #000', borderRadius: 32 }} />
                            <Typography variant='body2' sx={{ fontWeight: 700 }}>PostFactory</Typography>

                        </Box>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant='body2' sx={{ fontWeight: 700 }} gutterBottom>Caption</Typography>
                        <Typography variant='body1'>{modalDesc}</Typography>
                    </Box>
                </Box>
            </Box>
        </Modal >
    </>

    )
}
