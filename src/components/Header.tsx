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
    Divider,
    Slide,
    useScrollTrigger
} from '@mui/material';
import { useTheme } from '@mui/material';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import routes from '../app/routes';
import { useRouter } from 'next/router';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const navItems = [
    { title: 'Home', link: routes.home },
    { title: <Box sx={{ display: 'flex', alignItems: 'center', gap: .5 }}>Services <KeyboardArrowDownRoundedIcon /></Box>, link: '' },
    { title: 'Examples', link: routes.examples },
    { title: 'How it works', link: routes.howItWorks },
    { title: 'Pricing', link: routes.pricing }
];

interface DrawerListProps {
    toggleDrawer: (open: boolean) => void;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Header() {
    const theme = useTheme()
    const router = useRouter();
    const [openDrawer, setOpenDrawer] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: MouseEvent<HTMLElement>, link?: string) => {
        if (link) {
            router.push(link);
            handleClose();
        }
        else {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleDrawer = (newOpen: boolean) => (e: MouseEvent<HTMLElement>) => {
        setOpenDrawer(newOpen);
    }

    const iconStyle = {
        pr: 2,
        fontSize: 32,
        color: theme.palette.primary.main,
        '.menuItem:hover &':
        {
            color: theme.palette.primary.iconColor
        }

    }

    const servicesItems = [
        {
            title: 'Social Media Management',
            icon: <AccountBoxOutlinedIcon sx={iconStyle} />,
            description: 'We are the best at Social Posts',
            link: routes.services.socialPosts
        },
        {
            title: 'Business Growth Package',
            icon: <TrendingUpIcon sx={iconStyle} />,
            description: 'We are the best at Business Growth',
            link: routes.services.businessGrowth
        },
        {
            title: 'SEO Blog Posts',
            icon: <ArticleOutlinedIcon sx={iconStyle} />,
            description: 'We are the best at SEO Blog Posts',
            link: routes.services.seoBlogs
        },
        {
            title: 'Web Design',
            icon: <DashboardOutlinedIcon sx={iconStyle} />,
            description: 'We are the best at Web Design',
            link: routes.services.webDesign
        }
    ]



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
                {navItems.map((item, index) => (
                    <Button
                        variant='text'
                        key={index}
                        href={item.link}
                        onClick={(event) => {
                            if (index === 1) {
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
                <AppBar component="nav" sx={{
                    mt: 4,
                    background: 'rgba(255,255,255,.75)',
                    backdropFilter: 'blur(16px)',
                    borderRadius: 4,
                    boxShadow: 'none',
                    border: 'solid 1px #eee',
                    position: 'sticky'
                }}>
                    < Toolbar sx={{
                        justifyContent: 'space-between', alignItems: 'center'
                    }}>
                        <Box
                            component='img'
                            src='./assets/headerLogo.png'
                            alt="Logo"
                            sx={{ maxHeight: { xs: 36, sm: 40, md: 48, lg: 56 }, transition: 'max-height ease .2s' }}
                        />
                        <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                            {navItems.map((item, index) => (
                                <Button
                                    variant='text'
                                    key={index}
                                    href={item.link}
                                    onClick={index === 1 ? handleClick : undefined}
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
                </AppBar >
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
                {servicesItems.map((item, index) => (
                    <MenuItem className='menuItem' sx={{ p: 2 }} key={index} onClick={(event) => handleClick(event, item.link)} >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText>
                            {item.title}
                            <br />
                            <Typography sx={{ wordWrap: 'break-word', whiteSpace: 'collapse' }} variant='body2'>{item.description}</Typography>
                        </ListItemText>

                    </MenuItem>
                ))}
            </Menu >
        </>
    );
}
