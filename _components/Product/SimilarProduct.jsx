"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import IMAGES from "@/public";
import { Button, Card, CloseButton, Tabs } from "@heroui/react";
import { DotIcon, CircleArrowRight } from "lucide-react";

const SimilarProduct = () => {

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
    <div className="mt-4">
      <div className="flex w-full justify-between">
                    <p className="text-2xl font-semibold">Similar Products</p>
                    <span><CircleArrowRight className="text-blue size-8" /></span>
                </div>
      <div>
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
                      Show Details
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SimilarProduct