import React from 'react'
import { Box, Container, Typography, useTheme } from '@mui/material'
import SocialMediaPostImage from '@/components/SocialMediaPostImage';


const websites = [{
    image: 'assets/website1.webp',
    modalTitle: 'Assetise.io',
    modalDesc: "Assetise.io was established in 2023 to act as a portal for individuals wishing to participate in the world of online trading, whether that is in the cryptocurrency market or CFD trading. <br /> <br /> Building on the expertise of individuals with complimentary skill sets all within the world of fintech and financial services, Assetise is well placed to grow into a major force in the world of online trading. <br /> <br /> ",
},
{
    image: 'assets/website2.webp',
    modalTitle: 'Conditionalis',
    modalDesc: "Conditionalis is a project facilitation company.<br /> <br /> We help you to get your project started and financed with conditional donations.<br />We are a project consultancy. <br />We are dedicated to project funding with a twist of fun.<br />We help you get it done and in a cool way.<br /> <br />Our approach allows you converting the financial power to absorb a loss into project financing.<br /> <br /> We help you taping into fuzzy money.",
}, {
    image: 'assets/website3.webp',
    modalTitle: 'FlexLists',
    modalDesc: "FlexLists is a flexible online tool designed for creating, managing, and sharing simple databases or lists. It allows users to organize information such as tasks, addresses, books, movies, and more. <br /> <br /> FlexLists also offers various views (like calendar, Kanban, Gantt, and spreadsheet) to display data according to your preferences. It is popular for its ease of use and customizable data fields, though some users have noted that it lacks advanced database design capabilities and flexibility when managing large datasets. <br /> <br /> Visit Flexlists: ",
},
{
    image: 'assets/website4.webp',
    modalTitle: 'Quantum Innovations',
    modalDesc: "Quantum Innovations is a cutting-edge tech solutions company specializing in quantum computing, artificial intelligence, and advanced algorithms. <br /> <br /> Our mission is to harness the power of quantum technology to solve complex problems and drive innovation across industries.<br /> <br /> We provide custom software, research, and consulting services to help businesses stay ahead in the fast-evolving world of technology",
}]



function WebsiteExamples() {
    const theme = useTheme();

    return (
        <Box>
            <Container maxWidth='lg'>
                <Box sx={{ margin: '64px auto 0 auto', maxWidth: { xs: '100%', md: '75%' }, py: 8 }}>
                    <Typography variant='h2' sx={{ pb: 2, textAlign: 'center' }} >
                        Website Design Examples
                    </Typography>
                    <Typography variant='body1' textAlign={'center'} gutterBottom>
                        Explore our collection of websites designed to connect brands with their audiences effortlessly
                    </Typography>
                </Box>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 4, mb: 16 }}>

                    {websites.map((website, index) => (
                        <SocialMediaPostImage isWebdesign key={index} isStory={false} disableBottomBar cardImage={website.image} modalDesc={website.modalDesc} modalTitle={website.modalTitle} />
                    ))}
                </Box>
            </Container>
        </Box>
    )
}

export default WebsiteExamples