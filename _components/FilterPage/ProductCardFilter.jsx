"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import React from 'react'

const ProductCardFilter = ({ product }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={600}
          className="w-full h-87.5 object-cover transition duration-500 group-hover:scale-105"
        />

        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
          <Heart size={18} />
        </button>
      </div>

      <div className="mt-3">
        <p className="text-gray-500 text-sm">
          Sponsored
        </p>

        <h3 className="font-semibold">
          {product.brand}
        </h3>

        <p className="text-gray-600 truncate">
          {product.title}
        </p>

        <div className="flex items-center gap-2 mt-2">
          <span className="font-bold text-lg">
            ₹{product.price}
          </span>

          <span className="line-through text-gray-400">
            ₹{product.oldPrice}
          </span>

          <span className="text-green-600 font-medium">
            {product.discount}% off
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductCardFilter