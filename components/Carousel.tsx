"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import React, { useRef, useState } from 'react';
import Card from './Card';

type Riddle = {
    title: string;
    question: string;
    proTips: string | undefined | null;
};

type Props = {
    riddles: Riddle[];
};

export default function Carousel({ riddles }: Props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<any>(null);

    const handleNext = () => {
        swiperRef.current?.slideNext();
    };

    const handlePrev = () => {
        swiperRef.current?.slidePrev();
    };

    return (
    <div className="flex flex-col w-full relative gap-y-6">
        <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{
            clickable: true,
            el: ".swiper-pagination",
            renderBullet(index, className) {
                return `<div class="${className}">Y</div>`;
            },
            }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            modules={[Pagination]}
            className="flex w-full h-full"
        >
            {riddles.map((item, index) => (
            <SwiperSlide key={index} className="flex w-full justify-start items-start">
                <Card
                title={item.title}
                content={`"${item.question}"`}
                proTipsContent={item.proTips}
                cardClassName=""
                />
            </SwiperSlide>
            ))}
        </Swiper>

        <div className="flex justify-between w-full gap-x-6">
            <button
                onClick={handlePrev}
                className="px-4 py-2 w-full bg-transparent text-white border border-neutral-600 rounded-lg shadow-md font-semibold"
            >
                Previous
            </button>
            <div className="w-full flex gap-4 justify-center mt-4">
                {riddles.map((_, index) => (
                <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                    activeIndex === index ? 'bg-white' : 'bg-white/40'
                    }`}
                />
                ))}
            </div>

            <button
                onClick={handleNext}
                className="px-4 py-2 w-full bg-transparent text-white border border-neutral-600 rounded-lg shadow-md font-semibold"
            >
                Next
            </button>
        </div>
    </div>
    );
}
