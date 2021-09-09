import Head from 'next/head';
import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import MainBanner from '@components/home/MainBanner';
import { Fragment } from 'react';
import PopularCourses from '@components/home/PopularCourses';
import SloganArea from '@components/home/SloganArea';
import FeedbackSlider from '@components/home/FeedbackSlider';
import Features from '@components/home/Features';
import BlogLevel from '../components/home/BlogLevel';
// import BlogLevel from '@components/home/BlogLevel';

export default function Home() {
    return (
        <div>
            <Head>
                <title>My page title</title>
            </Head>
            <MainBanner />
            <SloganArea />
            <PopularCourses />
            <FeedbackSlider />
            <Features />
            <BlogLevel />
        </div>
    );
}
