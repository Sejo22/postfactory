'use client';
import React, { useState, MouseEvent } from 'react';
import {
    AppBar,
    Container,
    Box,
    Button,
    Toolbar,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
    Typography,
    Drawer,
    Divider
} from '@mui/material';
import { useTheme } from '@mui/material';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const navItems = [
    { title: 'Home', link: '#' },
    { title: 'Services', link: '#' },
    { title: 'How it works', link: '#' },
    { title: 'Examples', link: '#' },
    { title: 'Pricing', link: '#' }];

interface DrawerListProps {
    toggleDrawer: (open: boolean) => void;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Header() {
    const theme = useTheme()
    const [openDrawer, setOpenDrawer] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleDrawer = (newOpen: boolean) => (e: MouseEvent<HTMLElement>) => {
        setOpenDrawer(newOpen);
    }

    const DrawerList = (
        <Box sx={{ width: 300, p: 2 }} role="presentation" >
            <Box
                component='img'
                src='./assets/headerLogo.png'
                alt="Logo"
                sx={{ maxHeight: 48, transition: 'max-height ease .2s' }}
            />
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: { xs: 'flex', lg: 'none', flexDirection: 'column', alignItems: 'flex-start', gap: 4 } }}>
                {navItems.map((item) => (
                    <Button
                        variant='text'
                        key={item.title}
                        href={item.link}
                        // onClick={item.title === 'Services' ? handleClick : undefined}
                        onClick={(event) => {
                            if (item.title === 'Services') {
                                handleClick(event);
                                event.stopPropagation();
                            } else {
                                toggleDrawer(false)(event);
                            }
                        }}
                        sx={{
                            paddingInline: 2,
                            color: theme.palette.primary.main

                        }}
                    >
                        {item.title}
                    </Button>
                ))}
                <Button onClick={(event) => toggleDrawer(false)(event)} variant='contained' sx={{
                    background: theme.palette.primary.accentGradient, ml: 1, px: 4, transition: 'unset',
                    '&:hover': {
                        background: theme.palette.primary.main
                    }
                }}>Login</Button>
            </Box>
        </Box>
    )

    const open = Boolean(anchorEl);

    return (
        <>
            <Container maxWidth='lg'>
                <AppBar component="nav" sx={{ background: 'rgba(255,255,255,.3)', backdropFilter: 'blur(10px)', borderRadius: 4, boxShadow: 'none', border: 'solid 1px #eee', mt: 4, position: 'inherit' }} position='fixed'>
                    <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box
                            component='img'
                            src='./assets/headerLogo.png'
                            alt="Logo"
                            sx={{ maxHeight: { xs: 36, sm: 40, md: 48, lg: 56 }, transition: 'max-height ease .2s' }}
                        />
                        <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                            {navItems.map((item) => (
                                <Button
                                    variant='text'
                                    key={item.title}
                                    href={item.link}
                                    onClick={item.title === 'Services' ? handleClick : undefined}
                                    sx={{
                                        paddingInline: 2,
                                        color: theme.palette.primary.main

                                    }}
                                >
                                    {item.title}
                                </Button>
                            ))}
                            <Button variant='contained' sx={{
                                background: theme.palette.primary.accentGradient, ml: 1, px: 4, transition: 'unset',
                                '&:hover': {
                                    background: theme.palette.primary.main
                                }
                            }}>Login</Button>
                        </Box>
                        <Drawer anchor='right' open={openDrawer} onClose={toggleDrawer(false)}>
                            {DrawerList}
                        </Drawer>
                        <Box onClick={(e) => toggleDrawer(true)(e)} sx={{ display: { xs: 'grid', lg: 'none' }, placeContent: 'center' }}>
                            <MenuRoundedIcon sx={{ cursor: 'pointer', color: theme.palette.primary.main }} />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Container >
            <Menu
                id="basic-menu"
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                disableScrollLock={true}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <MenuItem className='menuItem' sx={{ p: 2 }} >
                    <ListItemIcon>
                        <AccountBoxOutlinedIcon sx={{
                            pr: 2, fontSize: 32, color: theme.palette.primary.main, '.menuItem:hover &': {
                                color: theme.palette.primary.iconColor
                            }
                        }} />
                    </ListItemIcon>
                    <ListItemText>
                        Social Posts
                        <br />
                        <Typography sx={{ wordWrap: 'break-word', whiteSpace: 'collapse' }} variant='body2'>We create best Social Posts in the world.</Typography>
                    </ListItemText>

                </MenuItem>

                <MenuItem className='menuItem' sx={{ p: 2 }} >
                    <ListItemIcon>
                        <DiamondOutlinedIcon sx={{
                            pr: 2, fontSize: 32, color: theme.palette.primary.main, '.menuItem:hover &': {
                                color: theme.palette.primary.iconColor
                            }
                        }} />
                    </ListItemIcon>
                    <ListItemText>
                        Logo Design
                        <br />
                        <Typography sx={{ wordWrap: 'break-word', whiteSpace: 'collapse' }} variant='body2'>We create best Logo Design in the world.</Typography>
                    </ListItemText>
                </MenuItem>

                <MenuItem className='menuItem' sx={{ p: 2 }} >
                    <ListItemIcon>
                        <DashboardOutlinedIcon sx={{
                            pr: 2, fontSize: 32, color: theme.palette.primary.main, '.menuItem:hover &': {
                                color: theme.palette.primary.iconColor
                            }
                        }} />
                    </ListItemIcon>
                    <ListItemText>
                        Web Design
                        <br />
                        <Typography sx={{ wordWrap: 'break-word', whiteSpace: 'collapse' }} variant='body2'>We create best Web Design in the world.</Typography>
                    </ListItemText>
                </MenuItem>
            </Menu >
        </>
    );
}
