import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import FaqAccordion from '@/components/FaqAccordion'

const faqs = [
    {
        question: "What are the differences between the Essential Suite, Executive Package, and Elite Portfolio?",
        answer: "The Essential Suite ($149.99) includes up to 4 design concepts by 1 designer and 2 revisions. The Executive Package ($249.99) offers up to 8 designs by 2 designers with unlimited revisions. The Elite Portfolio ($399.99) provides up to 20 designs by 3 designers, also with unlimited revisions. Each package ensures copyright ownership of one chosen design and includes industry-standard files."
    },
    {
        question: "How long does the logo design process typically take?",
        answer: "The design process can vary depending on the package selected and the number of revisions requested. Typically, it ranges from 5 to 10 working days. We work diligently to meet your timeline while ensuring the highest quality for your final logo."
    },
    {
        question: "Can I request changes to the designs?",
        answer: "Yes, revisions are included in each package. The Essential Suite includes up to 2 revisions, while both the Executive Package and Elite Portfolio offer unlimited revisions. This allows us to refine the designs according to your feedback to ensure your complete satisfaction."
    },
    {
        question: "What does copyright ownership mean for me?",
        answer: "Upon selection and finalization, you will receive full copyright ownership of your chosen design. This means you have exclusive rights to use, reproduce, and modify the logo as you see fit for your business."
    },
    {
        question: "How can I communicate with the lead designer during the design process?",
        answer: "You will have direct communication access to the lead designer, or Creative Director, through our app. This ensures that you can provide ongoing feedback, ask questions, and receive updates throughout the design process. Our team is committed to providing assistance and ensuring a smooth and collaborative experience."
    },
    {
        question: "What file types are included with my final logo?",
        answer: "Your final logo will be delivered in industry-standard file formats, which typically include AI (Adobe Illustrator), EPS, PNG, and JPEG. These formats ensure that your logo is usable in a variety of media, from digital to print."
    },
    {
        question: "How do I communicate my design preferences and requirements?",
        answer: "After completing your payment, you will receive a design brief to fill out. This brief is your opportunity to share all the details about your vision, preferences, and any specific requirements you have for the logo. The more information you provide, the better we can align our designs with your expectations."
    },
    {
        question: "How do I choose the right package for my business?",
        answer: "Consider your needs for design variety, the extent of collaboration you desire, and your budget. More designers and design options offer a broader range of creativity and concepts, while more revisions provide flexibility in refining your logo. Our team is also available to help assess your needs and recommend the best package."
    }
];

export default function FaqLogoDesign() {
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
