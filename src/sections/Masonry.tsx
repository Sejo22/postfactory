import React, { useRef, useEffect, useState } from 'react'
import { Box, Container, Grid, Paper, Typography, useTheme } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import VerifiedIcon from '@mui/icons-material/Verified';


interface ItemProps {
    title: string;
}

interface MemberProps {
    memberName: string;
    memberPosition: string;
    memberAvatar: string;
    cardTopPosition: number;
    cardLeftPosition: number;
}

const pillStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    p: 2,
    background: 'white',
    boxShadow: '0 32px 24px -24px rgba(0,0,0,.4)',
    borderRadius: 64

}
const waveItems = [
    'Limited Expertise',
    'Inconsistent Quality',
    'Unpredictable Availability',
    'Limited Resources',
    'Accountability Issues',
    'Narrow Focus',
    'Slow Turnaround Times',
    'Lack of Support',
]
const SubscribeItems = [
    'Cancel anytime',
    'No contracts',
    'Monthly subscription',
    'Pause anytime',
    'Upgrade / downgrade',
]

const WaveItem = ({ title }: ItemProps) => {

    return (
        <Box sx={pillStyle}>
            <CancelIcon sx={{ color: '#eb2027' }} />
            <Typography variant='body1' sx={{ fontWeight: 600 }}>{title}</Typography>
        </Box>
    )
}

const SubscriptionModel = ({ title }: ItemProps) => {

    return (
        <Box sx={pillStyle}>
            <VerifiedIcon sx={{ color: '#00b7ff' }} />
            <Typography variant='body1' sx={{ fontWeight: 600 }}>{title}</Typography>
        </Box>
    )
}

const MembersCard = ({ memberAvatar, memberName, memberPosition, cardLeftPosition, cardTopPosition }: MemberProps) => {
    const theme = useTheme();


    return (
        <Box sx={{ background: theme.palette.primary.iconColor, display: 'inline-flex', flexDirection: { xs: 'row', lg: 'column' }, alignItems: 'center', borderRadius: 4, p: { xs: 1, lg: 2 }, position: { xs: 'initial', lg: 'absolute' }, top: { xs: 'initial', lg: `${cardTopPosition}px` }, left: { xs: 'initial', lg: `${cardLeftPosition}%` }, width: { xs: '100%', sm: 'auto', lg: 80 }, gap: 1 }}>
            <Box component={'img'} src={memberAvatar} sx={{ width: 64, height: 64, borderRadius: 80, border: 'solid 1px #fff' }} />
            <Box>
                <Typography variant='body1' sx={{ color: '#fff', textAlign: { xs: 'left', lg: 'center' } }}><b>{memberName}</b></Typography>
                <Typography variant='body2' sx={{ color: '#fff', textAlign: { xs: 'left', lg: 'center' } }}>{memberPosition}</Typography>
            </Box>
        </Box>
    )
}
const members = [
    {
        memberAvatar: 'assets/Isabella.jpg',
        memberName: 'Stephan',
        memberPosition: 'Designer',
        cardTopPosition: 144,
        cardLeftPosition: 10,
    },
    {
        memberAvatar: 'assets/Isabella.jpg',
        memberName: 'Ava',
        memberPosition: 'Account Manager',
        cardTopPosition: 72,
        cardLeftPosition: 45,
    },
    {
        memberAvatar: 'assets/Isabella.jpg',
        memberName: 'Liam',
        memberPosition: 'Designer',
        cardTopPosition: 56,
        cardLeftPosition: 75,
    },
    {
        memberAvatar: 'assets/Isabella.jpg',
        memberName: 'Lucas',
        memberPosition: 'Designer',
        cardTopPosition: 350,
        cardLeftPosition: 10,
    },
    {
        memberAvatar: 'assets/Isabella.jpg',
        memberName: 'Mia',
        memberPosition: 'Designer',
        cardTopPosition: 300,
        cardLeftPosition: 35,
    },
    {
        memberAvatar: 'assets/Isabella.jpg',
        memberName: 'Grace',
        memberPosition: 'Content Strategist',
        cardTopPosition: 250,
        cardLeftPosition: 56,
    },
    {
        memberAvatar: 'assets/Isabella.jpg',
        memberName: 'Oliver',
        memberPosition: 'Account Manager',
        cardTopPosition: 350,
        cardLeftPosition: 78,
    },
]

