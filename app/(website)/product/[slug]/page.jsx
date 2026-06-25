"use client"
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductDetails from "@/_components/Product/ProductDetails";


const page = () => {

    const params = useParams();

    const [product_id, setproductId] = useState(decodeURIComponent(params.slug));

    console.log("product_id>>>>>>>>", product_id)

    useEffect(() => {
        if (params.slug) {
            const decodevalue = decodeURIComponent(params.slug);
            setproductId(decodevalue)
        }
    }, [params.slug])

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="my-2 items-start w-[95%]">
                Home / Clothing / T shirts
            </div>
            <ProductDetails/ >
        </div>
    );
}
export default page