"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Link from "next/link";
import { Button } from "@heroui/react";

const slides = [
    {
        id: 1,
        title: "Find The Right Lawyer For Your Case",
        description:
            "Connect with verified lawyers specializing in criminal, family, corporate, and immigration law.",
        image:
            "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
    },
    {
        id: 2,
        title: "Trusted Legal Professionals",
        description:
            "Hire experienced attorneys and get expert legal advice with confidence.",
        image:
            "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab",
    },
    {
        id: 3,
        title: "Legal Help Made Simple",
        description:
            "Search, compare, and hire lawyers from anywhere in just a few clicks.",
        image:
            "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    },
];

export default function Banner() {
    return (
        <section>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="relative h-[650px]"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/60" />

                            {/* Content */}
                            <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4">
                                <div className="max-w-3xl text-white">
                                    <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-yellow-400">
                                        Trusted Legal Support
                                    </p>

                                    <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                                        {slide.title}
                                    </h1>

                                    <p className="mb-8 text-lg text-gray-200">
                                        {slide.description}
                                    </p>

                                    <div className="flex flex-wrap gap-4">
                                        <Button
                                            as={Link}
                                            href="/lawyers"
                                            color="primary"
                                            size="lg"
                                        >
                                            Find Lawyers
                                        </Button>

                                        <Button
                                            as={Link}
                                            href="/register"
                                            variant="bordered"
                                            size="lg"
                                            className="border-white text-white"
                                        >
                                            Get Started
                                        </Button>
                                    </div>

                                    {/* Stats */}
                                    <div className="mt-12 flex flex-wrap gap-8">
                                        <div>
                                            <h3 className="text-3xl font-bold">10K+</h3>
                                            <p className="text-gray-300">Verified Lawyers</p>
                                        </div>

                                        <div>
                                            <h3 className="text-3xl font-bold">25K+</h3>
                                            <p className="text-gray-300">Cases Resolved</p>
                                        </div>

                                        <div>
                                            <h3 className="text-3xl font-bold">98%</h3>
                                            <p className="text-gray-300">Client Satisfaction</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}