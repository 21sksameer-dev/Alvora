'use client'
import React, { useState, useEffect } from "react";
import IMAGES from "@/public";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center w-full h-full border-t-2 mt-8 bg-black text-white">
                <div className="grid grid-rows-3 lg:h-80 lg:grid-cols-3 w-full p-5 lg:p-16 lg:gap-8">
                    <div className="flex flex-col gap-4">
                        <div>
                            <Image
                                alt="alvoralogo" src={IMAGES.alvora} width={100} height={100} className="h-16 w-26"
                            />
                        </div>
                        <div>We are here to assist you and answer your inquiries promptly. You can get in touch with Alvora using the following contact details:</div>
                        <div className="flex gap-4">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
                            </svg>
                            </span>

                            <span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
                            </svg>
                            </span>

                            <span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="currentColor" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73" />
                            </svg>
                            </span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <h3 className="font-semibold mb-4 text-2xl">General</h3>
                                <ul className="space-y-1 text-gray-600 flex flex-col">
                                    
                                        <Link  href={`https://google.com`} className="text-white">
                                            Home
                                        </Link>
                                        <Link  href={`https://google.com`} className="text-white">
                                            Products
                                        </Link>
                                        <Link  href={`https://google.com`} className="text-white">
                                            Services
                                        </Link>
                                        <Link  href={`https://google.com`} className="text-white">
                                            Contacts
                                        </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold text-2xl">Contact</p>
                            <p className="">Feel free to contact</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-1">
                                <Phone /> <p>+91 7738527031 / +91 9082258569 (For reservations and inquiries)</p>
                            </div>
                            <div className="flex gap-1">
                                <MapPin /> <p>Aamraa Resort, Near Bankarphata, Junnar, Maharashtra, India.</p>
                            </div>
                            <div className="flex gap-1">
                                <Mail /><p>aamraaresort@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="lg:hidden flex flex-col justify-center items-center w-full h-full border-t-2 mt-8 bg-black text-white">
                <div className="grid grid-cols-3">
                    <div>
                        <div>Logo</div>
                        <div>description</div>
                        <div>contact linksssss</div>
                    </div>
                    <div>
                        <div>General Links</div>
                    </div>
                    <div>
                        <div>Contact us</div>
                    </div>
                </div>
            </div> */}
        </div>

    );
}

export default Footer