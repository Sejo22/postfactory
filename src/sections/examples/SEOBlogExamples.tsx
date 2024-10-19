import React from 'react'
import { Box, Container, Typography, useTheme } from '@mui/material'
import SocialMediaPostImage from '@/components/SocialMediaPostImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const seoBlogs = [{
    image: 'assets/seo-for-local-business-blog-post.webp',
    modalTitle: 'How to Attract Customers from the Cafe Across the Street?',
    modalDesc: "<h1>The Impact of Technology on Modern Life</h1><img src='https://via.placeholder.com/800x400' alt='Technology Revolution'/><h2>Technology in Communication</h2><p>One of the most noticeable changes brought by technology is the way we communicate. Gone are the days when letters and landline phones were the primary means of staying in touch. With the advent of smartphones, social media, and instant messaging apps, people can now communicate across the globe in real-time.</p><p>According to research, over 3.6 billion people are using smartphones today, and this number is expected to grow. Social media platforms like Facebook, Instagram, and Twitter have also connected millions of users, creating a new global village.</p><h2>Technological Advancements in Healthcare</h2><p>The healthcare industry has also experienced a significant transformation due to technology. Innovations such as telemedicine, wearable health devices, and AI-powered diagnostics have improved patient care and made healthcare more accessible. Today, doctors can monitor patients' health remotely and provide timely interventions through video consultations.</p><img src='https://via.placeholder.com/800x400' alt='Healthcare Technology'/><p>Furthermore, AI and machine learning are being used to analyze medical data, helping doctors make better-informed decisions. For example, algorithms can detect patterns in radiology images, potentially spotting diseases like cancer at an earlier stage.</p><h3>Technology in Education</h3><p>Another area where technology has made a substantial impact is education. E-learning platforms have become incredibly popular, especially during the COVID-19 pandemic, when schools and universities had to shift to online learning. Tools like video conferencing, interactive whiteboards, and online assessments have allowed educators to continue teaching remotely without disruption.</p><p>Moreover, students can now access a wealth of knowledge from anywhere, at any time. This shift toward digital learning has opened up new possibilities for lifelong learning and skill development, providing opportunities for those who may not have had access to traditional education.</p><img src='https://via.placeholder.com/800x400' alt='Online Learning'/><h2>The Future of Technology</h2><p>Looking ahead, the role of technology in our lives is only expected to grow. Emerging technologies like blockchain, quantum computing, and 5G networks will continue to push the boundaries of what is possible. As these technologies evolve, they will create new opportunities and challenges that society must navigate.</p><p>In conclusion, technology has had a profound impact on nearly every aspect of modern life. From how we communicate to how we access healthcare and education, its influence is undeniable. As we move forward, it is essential to harness the power of technology responsibly to ensure a better future for all.</p>",
    articleExcerpt: "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, it is clear that technological advancements have significantly impacted various aspects of our lives. In this article, we will explore how technology has shaped modern life and what it means for the future.",
    wordCount: '500 Words',
    blogCategory: 'Digital Marketing'
},
{
    image: 'assets/eye-color-chagne-blog-post.webp',
    modalTitle: 'The Pros and Cons of Eye Color Change: What You Need to Know',
    modalDesc: "<h1>The Impact of Technology on Modern Life</h1><img src='https://via.placeholder.com/800x400' alt='Technology Revolution'/><h2>Technology in Communication</h2><p>One of the most noticeable changes brought by technology is the way we communicate. Gone are the days when letters and landline phones were the primary means of staying in touch. With the advent of smartphones, social media, and instant messaging apps, people can now communicate across the globe in real-time.</p><p>According to research, over 3.6 billion people are using smartphones today, and this number is expected to grow. Social media platforms like Facebook, Instagram, and Twitter have also connected millions of users, creating a new global village.</p><h2>Technological Advancements in Healthcare</h2><p>The healthcare industry has also experienced a significant transformation due to technology. Innovations such as telemedicine, wearable health devices, and AI-powered diagnostics have improved patient care and made healthcare more accessible. Today, doctors can monitor patients' health remotely and provide timely interventions through video consultations.</p><img src='https://via.placeholder.com/800x400' alt='Healthcare Technology'/><p>Furthermore, AI and machine learning are being used to analyze medical data, helping doctors make better-informed decisions. For example, algorithms can detect patterns in radiology images, potentially spotting diseases like cancer at an earlier stage.</p><h3>Technology in Education</h3><p>Another area where technology has made a substantial impact is education. E-learning platforms have become incredibly popular, especially during the COVID-19 pandemic, when schools and universities had to shift to online learning. Tools like video conferencing, interactive whiteboards, and online assessments have allowed educators to continue teaching remotely without disruption.</p><p>Moreover, students can now access a wealth of knowledge from anywhere, at any time. This shift toward digital learning has opened up new possibilities for lifelong learning and skill development, providing opportunities for those who may not have had access to traditional education.</p><img src='https://via.placeholder.com/800x400' alt='Online Learning'/><h2>The Future of Technology</h2><p>Looking ahead, the role of technology in our lives is only expected to grow. Emerging technologies like blockchain, quantum computing, and 5G networks will continue to push the boundaries of what is possible. As these technologies evolve, they will create new opportunities and challenges that society must navigate.</p><p>In conclusion, technology has had a profound impact on nearly every aspect of modern life. From how we communicate to how we access healthcare and education, its influence is undeniable. As we move forward, it is essential to harness the power of technology responsibly to ensure a better future for all.</p>",
    articleExcerpt: "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, it is clear that technological advancements have significantly impacted various aspects of our lives. In this article, we will explore how technology has shaped modern life and what it means for the future.",
    wordCount: '1000 Words',
    blogCategory: 'Cosmetic Procedures'

}, {
    image: 'assets/Childrens-resistance-and-their-immune-system-blog-thumbnail.webp',
    modalTitle: 'Childrens resistance and their immune system',
    modalDesc: "<h1>The Impact of Technology on Modern Life</h1><img src='https://via.placeholder.com/800x400' alt='Technology Revolution'/><h2>Technology in Communication</h2><p>One of the most noticeable changes brought by technology is the way we communicate. Gone are the days when letters and landline phones were the primary means of staying in touch. With the advent of smartphones, social media, and instant messaging apps, people can now communicate across the globe in real-time.</p><p>According to research, over 3.6 billion people are using smartphones today, and this number is expected to grow. Social media platforms like Facebook, Instagram, and Twitter have also connected millions of users, creating a new global village.</p><h2>Technological Advancements in Healthcare</h2><p>The healthcare industry has also experienced a significant transformation due to technology. Innovations such as telemedicine, wearable health devices, and AI-powered diagnostics have improved patient care and made healthcare more accessible. Today, doctors can monitor patients' health remotely and provide timely interventions through video consultations.</p><img src='https://via.placeholder.com/800x400' alt='Healthcare Technology'/><p>Furthermore, AI and machine learning are being used to analyze medical data, helping doctors make better-informed decisions. For example, algorithms can detect patterns in radiology images, potentially spotting diseases like cancer at an earlier stage.</p><h3>Technology in Education</h3><p>Another area where technology has made a substantial impact is education. E-learning platforms have become incredibly popular, especially during the COVID-19 pandemic, when schools and universities had to shift to online learning. Tools like video conferencing, interactive whiteboards, and online assessments have allowed educators to continue teaching remotely without disruption.</p><p>Moreover, students can now access a wealth of knowledge from anywhere, at any time. This shift toward digital learning has opened up new possibilities for lifelong learning and skill development, providing opportunities for those who may not have had access to traditional education.</p><img src='https://via.placeholder.com/800x400' alt='Online Learning'/><h2>The Future of Technology</h2><p>Looking ahead, the role of technology in our lives is only expected to grow. Emerging technologies like blockchain, quantum computing, and 5G networks will continue to push the boundaries of what is possible. As these technologies evolve, they will create new opportunities and challenges that society must navigate.</p><p>In conclusion, technology has had a profound impact on nearly every aspect of modern life. From how we communicate to how we access healthcare and education, its influence is undeniable. As we move forward, it is essential to harness the power of technology responsibly to ensure a better future for all.</p>",
    articleExcerpt: "Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, it is clear that technological advancements have significantly impacted various aspects of our lives. In this article, we will explore how technology has shaped modern life and what it means for the future.",
    wordCount: '1500 Words',
    blogCategory: 'Health'

}
]

