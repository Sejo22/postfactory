import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../styles/globals.css'
import MainLayout from '@/components/MainLayout';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>PostFactory - Premium Social Media Management Services</title>
                <meta name="description" content="Revolutionize your online presence with our premium social media management services, starting at just $89.99/month!" />
            </Head>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>

        </>
    );
}

export default MyApp;
