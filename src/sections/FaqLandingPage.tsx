import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import FaqAccordion from '@/components/FaqAccordion'

const faqs = [
    {
        question: "What services does Post Factory offer?",
        answer: 'Post Factory specializes in social media management, logo design, and website design. We provide comprehensive solutions to elevate your brand’s online presence and visual identity.'
    },
    {
        question: "How does the process work?",
        answer: 'Once you select a service and complete the payment process, we’ll send you a brief to fill out. This helps us better understand your specific needs and expectations. Based on your input, we move on to the design or content creation phase. After creating initial drafts, we send them to you for review and approval. Our goal is to ensure your complete satisfaction with the final product.'
    },
    {
        question: "How can I get a quote for my project?",
        answer: 'Our pricing is transparently listed on our website to help you choose the best option for your needs. If you require further customization or have specific requirements, please contact us through the form on our website. We’ll get back to you promptly to discuss your project in detail and provide any additional information you need.'
    },
    {
        question: "What is the turnaround time for a project?",
        answer: 'Turnaround times vary depending on the service and project complexity. Generally, social media content is ready within 5 working days after the brief is completed, while logo and website design projects may take longer. We strive to meet your timelines and will discuss specific deadlines during the consultation phase.'
    },
    {
        question: "How are revisions handled?",
        answer: 'We offer revisions to ensure your complete satisfaction with our work. The number of revisions allowed may vary by service and package, but we always work closely with you to achieve the desired outcome.'
    },
    {
        question: "Is ongoing support available after project completion?",
        answer: 'Yes, we offer ongoing support and maintenance services for website design projects and continuous management options for social media accounts to ensure your digital assets remain up-to-date and effective.'
    },
    {
        question: "What makes Post Factory different from other agencies?",
        answer: 'Our commitment to affordability and quality sets us apart. We offer some of the most competitive pricing in the industry without compromising on the quality of our services. Each client receives personalized attention and customized solutions tailored to their unique brand needs.'
    },
    {
        question: "Can I cancel or pause my subscription?",
        answer: 'Yes, you can cancel or pause your month-to-month subscription at any time. Please notify us at least 7 days before your next billing cycle to avoid further charges. This allows us to manage your account changes smoothly and ensure that you are not billed for the next period.'
    }, {
        question: "What is your refund policy?",
        answer: 'Due to the nature of our work and the commitment we put into each project to fulfill the specifications outlined in your brief, we do not offer refunds. We strive to meet your expectations with every project and encourage open communication throughout the process to ensure your satisfaction.'
    },
]

export default function FaqLandingPage() {
    return (
        <Box sx={{ mt: 4 }}>
            <Container maxWidth='xl' sx={{ py: 8 }}>
                <Typography variant='h2' sx={{ pb: 2, textAlign: 'center' }}>Frequently Asked Questions</Typography>
                <Typography variant='body1' textAlign={'center'} gutterBottom>If you can&apos;t find the answer you&apos;re looking for in our FAQ section, please don&apos;t hesitate to reach out via the contact form below. We&apos;re here to help with any additional inquiries you may have!

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