export default function Masonry() {
    const gridRef = useRef<HTMLDivElement>(null)
    const [gridWidth, setGridWidth] = useState(0)

    useEffect(() => {
        if (gridRef.current) {
            setGridWidth(gridRef.current.offsetWidth);
        }
        const handleResize = () => {
            if (gridRef.current) {
                setGridWidth(gridRef.current.offsetWidth);
            }
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])
    return (
        <Container maxWidth='lg' sx={{ paddingBlock: 8, }}>
            <Typography variant='h2' sx={{ pb: 2, textAlign: 'center' }} >
                Title
            </Typography>
            <Typography variant='body1' textAlign={'center'} gutterBottom>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas cupiditate quibusdam repellendus, tenetur ipsum natus et hic placeat alias ex eaque. Enim cumque nesciunt molestiae velit minus! Ipsa nobis beatae aut autem velit necessitatibus ad, suscipit vel, labore alias doloribus.

            </Typography>
            <Box sx={{ pt: 8 }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 4 }}>
                    <Box ref={gridRef} sx={{ p: 4, flex: ' 1 ', minHeight: 320, aspectRatio: { xs: 'unset', lg: 1 / 1 }, backgroundImage: 'url(assets/earth.png)', backgroundSize: 'cover', backgroundPosition: 'left', borderRadius: 4, backgroundRepeat: 'no-repeat', position: 'relative' }}>
                        <Box sx={{ ...pillStyle, ...{ textTransform: 'uppercase', fontWeight: 600, px: 2, py: 1, fontSize: 14, color: '#666', width: 'fit-content', boxShadow: '0 8px 16px -4px rgba(0,0,0,.2)' } }}>Worldwide talent</Box>
                        {/* TEAM MEMBERS */}
                        <Box sx={{ display: { xs: 'flex', lg: 'initial' }, flexWrap: 'wrap', gap: 4, mt: { xs: 4, lg: 'initial' } }}>
                            {members.map((member, index) => (
                                <MembersCard key={index} memberAvatar={member.memberAvatar} memberName={member.memberName} memberPosition={member.memberPosition} cardLeftPosition={member.cardLeftPosition} cardTopPosition={member.cardTopPosition} />
                            ))}
                        </Box>



                    </Box>


                    <Box sx={{ p: 4, flex: '1', background: 'linear-gradient(225deg,#E9D3C8,#FAF9F7)', borderRadius: 4, gap: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Box sx={{ ...pillStyle, ...{ textTransform: 'uppercase', fontWeight: 600, px: 2, py: 1, fontSize: 14, color: '#666', width: 'fit-content', boxShadow: '0 8px 16px -4px rgba(0,0,0,.2)' } }}>The traditional method</Box>
                        <Typography component={'div'} variant='h3' gutterBottom>Wave goodbye to:</Typography>
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
                            {waveItems.map((title, index) => (
                                <WaveItem key={index} title={title} />
                            ))}
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', md: 'row' } }}>
                    <Box sx={{ p: 4, flex: '1', background: 'linear-gradient(180deg,#DDF5FF,#FAF9F7)', height: '100%', borderRadius: 4, gap: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Box sx={{ ...pillStyle, ...{ textTransform: 'uppercase', fontWeight: 600, px: 2, py: 1, fontSize: 14, color: '#666', width: 'fit-content', boxShadow: '0 8px 16px -4px rgba(0,0,0,.2)' } }}>Collaboration</Box>
                        <Typography component={'div'} variant='h3' gutterBottom>Seamless client interaction:</Typography>
                        <Box sx={{ background: 'white', p: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                <Box sx={{ backgroundColor: '#94e1ff', flex: 1, p: 1, borderRadius: 2 }}>
                                    <Typography sx={{ fontWeight: 700, color: '#111' }} variant='body2'>Sophia Delgado</Typography>
                                    <Typography sx={{ color: '#111' }} variant='body2'>Hello Ethan, the content for next month is ready. Could you please check it?</Typography>
                                </Box>
                                <Box component={'img'} src='/assets/Sophia.jpg' sx={{ maxWidth: 64, aspectRatio: 1 / 1, borderRadius: 64 }} />
                            </Box>


                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Box component={'img'} src='/assets/Ethan2.jpeg' sx={{ maxWidth: 64, aspectRatio: 1 / 1, borderRadius: 64 }} />
                                <Box sx={{ backgroundColor: '#ddd', flex: 1, p: 1, borderRadius: 2 }}>
                                    <Typography sx={{ fontWeight: 700, color: '#111' }} variant='body2'>Ethan Parker</Typography>
                                    <Typography sx={{ color: '#111' }} variant='body2'>Hi Sophia, I just checked the content, and we love it!
                                        I approved every post.</Typography>
                                </Box>

                            </Box>
                        </Box>
                        <Box sx={{ ...pillStyle, ...{ width: 'fit-content', p: 1, boxShadow: '8px 8px 25px 0 rgba(0,0,0,.1),16px 16px 15px 0 rgba(0,0,0,.1)' } }}>
                            <Box sx={{
                                color: '#00b7ff', textTransform: 'uppercase', display: 'flex', alignItems: 'center', fontWeight: 600
                            }}>
                                <DoneIcon />Approve</Box>
                            <span>|</span>
                            <Box sx={{ color: '#eb2027', textTransform: 'uppercase', display: 'flex', alignItems: 'center', fontWeight: 600 }}>
                                <CloseIcon />
                                Decline</Box>
                        </Box>
                        <Box sx={{ position: 'relative', minHeight: 152 }}>

                            <Box component={'img'} src='/assets/hservices1.webp' sx={{ position: 'absolute', borderRadius: 4, left: 0, bottom: 0, maxWidth: 96 }} />
                            <Box component={'img'} src='/assets/hservices2.webp' sx={{ position: 'absolute', borderRadius: 4, left: '50%', bottom: 0, transform: 'translateX(-50%)', maxWidth: 120 }} />
                            <Box component={'img'} src='/assets/hservices3.webp' sx={{ position: 'absolute', borderRadius: 4, right: -48, bottom: 0, maxWidth: 144 }} />
                        </Box>

                    </Box>
                    <Box sx={{ backgroundImage: 'url(assets/featuresbg4.png)', backgroundSize: 'cover', minHeight: 60, flex: 2, borderRadius: 4 }}>
                        <Box sx={{ p: 4, gap: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Box sx={{ ...pillStyle, ...{ textTransform: 'uppercase', fontWeight: 600, px: 2, py: 1, fontSize: 14, color: '#666', width: 'fit-content', boxShadow: '0 8px 16px -4px rgba(0,0,0,.2)' } }}>Subscription based</Box>
                            <Typography component={'div'} variant='h3' gutterBottom>Simple subscription model:</Typography>
                            <Box sx={{ position: 'relative', m: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 2 }}>
                                <Box component={'img'} src='assets/calendar.png' sx={{ maxWidth: { xs: '100%', md: '75%' } }} />

                                <Box sx={{ width: { xs: '100%', md: 'initial' }, position: { xs: 'inherit', md: 'absolute' }, top: { xs: 'inherit', md: 20 }, left: { xs: 'inherit', md: -25 } }}>
                                    <SubscriptionModel title={SubscribeItems[0]} />
                                </Box>

                                <Box sx={{ width: { xs: '100%', md: 'initial' }, position: { xs: 'inherit', md: 'absolute' }, bottom: { xs: 'inherit', md: 20 }, left: { xs: 'inherit', md: -25 } }}>
                                    <SubscriptionModel title={SubscribeItems[1]} />
                                </Box>
                                <Box sx={{ width: { xs: '100%', md: 'initial' }, position: { xs: 'inherit', md: 'absolute' }, bottom: { xs: 'inherit', md: -25 }, left: { xs: 'inherit', md: '50%' }, transform: { xs: 'unset', md: 'translateX(-50%)' } }}>
                                    <SubscriptionModel title={SubscribeItems[2]} />
                                </Box>
                                <Box sx={{ width: { xs: '100%', md: 'initial' }, position: { xs: 'inherit', md: 'absolute' }, bottom: { xs: 'inherit', md: 30 }, right: { xs: 'inherit', md: -25 } }}>
                                    <SubscriptionModel title={SubscribeItems[3]} />
                                </Box>
                                <Box sx={{ width: { xs: '100%', md: 'initial' }, position: { xs: 'inherit', md: 'absolute' }, top: { xs: 'inherit', md: 30 }, right: { xs: 'inherit', md: -15 } }}>
                                    <SubscriptionModel title={SubscribeItems[4]} />
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Box>

        </Container >

    )
}