const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
};

function SEOBlogExamples() {
    const theme = useTheme();

    return (
        <Box>
            <Container maxWidth='lg' sx={{ py: 8 }}>
                <Box sx={{ m: '0 auto', maxWidth: { xs: '100%', md: '75%' }, py: 8 }}>
                    <Typography variant='h2' sx={{ pb: 2, textAlign: 'center' }} >
                    SEO Blog Post Examples
                    </Typography>
                    <Typography variant='body1' textAlign={'center'} gutterBottom>
                    Drive Organic Traffic, Increase Visibility, and Boost Your Search Rankings with Optimized Content
                    </Typography>
                </Box>

                <Box >
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={32}
                        autoplay={{
                            delay: 5000,
                            pauseOnMouseEnter: true,
                        }}
                        speed={200}
                        slidesPerView={1}
                        breakpoints={{
                            576: {
                                slidesPerView: 2
                            },
                            1024: {
                                slidesPerView: 3
                            }
                        }}
                        loop={true}
                        style={{ overflow: 'unset' }}
                    >

                        {seoBlogs.map((blog, index) => (
                            <SwiperSlide key={index} style={{ maxHeight: 'auto', borderRadius: 16 }}>
                                <SocialMediaPostImage blogCategory={blog.blogCategory} wordCount={blog.wordCount} isBlog key={index} isStory={false} disableBottomBar cardImage={blog.image} modalDesc={blog.modalDesc} modalTitle={blog.modalTitle} articleExcerpt={truncateText(blog.articleExcerpt, 10)} />

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Container>
        </Box>
    )
}

export default SEOBlogExamples