'use client'
import { Button, Card, CloseButton } from "@heroui/react";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { DotIcon, CircleArrowRight } from "lucide-react";
import "@/_components/Carousel.css";
import IMAGES from "@/public";
import { useRouter } from "next/navigation";

const CategoriesContent = () => {

    const demoTours = [
        {
            image: IMAGES.p1,
            region: "Goa",
            highlight: "Beach Paradise",
            destinations: ["Calangute", "Baga", "Anjuna"],
            days: "4 Days / 3 Nights",
            price: "₹12,999",
        },
        {
            image: IMAGES.p2,
            region: "Kashmir",
            highlight: "Heaven on Earth",
            destinations: ["Srinagar", "Gulmarg", "Pahalgam"],
            days: "6 Days / 5 Nights",
            price: "₹24,999",
        },
        {
            image: IMAGES.p3,
            region: "Kerala",
            highlight: "God's Own Country",
            destinations: ["Munnar", "Thekkady", "Alleppey"],
            days: "5 Days / 4 Nights",
            price: "₹18,999",
        },
        {
            image: IMAGES.p4,
            region: "Kerala",
            highlight: "God's Own Country",
            destinations: ["Munnar", "Thekkady", "Alleppey"],
            days: "5 Days / 4 Nights",
            price: "₹18,999",
        },
    ];



    const categories = [
        "Tshirts",
        "Shirts",
        "Hoodies",
        "Caps",
        "Bags",
        "Tshirts",
        "Shirts",
        "Hoodies",
        "Caps",
        "Bags",
        "Tshirts",
        "Shirts",
        "Hoodies",
        "Caps",
        "Bags",
        "Tshirts",
        "Shirts",
        "Hoodies",
        "Caps",
        "Bags",
        "Tshirts",

    ];


    const products = [
        {
            id: 1,
            name: "Garnier Men Oil Clear Deep Cleansing Face Wash (150 g)",
            image: IMAGES.pd1,
            rating: 4.5,
            price: 739,
            originalPrice: 2499,
            offer: "₹702 with Bank offer + more",
        },
        {
            id: 2,
            name: "Nivea Men Face Wash (100 g)",
            image: IMAGES.pd2,
            rating: 4.3,
            price: 299,
            originalPrice: 499,
            offer: "₹280 with Bank offer + more",
        },
        {
            id: 3,
            name: "Beardo Activated Charcoal Face Wash",
            image: IMAGES.pd3,
            rating: 4.6,
            price: 349,
            originalPrice: 599,
            offer: "₹330 with Bank offer + more",
        },
        {
            id: 4,
            name: "Garnier Men Oil Clear Deep Cleansing Face Wash (150 g)",
            image: IMAGES.pd1,
            rating: 4.5,
            price: 739,
            originalPrice: 2499,
            offer: "₹702 with Bank offer + more",
        },
        {
            id: 5,
            name: "Nivea Men Face Wash (100 g)",
            image: IMAGES.pd2,
            rating: 4.3,
            price: 299,
            originalPrice: 499,
            offer: "₹280 with Bank offer + more",
        },
    ];

    return (
        <div className="flex flex-col gap-6">

            <div>
                <Card className="w-auto h-26 lg:w-full lg:h-75 overflow-hidden relative">
                    <Image
                        src={IMAGES.pamplet1}
                        alt="pamplet"
                        fill
                        className="lg:object-cover"
                    />
                </Card>
            </div>


            <div>
                <Swiper
                    breakpoints={{
                        640: {
                            slidesPerView: 1.5,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 2.5,
                            spaceBetween: 30,
                        },
                        1280: {
                            slidesPerView: 2.5,
                            spaceBetween: 30,
                        },
                    }}
                    spaceBetween={32}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={true}
                    navigation={false}
                    modules={[Pagination, Navigation]}
                    className="mySwiperGuest w-full h-80"
                    style={{
                        "--swiper-navigation-size": "10px",
                    }}
                >
                    {demoTours.map((tour, index) => (
                        <SwiperSlide key={index} className="relative">
                            <div className="w-full h-full overflow-hidden relative rounded-3xl">
                                <Image
                                    src={tour.image}
                                    alt={tour.highlight}
                                    fill
                                    className="object-fit"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="flex gap-5 flex-wrap gap-y-1">
                {categories.map((item, index) => (
                    <div key={index} className="w-24">
                        <Card className="w-8 h-8 lg:w-24 lg:h-24 overflow-hidden relative rounded-xl">
                            <Image
                                src={IMAGES.c1}
                                alt={item}
                                fill
                                className="object-cover"
                            />
                        </Card>
                        <p className="text-[12px] mt-1 font-semibold">{item}</p>
                    </div>
                ))}

            </div>


            <div className="w-full justify-items-start mt-2">
                <div className="flex w-full justify-between">
                    <p className="text-2xl font-semibold">Suggested For You</p>
                    <span><CircleArrowRight className="text-blue size-8" /></span>
                </div>


                <div className="flex flex-wrap gap-4">
                    {products.map((product) => (
                        <div className="w-44 lg:w-64" key={product.id}>
                            <Card className="h-85 lg:h-112.5 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col">

                                {/* Product Image */}
                                <div className="relative w-full h-40 lg:h-56 bg-gray-100 shrink-0">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-scale-down"
                                    />

                                    <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded-md flex items-center gap-1 text-xs font-semibold shadow">
                                        {product.rating}
                                        <span className="text-green-600">★</span>
                                    </div>
                                </div>

                                {/* Product Details */}
                                <div className="p-3 flex flex-col flex-1">
                                    <h3 className="text-sm font-medium line-clamp-2 min-h-10">
                                        {product.name}
                                    </h3>

                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="text-lg font-bold text-black">
                                            ₹{product.price}
                                        </span>
                                        <span className="text-sm text-gray-400 line-through">
                                            ₹{product.originalPrice}
                                        </span>
                                    </div>

                                    <p className="text-sm text-blue-600 mt-1">
                                        {product.offer}
                                    </p>

                                    {/* Push bottom content to bottom */}
                                    <div className="mt-auto pt-3">
                                        <button className="w-full py-2 rounded-lg bg-black text-white text-sm">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>


            </div>









            <div>
                <Swiper
                    breakpoints={{
                        640: {
                            slidesPerView: 1.5,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 2.5,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 2.5,
                            spaceBetween: 30,
                        },
                        1280: {
                            slidesPerView: 2.5,
                            spaceBetween: 30,
                        },
                    }}
                    spaceBetween={32}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={true}
                    navigation={false}
                    modules={[Pagination, Navigation]}
                    className="mySwiperGuest w-full h-64"
                    style={{
                        "--swiper-navigation-size": "10px",
                    }}
                >
                    {demoTours.map((tour, index) => (
                        <SwiperSlide key={index} className="relative">
                            <div className="w-full h-full overflow-hidden relative rounded-3xl">
                                <Image
                                    src={tour.image}
                                    alt={tour.highlight}
                                    fill
                                    className="object-fit"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    )
}

export default CategoriesContent