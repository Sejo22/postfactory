import React from 'react'
import { Container, Typography, Box, Button, useTheme } from '@mui/material'
import SocialMediaPostImage from '@/components/SocialMediaPostImage'

const cardsDetails = [
    {
        image: 'assets/social-media-visual-featured-1.webp',
        modalTitle: 'This is Title for card 1',
        modalDesc: "Success isn&apos;t about waiting for the perfect moment, it&apos;s about making the moment perfect through hard work! 📚 <br /> <br /> Whether it&apos;s finishing that book you&apos;ve been meaning to read or reaching a new personal goal, the power to achieve it is in YOUR hands.<br /><br /> What&apos;s one thing you&apos;re working hard on this week? Drop it in the comments!👇<br /><br /> #Goodreaders #BookLovers #MotivationMonday #WorkForIt #GoalGetter",
    },
    {
        image: 'assets/social-media-visual-featured-2.webp',
        modalTitle: 'This is Title for card 2',
        modalDesc: "Are you looking for a simple way to unwind and support your wellness? Our CBD gummies are here to help you relax, stay balanced, and feel your best—without missing a beat! 😌 <br /><br /> Perfect for managing everyday stress, better sleep, or just giving your body the care it deserves. <br /><br /> Who else is adding CBD to their wellness routine? 👇 <br /><br /> #MJCBD #HealthyLiving #CBDGummies #ChillOut #NaturalRemedies #WellnessJourney #RelaxationTime",
    },
    {
        image: 'assets/social-media-visual-featured-3.webp',
        modalTitle: 'This is Title for card 3',
        modalDesc: "Small daily goals lead to BIG changes! Here&apos;s what we&apos;re focusing on today:<br /><br /> 1️⃣ Think positive thoughts 💭<br /> 2️⃣ Drink plenty of water 💧<br /> 3️⃣ Move your body 🏃‍♀️<br /> 4️⃣ Get plenty of rest 😴 <br /><br />It&apos;s not just about hitting the gym—it&apos;s about making healthy choices all day, every day. Which one of these goals are you committing to today? Let us know in the comments and let&apos;s keep each other motivated!<br /><br />#HealthyLifeJourney #SmallDailyGoals #PositiveThinking #StayHydrated #MoveYourBody #HealthyHabits",
    },
    {
        image: 'assets/social-media-visual-featured-4.webp',
        modalTitle: 'This is Title for card 3',
        modalDesc: "Explore our gallery of captivating static social media posts, complete with compelling captions and targeted hashtags, expertly designed to boost engagement and amplify your brand's message across platforms.",
    },
    {
        image: 'assets/social-media-visual-featured-5.webp',
        modalTitle: 'This is Title for card 3',
        modalDesc: "Welcome all book enthusiasts! Engage in captivating novels or draw inspiration from non-fiction with the Billionaires Book Club. <br /><br /> Founded by esteemed children&apos;s author, Cassandra Jaramillo, this exclusive club is a sanctuary for those who understand the transformative influence of storytelling on our minds and destinies. <br /><br />Are you prepared to embark on a new literary journey? Join us now and unlock a realm of books that ignite ambition and creativity. 📖<br /><br />#BillionairesBookClub #BookLoversUnite #ReadingIsLife #BookwormsForever #AuthorInspiration",
    },
    {
        image: 'assets/social-media-visual-featured-6.webp',
        modalTitle: 'This is Title for card 3',
        modalDesc: "Introducing our latest delight: Vanilla and Salted Caramel Cashew Nuts Tube (100g) from Cajuu! 🌰<br /><br /> Indulge in the exquisite blend of cashew nuts infused with vanilla and caramel, perfectly seasoned with a hint of salt, and roasted to golden perfection. A sweet yet savoury healthy treat awaits!<br /><br />#Cajuu #CashewGoodness #TanzanianTreats #EthicalSnacking",
    }

]
export default function SocialMediaPostExamples() {
    const theme = useTheme();


    return (
        <Container maxWidth='lg' sx={{ textAlign: 'center', mt: 8, paddingBlock: 8 }}>
            <Typography variant='h2' sx={{ pb: 2 }} >
            Affordable Creative Solutionss
            </Typography>
            <Typography variant='body1' sx={{ pb: 8 }} gutterBottom>
            Get your creative and marketing tasks done efficiently without the hassle of unreliable freelancers or overpriced agencies. Benefit from a fixed, predictable monthly rate—no contracts, hidden fees, or surprises.
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr 1fr', md: '1fr 1fr 1fr' }, gap: 4 }}>
                {cardsDetails.map((detail, index) => (
                    <SocialMediaPostImage key={index} cardImage={detail.image} modalDesc={detail.modalDesc} />
                ))}
            </Box>

            <Button sx={{
                mt: 8, background: theme.palette.primary.accentGradient, px: 4, transition: 'unset',
                '&:hover': {
                    background: theme.palette.primary.main
                }
            }} variant='contained' size='large'>See more</Button>
        </Container>
    )
}
