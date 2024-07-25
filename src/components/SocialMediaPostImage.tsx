import React, { useState } from 'react'
import { Card, CardMedia, Box, Typography, Modal } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import SendIcon from '@mui/icons-material/Send';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useTheme } from '@mui/material/styles';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
export default function SocialMediaPostImage() {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: 300, md: 400 },
        bgcolor: 'background.paper',
        borderRadius: { xs: 2, md: 4 },
        p: { xs: 2, md: 4 },
    };
    return (<>
        <Card className='card__wrapper' sx={{ maxWidth: 345, position: 'relative', boxShadow: '0 4px 24px -4px rgba(0,0,0,.2)', borderRadius: 4 }}>
            <CardMedia
                component={'img'}
                height={'345'}
                image='https://postfactory.co/wp-content/uploads/elementor/thumbs/2-45-qoiyeh9pnnnnknkk4efwlj5wwlkyj1wu91p02pbov4.webp'
                alt='img'
            />
            <Box sx={{
                display: 'grid', position: 'absolute', top: '0', left: '0', width: '100%', height: '345px', background: 'rgba(66,133,244,.8)', placeContent: 'center', pointerEvents: 'none', opacity: 0, transition: 'all ease .2s',
                '.card__wrapper:hover &': {
                    opacity: 1,
                    pointerEvents: 'all',
                }
            }}>
                <Box onClick={handleOpen} sx={{
                    isolation: 'isolate', position: 'relative', display: 'grid', placeContent: 'center', cursor: 'pointer'
                }}>
                    <AddRoundedIcon sx={{ color: '#fff', fontSize: 32 }} />
                    <Box sx={{ position: 'absolute', content: "''", width: 88, height: 88, borderRadius: 64, backgroundColor: theme.palette.primary.main, top: '50%;', left: '50%', zIndex: -1, transform: 'translate(-50%,-50%)' }} />
                    {/* <Box sx={{ position: 'absolute', content: "''", width: 104, height: 104, borderRadius: 64, backgroundColor: theme.palette.primary.main, top: '50%;', left: '50%', zIndex: -2, transform: 'translate(-50%,-50%)', opacity: .5 }} />
                    <Box sx={{ position: 'absolute', content: "''", width: 120, height: 120, borderRadius: 64, backgroundColor: theme.palette.primary.main, top: '50%;', left: '50%', zIndex: -3, transform: 'translate(-50%,-50%)', opacity: .25 }} /> */}
                </Box>

            </Box>
            <Box sx={{
                width: '100%', background: '#fff', display: 'flex', justifyContent: 'space-between'
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, p: 2 }}>
                    <FavoriteIcon sx={{ color: '#eb2027' }} />
                    <ChatBubbleOutlineIcon />
                    <SendIcon />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                    <TurnedInNotIcon />
                </Box>

            </Box>
        </Card >
        <Modal open={open} onClose={handleClose} >
            <Box sx={style}>
                <Box onClick={handleClose} sx={{ position: 'absolute', top: 0, right: 0, color: '#000', width: 24, height: 24, p: 1, display: 'grid', placeContent: 'center', cursor: 'pointer' }}><CloseRoundedIcon /></Box>
                <Typography variant='body1'>Hello world</Typography>
            </Box>
        </Modal>
    </>

    )
}
