"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IMAGES from "@/public";
import Link from "next/link";
import { X, Menu, ChevronDown, ChevronUp, Search, ShoppingCart, Heart, User } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react"
import { usePathname } from 'next/navigation';
import { Label, SearchField } from "@heroui/react";


const Navbar = () => {

  const router = useRouter();

  const [loginFlag, setLoginFlag] = useState(false);

  const [open, setOpen] = useState(false);

  const closeNavbar = () => setOpen(false);

  useEffect(() => {
    console.log("Close::::::::>>>", open)


  }, [open])


  return (

    <>
      <nav className="hidden bg-white border-b sticky top-0 z-50 w-full lg:block">
        <div className="flex items-center font-medium justify-between w-[95%] mx-auto">
          <div className="z-50 p-5 lg:w-auto w-full flex justify-between bg-white lg:bg-transparent">
            <div onClick={() => {
              router.push(`/`);
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            }} className="flex items-end relative lg:w-25 cursor-pointer">
              <Image alt="alvoralogo" src={IMAGES.alvora} width={100} height={100} className="h-full w-full" />
            </div>
          </div>

          <div className="flex gap-6 items-center">
            <div
              className={``}
            >
              <SearchField name="search">
                {/* <Label>Search</Label> */}
                <SearchField.Group>
                  <SearchField.SearchIcon />
                  <SearchField.Input className="w-70" placeholder="Search..." />
                  <SearchField.ClearButton />
                </SearchField.Group>
              </SearchField>
            </div>
            <div className="relative">

              <p
                onMouseEnter={() => {
                  setLoginFlag(true);
                }}
                onMouseLeave={() => {
                  setLoginFlag(false);
                }}
                className="flex flex-col justify-center items-center"
              >
                <User className="size-5" />
                <span className="flex ml-2 text-sm">
                  Login
                  {loginFlag ? (
                    <ChevronUp className="transition-transform duration-200 size-4 mt-1" />
                  ) : (
                    <ChevronDown className="transition-transform duration-200 size-4 mt-1" />
                  )}
                </span>
              </p>



              <AnimatePresence>
                {loginFlag && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-13 right-0 mt-3 w-[320px] rounded-lg bg-white shadow-md border z-50"
                    onMouseEnter={() => setLoginFlag(true)}
                    onMouseLeave={() => setLoginFlag(false)}
                  >
                    <div className="p-6">
                      <h3 className="font-semibold text-lg">Welcome</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        To access account and manage orders
                      </p>

                      <button
                        className="mt-4 w-full border border-pink-500 text-pink-500 font-semibold py-3 hover:bg-pink-50 transition"
                        onClick={() => router.push("/login")}
                      >
                        LOGIN / SIGNUP
                      </button>
                    </div>

                    <hr />

                    <div className="px-6 py-4">
                      <ul className="space-y-2 text-gray-700">
                        <li className="hover:text-black cursor-pointer">Orders</li>
                        <li className="hover:text-black cursor-pointer">Wishlist</li>
                        <li className="hover:text-black cursor-pointer">Gift Cards</li>
                        <li className="hover:text-black cursor-pointer">Contact Us</li>

                        <li className="flex items-center gap-2 hover:text-black cursor-pointer">
                          Myntra Insider
                          <span className="bg-pink-500 text-white text-[10px] px-2 py-0.5 rounded">
                            NEW
                          </span>
                        </li>
                      </ul>
                    </div>

                    <hr />

                    <div className="px-6 py-4">
                      <ul className="space-y-2 text-gray-700">
                        <li className="hover:text-black cursor-pointer">Credit</li>
                        <li className="hover:text-black cursor-pointer">Coupons</li>
                        <li className="hover:text-black cursor-pointer">Saved Cards</li>
                        <li className="hover:text-black cursor-pointer">Saved UPI</li>
                        <li className="hover:text-black cursor-pointer">Saved Addresses</li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex flex-col justify-center items-center text-sm">
              <Heart className="size-5" /> Wishlist
            </div>
            <div className="flex flex-col justify-center items-center text-sm">
              <ShoppingCart className="size-5" /> Cart
            </div>
          </div>

        </div>
      </nav><nav className="block bg-white border-b sticky top-0 z-50 w-full lg:hidden">
        <div className="flex items-center font-medium justify-between w-[95%] mx-auto">
          <div className="z-50 p-5 w-full flex justify-between bg-white">
            <div
              onClick={() => {
                router.push("/");
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              }}
              className="relative w-24 h-auto cursor-pointer"
            >
              <Image
                alt="alvoralogo"
                src={IMAGES.alvora}
                width={100}
                height={100}
                className="w-full h-auto object-contain" />
            </div>
          </div>

          <div className="flex gap-6 items-center">
            <div
              className={``}
            >
              <SearchField name="search">
                <SearchField.Group>
                  <SearchField.SearchIcon />
                  <SearchField.Input className="w-24" placeholder="Search..." />
                  <SearchField.ClearButton />
                </SearchField.Group>
              </SearchField>
            </div>


            <div className="flex gap-5 items-center justify-center">
              <div className="text-3xl z-50" onClick={() => setOpen(!open)}>
                {open ? <X /> : <Menu />}
              </div>
            </div>

            <ul
              className={`
                  fixed top-0 left-0 w-full h-screen
                  bg-white z-30
                  overflow-y-auto
                  py-24 px-4
                  transition-all duration-500
                  ${open ? "translate-x-0" : "-translate-x-full"}
              `}
            >
              <li className="py-4 border-b">Home</li>
              <li className="py-4 border-b">Men</li>
              <li className="py-4 border-b">Women</li>
              <li className="py-4 border-b">Contact</li>

              <div className="mt-6">
                <div className="bg-themeColor text-white rounded-full px-6 py-4 flex justify-center">
                  <button
                    className="flex gap-3 items-center"
                    onClick={() => router.push(`/filterpage/ALL`)}
                  >
                    Get Started
                    <ArrowRight strokeWidth={3} />
                  </button>
                </div>
              </div>
            </ul>

          </div>

        </div>
      </nav>
    </>

  );
}


export default Navbar