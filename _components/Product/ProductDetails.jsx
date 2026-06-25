"use client"
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import IMAGES from "@/public";
import { Button, Card, CloseButton, Tabs } from "@heroui/react";
import { Star, ChevronDown } from "lucide-react";
import SimilarProduct from "@/_components/Product/SimilarProduct";

const colors = [
    IMAGES.prod1,
    IMAGES.prod2,
    IMAGES.prod3,
];

const sizes = ["S", "M", "L", "XL", "XXL"];
const ProductDetails = () => {

    const [open, setOpen] = useState(false);

    const [openRatings, setOpenRatings] = useState(false);

    const [showMore, setShowMore] = useState(false);

    const faqData = [
        {
            category: "General",
            question: "What is included in the product?",
            answer:
                "The product includes accommodation, sightseeing, transportation, and meals as mentioned in the itinerary.",
        },
        {
            category: "Booking",
            question: "How can I book this product?",
            answer:
                "You can book online through our website or contact our support team.",
        },
        {
            category: "Cancellation",
            question: "What is the cancellation policy?",
            answer:
                "Cancellation charges depend on the number of days before departure.",
        },
    ];

    const [selectedColor, setSelectedColor] = useState(2);
    const [selectedSize, setSelectedSize] = useState("");

    const specifications = [
        { label: "Brand", value: "TRIPR" },
        { label: "Type", value: "Round Neck" },
        { label: "Sleeve", value: "Half Sleeve" },
        { label: "Fit", value: "Regular" },
        { label: "Fabric", value: "Cotton Blend" },
        { label: "Pack of", value: "4" },
        { label: "Style Code", value: "TGY-BL-BR-NVRNPLAIND164" },
        { label: "Neck Type", value: "Round Neck" },
        { label: "Ideal For", value: "Men" },
        { label: "Size", value: "XXL" },
        { label: "Pattern", value: "Solid" },
        { label: "Suitable For", value: "Western Wear" },
        { label: "Reversible", value: "No" },
        { label: "Fabric Care", value: "Regular Machine Wash" },
        { label: "Net Quantity", value: "4" },
    ];

    const manufacture = [
        { label: "Generic Name", value: "T Shirts" },
        { label: "Country of Origin", value: "India" },
        { label: "Name and address of the Manufacturer", value: "Chakra Production, 64 Mullai street, Lakshminagar, Tirupur 641602.", fullWidth: true, },
        { label: "Name and address of the Packer", value: "Chakra Production, 64 Mullai street, Lakshminagar, Tirupur 641602.", fullWidth: true, },
    ];

    const galleryImages = [
        IMAGES.prod1,
        IMAGES.prod2,
        IMAGES.prod3,
        IMAGES.prod4,
        IMAGES.prod5,
    ];

    const features = [
        "Fabric Quality",
        "Colour",
        "Style",
        "True to Specs",
        "Stitching Quality",
        "Stretchy",
    ];

    const reviews = [
        {
            name: "Tankadhar Chura",
            rating: 5,
            title: "Super!",
            review: "Nice t-shirt 😎😍 🤩 😋 😘 😘",
            likes: 430,
            dislikes: 117,
            time: "5 years ago",
        },
        {
            name: "Anik Das",
            rating: 5,
            title: "Must buy!",
            review: "Nice...❤️",
            likes: 95,
            dislikes: 12,
            time: "",
        },
    ];

    const visibleData = showMore
        ? specifications
        : specifications.slice(0, 8);



    return (
        <div className="w-[95%]">
            <div className="flex gap-2 justify-between w-[95%]">
                <div className="w-[55%] h-full">
                    <div className="grid grid-cols-2 gap-2">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="relative aspect-3/4">
                                <Image
                                    src={IMAGES.prod1}
                                    alt="product"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-[45%] ml-4">
                    <div>
                        <p className="font-semibold">HIGHLANDER</p>
                        <p>Marvel Men X Men Round Neck Short Sleeve Oversized Drop Shoulder Tshirt</p>
                    </div>
                    <div className="flex gap-2">
                        <span className="font-semibold">4.2</span> <span className="text-green-600">★</span> | 12 Rating
                    </div>
                    <hr className=""></hr>
                    <div className="gap-2">
                        <div className="flex gap-2 justify-baseline items-center w-full">
                            <span className="text-xl font-semibold">₹433</span> MRP<span className="line-through">₹3099</span><span className="text-green-600">86% OFF</span>
                        </div>
                        <p>(Incl. of all taxes)</p>
                    </div>

                    <div className="">
                        Selected Color: <span className="font-semibold">PINK</span>
                        <div>
                            <div className="max-w-md">
                                {/* Color */}
                                <div>
                                    <div className="flex gap-3 mt-4">
                                        {colors.map((img, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setSelectedColor(index)}
                                                className={`relative w-20 h-28 rounded-xl overflow-hidden border-2 transition-all ${selectedColor === index
                                                    ? "border-black"
                                                    : "border-gray-300"
                                                    }`}
                                            >
                                                <Image
                                                    src={img}
                                                    alt={`Color ${index + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Size */}
                                <div className="mt-8">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-xl font-semibold">Select Size</h3>

                                        <button className="text-blue-600 font-medium hover:underline">
                                            Size Chart
                                        </button>
                                    </div>

                                    <div className="flex gap-3 mt-4 flex-wrap">
                                        {sizes.map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`w-8 h-8 rounded-xl border text-lg transition-all ${selectedSize === size
                                                    ? "bg-black text-white border-black"
                                                    : "bg-white text-gray-700 border-gray-300"
                                                    }`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-xl font-semibold mt-2">Delivery Details</p>
                        <div className="border w-56 flex justify-center items-center">
                            <input type="text" className="ml-2 my-2 outline-none focus:outline-none w-36" placeholder="Enter Pincode" /><button className="w-full h-full">Check</button>
                        </div>
                        <p>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                    </div>

                    <div className="mt-4">
                        <hr></hr>
                        <div className="my-2 w-full flex justify-between items-center px-4">
                            <div className="flex justify-center items-center flex-col w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32">
                                    <path d="M0 0h32v32H0z" fill="none" />
                                    <path fill="currentColor" d="M24 21v2h1.748A11.96 11.96 0 0 1 16 28C9.383 28 4 22.617 4 16H2c0 7.72 6.28 14 14 14c4.355 0 8.374-2.001 11-5.345V26h2v-5z" />
                                    <path fill="currentColor" d="m22.505 11.637l-5.989-3.5a1 1 0 0 0-1.008-.001l-6.011 3.5A1 1 0 0 0 9 12.5v7a1 1 0 0 0 .497.864l6.011 3.5A.96.96 0 0 0 16 24c.174 0 .36-.045.516-.137l5.989-3.5A1 1 0 0 0 23 19.5v-7a1 1 0 0 0-.495-.863m-6.494-1.48l4.007 2.343l-4.007 2.342l-4.023-2.342zM11 14.24l4 2.33v4.685l-4-2.33zm6 7.025v-4.683l4-2.338v4.683z" />
                                    <path fill="currentColor" d="M16 2A13.95 13.95 0 0 0 5 7.345V6H3v5h5V9H6.252A11.96 11.96 0 0 1 16 4c6.617 0 12 5.383 12 12h2c0-7.72-6.28-14-14-14" />
                                </svg>
                                <p>10-Day Return</p>
                            </div>

                            <div className="flex justify-center items-center flex-col w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32">
                                    <path d="M0 0h32v32H0z" fill="none" />
                                    <path fill="currentColor" d="M24 21v2h1.748A11.96 11.96 0 0 1 16 28C9.383 28 4 22.617 4 16H2c0 7.72 6.28 14 14 14c4.355 0 8.374-2.001 11-5.345V26h2v-5z" />
                                    <path fill="currentColor" d="m22.505 11.637l-5.989-3.5a1 1 0 0 0-1.008-.001l-6.011 3.5A1 1 0 0 0 9 12.5v7a1 1 0 0 0 .497.864l6.011 3.5A.96.96 0 0 0 16 24c.174 0 .36-.045.516-.137l5.989-3.5A1 1 0 0 0 23 19.5v-7a1 1 0 0 0-.495-.863m-6.494-1.48l4.007 2.343l-4.007 2.342l-4.023-2.342zM11 14.24l4 2.33v4.685l-4-2.33zm6 7.025v-4.683l4-2.338v4.683z" />
                                    <path fill="currentColor" d="M16 2A13.95 13.95 0 0 0 5 7.345V6H3v5h5V9H6.252A11.96 11.96 0 0 1 16 4c6.617 0 12 5.383 12 12h2c0-7.72-6.28-14-14-14" />
                                </svg>
                                <p>No cash on delivery</p>
                            </div>

                            <div className="flex justify-center items-center flex-col w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32">
                                    <path d="M0 0h32v32H0z" fill="none" />
                                    <path fill="currentColor" d="M24 21v2h1.748A11.96 11.96 0 0 1 16 28C9.383 28 4 22.617 4 16H2c0 7.72 6.28 14 14 14c4.355 0 8.374-2.001 11-5.345V26h2v-5z" />
                                    <path fill="currentColor" d="m22.505 11.637l-5.989-3.5a1 1 0 0 0-1.008-.001l-6.011 3.5A1 1 0 0 0 9 12.5v7a1 1 0 0 0 .497.864l6.011 3.5A.96.96 0 0 0 16 24c.174 0 .36-.045.516-.137l5.989-3.5A1 1 0 0 0 23 19.5v-7a1 1 0 0 0-.495-.863m-6.494-1.48l4.007 2.343l-4.007 2.342l-4.023-2.342zM11 14.24l4 2.33v4.685l-4-2.33zm6 7.025v-4.683l4-2.338v4.683z" />
                                    <path fill="currentColor" d="M16 2A13.95 13.95 0 0 0 5 7.345V6H3v5h5V9H6.252A11.96 11.96 0 0 1 16 4c6.617 0 12 5.383 12 12h2c0-7.72-6.28-14-14-14" />
                                </svg>
                                <p>Customer support</p>

                            </div>
                        </div>



                        <hr></hr>
                    </div>





                    <div className="w-full max-w-xl mx-auto overflow-hidden">
                        <button
                            onClick={() => setOpen(!open)}
                            className="flex items-center justify-between w-full py-4 transition-colors"
                        >
                            <div className="flex flex-col items-baseline">
                                <span className="font-medium text-gray-800 text-xl">
                                    All Details
                                </span>
                                {!open ? <span>
                                    Key features, specifications and more
                                </span> : ""

                                }
                            </div>


                            <ChevronDown
                                size={20}
                                className={`transition-transform duration-300 ${open ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-full" : "max-h-0"
                                }`}
                        >
                            <div className="text-gray-600">
                                <Tabs className="w-full max-w-full text-center" variant="secondary">
                                    <Tabs.ListContainer>
                                        <Tabs.List
                                            aria-label="Options"
                                            className="*:data-[selected=true]:text-black *:data-[selected=true]:font-semibold w-full *:h-8 *:w-full *:px-0 *:text-sm *:font-normal"
                                        >
                                            <Tabs.Tab id="daily" className="">Specifications<Tabs.Indicator className="bg-black" /></Tabs.Tab>
                                            <Tabs.Tab id="weekly" className="">Description<Tabs.Indicator className="bg-black" /></Tabs.Tab>
                                            <Tabs.Tab id="bi-weekly" className="">Manufacturer Info<Tabs.Indicator className="bg-black" /></Tabs.Tab>
                                        </Tabs.List>
                                    </Tabs.ListContainer>
                                    <Tabs.Panel className="px-4" id="daily">
                                        <div className="w-full max-w-3xl rounded-lg border border-gray-200 bg-white">
                                            <div className="p-4">
                                                <h2 className="text-lg font-semibold mb-4">General</h2>

                                                <div className="grid grid-cols-2">
                                                    {visibleData.map((item, index) => (
                                                        <div
                                                            key={index}
                                                            className={`border-t p-4 text-center ${item.fullWidth ? "col-span-2" : ""
                                                                }`}
                                                        >
                                                            <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                                                            <p className="text-base text-gray-800">{item.value}</p>
                                                        </div>
                                                    ))}
                                                </div>

                                                {specifications.length > 8 && (
                                                    <div className="flex justify-center mt-4">
                                                        <button
                                                            onClick={() => setShowMore(!showMore)}
                                                            className="flex items-center gap-2 px-5 py-2 border rounded-lg text-sm font-medium hover:bg-gray-50 transition"
                                                        >
                                                            {showMore ? "See Less" : "See More"}

                                                            <svg
                                                                className={`w-4 h-4 transition-transform ${showMore ? "rotate-180" : ""
                                                                    }`}
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M19 9l-7 7-7-7"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </Tabs.Panel>
                                    <Tabs.Panel className="px-4" id="weekly">
                                        <p>Switch up your everyday wardrobe with this trending t-shirt from TRIPR. Ideal to wear for all seasons, this versatile t-shirt features a Plain Round Neck and Half sleeves. Style it with a pair of straight-fit denims and white shoes to complete your outfit. Regular fit. Comfortable essential with Solid pattern</p>
                                    </Tabs.Panel>
                                    <Tabs.Panel className="px-4" id="bi-weekly">
                                        <div className="w-full max-w-3xl rounded-lg border border-gray-200 bg-white">
                                            <div className="p-4">

                                                <div className="grid grid-cols-2">
                                                    {manufacture.map((item, index) => (
                                                        <div
                                                            key={index}
                                                            className={`border-t p-4 text-center ${item.fullWidth ? "col-span-2" : ""
                                                                }`}
                                                        >
                                                            <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                                                            <p className="text-base text-gray-800">{item.value}</p>
                                                        </div>
                                                    ))}
                                                </div>

                                                {manufacture.length > 8 && (
                                                    <div className="flex justify-center mt-4">
                                                        <button
                                                            onClick={() => setShowMore(!showMore)}
                                                            className="flex items-center gap-2 px-5 py-2 border rounded-lg text-sm font-medium hover:bg-gray-50 transition"
                                                        >
                                                            {showMore ? "See Less" : "See More"}

                                                            <svg
                                                                className={`w-4 h-4 transition-transform ${showMore ? "rotate-180" : ""
                                                                    }`}
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M19 9l-7 7-7-7"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </Tabs.Panel>

                                </Tabs>
                            </div>
                        </div>
                    </div>





                    <div className="w-full max-w-xl mx-auto overflow-hidden">
                        <button
                            onClick={() => setOpenRatings(!openRatings)}
                            className="flex items-center justify-between w-full py-4 transition-colors"
                        >
                            <div className="flex flex-col items-baseline">
                                <span className="font-medium text-gray-800 text-xl">
                                    Ratings and Reviews
                                </span>
                                {!openRatings ? <span>
                                    Key features, specifications and more
                                </span> : ""

                                }
                            </div>


                            <ChevronDown
                                size={20}
                                className={`transition-transform duration-300 ${openRatings ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${openRatings ? "max-h-full" : "max-h-0"
                                }`}
                        >
                            <section className="w-full bg-white">
                                {/* Image Gallery */}
                                <div className="grid grid-cols-[2fr_1fr_1fr] gap-2">
                                    <div className="relative h-64 overflow-hidden rounded-xl">
                                        <Image
                                            src={galleryImages[0]}
                                            alt="Customer"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <div className="relative h-[126px] overflow-hidden rounded-xl">
                                            <Image
                                                src={galleryImages[1]}
                                                alt="Customer"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="relative h-[126px] overflow-hidden rounded-xl">
                                            <Image
                                                src={galleryImages[2]}
                                                alt="Customer"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid gap-2">
                                        <div className="relative h-[126px] overflow-hidden rounded-xl">
                                            <Image
                                                src={galleryImages[3]}
                                                alt="Customer"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="relative h-[126px] overflow-hidden rounded-xl">
                                            <Image
                                                src={galleryImages[4]}
                                                alt="Customer"
                                                fill
                                                className="object-cover"
                                            />

                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-bold text-3xl">
                                                +554
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="mt-5">
                                    <h3 className="text-xl font-medium text-gray-700 mb-4">
                                        Features customers loved
                                    </h3>

                                    <div className="flex flex-wrap gap-3">
                                        {features.map((item) => (
                                            <span
                                                key={item}
                                                className="px-4 py-2 bg-slate-100 rounded-xl text-gray-700"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Reviews */}
                                <div className="grid md:grid-cols-2 gap-4 mt-6">
                                    {reviews.map((review, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-100 rounded-2xl p-4"
                                        >
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-2">
                                                    <span className="bg-white px-2 py-1 rounded-md text-sm font-semibold">
                                                        {review.rating} ⭐
                                                    </span>

                                                    <h4 className="font-semibold text-xl">
                                                        {review.title}
                                                    </h4>
                                                </div>

                                                {review.time && (
                                                    <span className="text-gray-500 text-sm">
                                                        {review.time}
                                                    </span>
                                                )}
                                            </div>

                                            <p className="mt-3 text-lg text-gray-700">
                                                {review.review}
                                            </p>

                                            <div className="flex justify-between items-end mt-6">
                                                <div>
                                                    <p className="font-medium">{review.name}</p>

                                                    <p className="text-gray-500 text-sm">
                                                        ✓ Verified Buyer
                                                    </p>
                                                </div>

                                                <div className="flex gap-4 text-gray-500">
                                                    <span>👍 {review.likes}</span>
                                                    <span>👎 {review.dislikes}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="w-full">
                                    <button type="button" name="showReviews" className="w-full bg-amber-50 p-2 mt-3 border">Show all reviews</button>
                                </div>
                            </section>
                        </div>
                    </div>



                </div>

                
            </div>
            <SimilarProduct />
        </div>

    )
}

export default ProductDetails