import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import FaqAccordion from '@/components/FaqAccordion'

const faqs = [
    {
        question: "What does your social media management service include?",
        answer: 'Our service includes the creation of customized content, writing engaging captions and hashtags, and scheduling posts. Depending on your chosen package, we can also manage interactions and provide analytics reports.'
    },
    {
        question: "How do I get started with your services?",
        answer: 'Getting started is easy! Simply register on our website to select your preferred social media management package. Once registered, you can fill out a brief form to specify your needs and preferences, and we’ll guide you through the onboarding process to kickstart your campaign.'
    },
    {
        question: "How long does it take to create content once I've filled out the brief?",
        answer: 'After you submit your brief, we aim to deliver your customized social media content within 5 working days. This timeline allows us to ensure that every post meets our high standards and aligns perfectly with your goals.'
    },
    {
        question: "Who will I be in contact with regarding my social media management?",
        answer: 'Each customer is assigned their own dedicated social media manager who will be your point of contact for any requests or assistance you need. You and your social media manager will communicate through our specialized application, ensuring a seamless and efficient interaction.'
    },
    {
        question: "How often will you post on our social media accounts?",
        answer: 'The frequency of posts varies by package. Our Essential Suite includes 10 posts per month, our Executive Package offers 20 posts, and our Elite Portfolio provides 30 posts. Custom schedules can be arranged to meet your specific needs.'
    },
    {
        question: "Can I approve posts before they are published?",
        answer: 'Yes, absolutely! All content is sent for your approval before posting. We ensure that you have full control over what goes live on your social media channels.'
    },
    {
        question: "What platforms do you manage?",
        answer: 'We manage a wide range of platforms including Facebook, Instagram, Twitter or X, LinkedIn, Google Business and more. Let us know your specific needs, and we can tailor our services accordingly.'
    },
    {
        question: "How do I choose the right package for my business?",
        answer: 'Consider your goals, budget, and the level of engagement you want to maintain. Our team can also help assess your needs and recommend the best package to maximize your social media presence.'
    }, {
        question: "What results can I expect from your social media management?",
        answer: 'While results vary, typical benefits include increased follower growth, higher engagement rates, and improved brand visibility. We focus on strategic content that aligns with your marketing goals. Anyways, there are much more factors that affect all of the above, because of which we cannot guarantee with certainty what results you can expect'
    },
]

export default function FaqSocialPosts() {
    return (
        <Box sx={{ mt: 4 }}>
            <Container maxWidth='xl' sx={{ py: 8 }}>
                <Typography variant='h2' sx={{ pb: 2, textAlign: 'center' }}>Frequently Asked Questions</Typography>
                <Typography variant='body1' sx={{ maxWidth: { xs: 'inherit', md: '75%' }, textAlign: 'center', mx: 'auto' }} gutterBottom>If you can&apos;t find the answer you&apos;re looking for in our FAQ section, please don&apos;t hesitate to reach out via the contact form below. We&apos;re here to help with any additional inquiries you may have!

                </Typography>
                <Box sx={{ maxWidth: { xs: 'inherit', md: '75%' }, mx: 'auto', mt: 4 }}>
                    {faqs.map((faq, index) => (
                        <FaqAccordion key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </Box>

            </Container>
        </Box>
    )
}
