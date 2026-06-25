"use client";

import FilterSidebar from "@/_components/FilterPage/FilterSidebar";
import ProductCardFilter from "@/_components/FilterPage/ProductCardFilter";
import SortBar from "@/_components/FilterPage/SortBar";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    brand: "PAM",
    title: "Men Striped Polo T-Shirt",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    price: 324,
    oldPrice: 999,
    discount: 67,
  },
  {
    id: 2,
    brand: "FastColors",
    title: "Men Printed Round Neck",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    price: 254,
    oldPrice: 1799,
    discount: 85,
  },
  {
    id: 3,
    brand: "Warrior World",
    title: "Wild Hunt Graphic Tee",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    price: 357,
    oldPrice: 1499,
    discount: 76,
  },
  {
    id: 4,
    brand: "Crazybee",
    title: "Men Printed Oversized T-Shirt",
    image: "https://images.unsplash.com/photo-1521119989659-a83eee488004",
    price: 276,
    oldPrice: 999,
    discount: 72,
  },
];

const page = () => {
  const params = useParams();

  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    if (params?.slug) {
      const decoded = params.slug.map((item) =>
        decodeURIComponent(item)
      );

      setBreadcrumbs(decoded);

      console.log("All Segments:", decoded);
    }
  }, [params]);

  return (
  <div className="bg-white min-h-screen">
      <div className="max-w-400 mx-auto flex">
        <FilterSidebar />

        <div className="flex-1 p-6">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-3">
            Home &gt; Clothing &gt; Topwear
          </div>

          {/* Heading */}
          <div className="mb-4">
            <h1 className="text-2xl font-semibold">
              Men's Clothing
              <span className="text-gray-500 text-base ml-2">
                (Showing 1-40 products)
              </span>
            </h1>
          </div>

          <SortBar />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {products.concat(products, products).map((item, index) => (
              <ProductCardFilter key={index} product={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Compare Button */}
      <div className="fixed bottom-5 right-5 z-50">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium shadow-lg">
          COMPARE (1)
        </button>
      </div>
    </div>
  );
}

export default page