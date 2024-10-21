import { Container, Typography, Divider } from '@mui/material';

const RefundPolicy = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Refund Policy
            </Typography>


            <Typography variant='body1' paragraph>
                By signing up, you agree to our refund policy, which states that all services are non-refundable. This policy reflects the non-returnable nature of personalized, digital services and manual labor.
            </Typography>
            <Typography variant='body1' paragraph>
                As a low-cost creative services subscription, we offer the flexibility to cancel month-to-month, but refunds are not provided.
            </Typography>

            <Divider sx={{ my: 4 }} />


            <Typography variant="h6" gutterBottom>
                1. General Policy
            </Typography>
            <Typography variant='body1' paragraph>
                The rationale behind the strict no-refund policy is the personalized nature of services and digital deliverables. All of our services are tailored specifically to your preferences and brand.
            </Typography>
            <Typography variant='body1' paragraph>
                We welcome and encourage feedback, and we are committed to revising our work based on your input. Our services are crafted by top experts in design, web development, and social media management. With your collaboration and clear communication, we are confident in meeting your expectations and ensuring your satisfaction.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h6" gutterBottom>
                2. Service-Specific Details
            </Typography>
            <Typography variant='body1' paragraph>
                There are no differences in the non-refundable terms across our various services. We communicate with our customers through our dashboard, live chat, or email, as detailed in our Terms and Conditions.
            </Typography>
            <Divider sx={{ my: 4 }} />


            <Typography variant="h6" gutterBottom>
                3. Customer Responsibilities
            </Typography>
            <Typography variant='body1' paragraph>
                To ensure the best results, please complete the onboarding questionnaire promptly. Provide all necessary information and materials in a timely manner. Your feedback is crucial for us to understand your preferences and make any necessary adjustments to the content we create. Clear and consistent communication is key to delivering results that meet your expectations.
            </Typography>
            <Divider sx={{ my: 4 }} />


            <Typography variant="h6" gutterBottom>
                4. Credits and Adjustments
            </Typography>
            <Typography variant='body1' paragraph>
                Failure to complete the onboarding questionnaire does not qualify for a refund, but we can convert your payment into credits for other services. Refund requests immediately after completing the questionnaire do not qualify for a refund, as our service production starts immediately. Depending on the timing, we might be able to turn the payment into credits for other services if desired.
            </Typography>
            <Divider sx={{ my: 4 }} />


            <Typography variant="h6" gutterBottom>
                5. Non-Refundable Conditions
            </Typography>
            <Typography variant='body1' paragraph>
                Our no-refund policy is reinforced by the digital nature of our services. Occasionally, clients become unresponsive after making a purchase and completing the onboarding questionnaire, which disrupts the workflow and affects the quality of our deliverables.
            </Typography>
            <Typography variant='body1' paragraph>
                Active cooperation and communication are essential. If you engage with us consistently, we guarantee your satisfaction with our services, making a refund policy unnecessary.
            </Typography>
            <Divider sx={{ my: 4 }} />


            <Typography variant="h6" gutterBottom>
                6. Dispute Resolution
            </Typography>
            <Typography variant='body1' paragraph>
                We maintain constant communication with our clients. By purchasing our services, you agree to the no-refund policy. For additional information or concerns, please contact us at: support@postfactory.co.
            </Typography>
            <Divider sx={{ my: 4 }} />


            <Typography variant="h6" gutterBottom>
                7. Communication
            </Typography>
            <Typography variant='body1' paragraph>
                We communicate with our customers through our dashboard, live chat, or email.
            </Typography>
            <Divider sx={{ my: 4 }} />


            <Typography variant="h6" gutterBottom>
                8. Additional Information
            </Typography>
            <Typography sx={{ mt: 4 }} variant='body1' paragraph>
                <strong>8.1 Deliverables:</strong> If you are not satisfied with the deliverables, we do not offer refunds but are open to making necessary revisions. Approval of deliverables is considered final, and no more revisions are allowed after approval.
            </Typography>
            <Typography variant='body1' paragraph>
                <strong>8.2 Cancellation:</strong> Cancellation can be done at any time inside our Client Portal by clicking ‘manage subscription’ inside your order. Prorated refunds are not issued for early cancellations. If you’re charged because you forgot to cancel in time, we don’t offer refunds as we will already have started creating your next round of content.
            </Typography>
            <Typography variant='body1' paragraph>
                <strong>8.3 Renewal:</strong> All Post Factory services are a recurring subscription, meaning you will be charged automatically every month. Once a subscription is renewed, it cannot be refunded under any circumstance, and the buyer will be required to accept all content/work owed for that period with appropriate and fair client behavior.
            </Typography>
            <Typography variant='body1' paragraph>
                <strong>8.4 Results:</strong> Content is just one part of the puzzle when it comes to business results. We don’t guarantee any results, due to us being a creative service business with final approval in your hands, and many factors being outside of our control. You are paying us for creative deliverables that our team spends time creating based on your brief and feedback.
            </Typography>
            <Typography variant='body1' paragraph>
                <strong>8.5 Onboarding & Sign-Up:</strong> Failure to complete the onboarding questionnaire does not qualify for a refund, but we can convert your payment into credits for other services. Refund requests immediately after completing the questionnaire do not qualify for a refund, as our service production starts immediately. Depending on the timing, we might be able to turn the payment into credits for other services if desired.
            </Typography>
            <Typography variant='body1' paragraph>
                <strong>8.6 Technical Issues:</strong> You pay us for the creation of social media content. Posting and scheduling is a free, value-add service, meaning no refunds will be offered for any issues related to this. We will, however, do our best to resolve any technical issues. Any issues related to connecting your social media accounts in our scheduling platform do not warrant refunds. If the issues can’t be resolved, we advise clients to download the content and post it manually instead.
            </Typography>
            <Typography variant='body1' paragraph>
                We can’t post any approved content until you have connected at least one social media account to our scheduling platform. If your social media account is disabled or if posts for sensitive industries (weight loss, cannabis, etc.) are removed by the respective platform, we will not be held accountable and will not offer refunds. You approve all our work before it goes out, and it’s your responsibility.
            </Typography>
            <Typography variant='body1' paragraph>
                You are ultimately responsible for reviewing your social media accounts and ensuring that your connection is working and that our posts are being published as intended. Posts that failed to be posted due to account disconnects on the scheduling platform do not warrant a refund, but we can reschedule the posts once the issue has been resolved—or you can post them manually.
            </Typography>

            <Typography variant='body1' paragraph>
                For any further information or assistance, please contact us at: support@postfactory.co.
            </Typography>

        </Container>
    );
};

export default RefundPolicy;
