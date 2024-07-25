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
    Typography
} from '@mui/material';
import { useTheme } from '@mui/material';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

const navItems = [
    { title: 'Home', link: '#' },
    { title: 'Services', link: '#' },
    { title: 'How it works', link: '#' },
    { title: 'Examples', link: '#' },
    { title: 'Pricing', link: '#' }];

export default function Header() {
    const theme = useTheme()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <>
            <Container maxWidth='lg'>
                <AppBar component="nav" sx={{ background: 'rgba(255,255,255,.3)', backdropFilter: 'blur(10px)', borderRadius: 4, boxShadow: 'none', border: 'solid 1px #eee', mt: 4, position: 'inherit' }} position='fixed'>
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        <Box
                            component='img'
                            src='./assets/headerLogo.png'
                            alt="Logo"
                            sx={{ maxHeight: 56 }}
                        />
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
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
                        <Typography variant='body2'>We create best Social Posts in the world.</Typography>
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
                        <Typography variant='body2'>We create best Logo Design in the world.</Typography>
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
                        <Typography variant='body2'>We create best Web Design in the world.</Typography>
                    </ListItemText>
                </MenuItem>
            </Menu >
        </>
    );
}
