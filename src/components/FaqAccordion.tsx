import React from 'react'
import { Typography, Accordion, AccordionDetails, AccordionSummary, useTheme } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface FaqAccordionProps {
    question: string;
    answer: string;
}

export default function FaqAccordion({ question, answer }: FaqAccordionProps) {
    const theme = useTheme();
    return (
        <>
            <Accordion sx={{ boxShadow: 'none', p: 2 }}>
                <AccordionSummary expandIcon={<ArrowDropDownIcon />} >
                    <Typography variant='body1' sx={{ color: theme.palette.primary.main, '.MuiAccordionSummary-root.Mui-expanded &': { color: theme.palette.primary.iconColor } }}><strong>{question}</strong></Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Typography variant='body1'>{answer}</Typography>
                </AccordionDetails>
            </Accordion>
        </>
    )
}
