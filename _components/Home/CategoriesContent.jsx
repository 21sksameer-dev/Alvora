'use client'
import { Button, Card, CloseButton } from "@heroui/react";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { DotIcon } from "lucide-react";
import "@/_components/Carousel.css";
import IMAGES from "@/public";
import { useRouter } from "next/navigation";

const CategoriesContent = () => {

    const demoTours = [
        {
            image: "/images/goa.jpg",
            region: "Goa",
            highlight: "Beach Paradise",
            destinations: ["Calangute", "Baga", "Anjuna"],
            days: "4 Days / 3 Nights",
            price: "₹12,999",
        },
        {
            image: "/images/kashmir.jpg",
            region: "Kashmir",
            highlight: "Heaven on Earth",
            destinations: ["Srinagar", "Gulmarg", "Pahalgam"],
            days: "6 Days / 5 Nights",
            price: "₹24,999",
        },
        {
            image: "/images/kerala.jpg",
            region: "Kerala",
            highlight: "God's Own Country",
            destinations: ["Munnar", "Thekkady", "Alleppey"],
            days: "5 Days / 4 Nights",
            price: "₹18,999",
        },
    ];

    return (
        <div>
            <Card className="w-full items-stretch md:flex-row">
                <div className="relative h-35 w-full shrink-0 overflow-hidden rounded-2xl sm:h-30 sm:w-30">
                    <img
                        alt="Cherries"
                        className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
                        loading="lazy"
                        src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/cherries.jpeg"
                    />
                </div>
                <div className="flex flex-1 flex-col gap-3">
                    <Card.Header className="gap-1">
                        <Card.Title className="pr-8">Become an ACME Creator!</Card.Title>
                        <Card.Description>
                            Lorem ipsum dolor sit amet consectetur. Sed arcu donec id aliquam dolor sed amet
                            faucibus etiam.
                        </Card.Description>
                        <CloseButton aria-label="Close banner" className="absolute top-3 right-3" />
                    </Card.Header>
                    <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-foreground">Only 10 spots</span>
                            <span className="text-xs text-muted">Submission ends Oct 10.</span>
                        </div>
                        <Button className="w-full sm:w-auto">Apply Now</Button>
                    </Card.Footer>
                </div>
            </Card>


            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={true}
                navigation={false}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper w-full"
                style={{
                    "--swiper-navigation-size": "10px",
                }}
            >
                {demoTours.map((tour, index) => (
                    <SwiperSlide key={index} className="relative">
                        <div className="relative w-full h-72 md:h-[400px] rounded-3xl overflow-hidden">
                            <Image
                                src={tour.image}
                                alt={tour.highlight}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="absolute inset-0 bg-black/40 rounded-3xl flex items-center">
                            <div className="m-5 lg:m-12 w-full h-full flex flex-col justify-evenly items-start">
                                <div className="pl-4 border-l-4 border-white">
                                    <span className="text-lg lg:text-xl text-white font-bold">
                                        {tour.region}
                                    </span>

                                    <h2 className="text-2xl lg:text-4xl text-white font-bold">
                                        {tour.highlight}
                                    </h2>
                                </div>

                                <div className="flex flex-col gap-2 lg:gap-5">
                                    <div className="flex gap-x-2 lg:gap-x-5 items-center flex-wrap">
                                        {tour.destinations.map((destination, i) => (
                                            <div key={i} className="flex items-center">
                                                <p className="lg:text-xl text-blue-200 font-medium">
                                                    {destination}
                                                </p>

                                                {i < tour.destinations.length - 1 && (
                                                    <DotIcon className="text-white mx-1 lg:mx-2" />
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    <p className="lg:text-xl text-white font-medium">
                                        {tour.days} | {tour.price}
                                    </p>
                                </div>

                                <button
                                    className="bg-white px-4 py-3 rounded-xl font-bold text-gray-600"
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CategoriesContent