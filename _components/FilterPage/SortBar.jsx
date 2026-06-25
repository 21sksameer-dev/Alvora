"use client";

import React from 'react'
const sorts = [
    "Popularity",
    "Price -- Low to High",
    "Price -- High to Low",
    "Newest First",
];
const SortBar = () => {
    return (
        <div className="flex flex-wrap gap-6 items-center border-b pb-4">
            <span className="font-semibold">
                Sort By
            </span>

            {sorts.map((sort, index) => (
                <button
                    key={sort}
                    className={`text-sm ${index === 0
                            ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                            : "text-gray-700"
                        }`}
                >
                    {sort}
                </button>
            ))}
        </div>
    )
}

export default SortBar