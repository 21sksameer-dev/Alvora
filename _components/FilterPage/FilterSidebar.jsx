"use client";

import { ChevronDown } from "lucide-react";

const filters = [
    "Gender",
    "Brand",
    "Color",
    "Fabric",
    "Type",
    "Fit",
    "Pattern",
    "Occasion",
];
const FilterSidebar = () => {
    return (
        <aside className="w-70 border-r min-h-screen hidden lg:block">
            <div className="p-5 border-b">
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-lg">Filters</h2>
                    <button className="text-blue-600 text-sm">
                        CLEAR ALL
                    </button>
                </div>

                <div className="mt-4">
                    <span className="bg-gray-100 px-3 py-2 rounded text-sm inline-block">
                        ✕ New Arrivals
                    </span>
                </div>
            </div>

            <div className="p-5 border-b">
                <h3 className="font-semibold mb-4">CATEGORIES</h3>

                <ul className="space-y-2 text-gray-700">
                    <li>Clothing & Accessories</li>

                    <li className="font-medium">
                        ▼ Topwear
                        <ul className="ml-5 mt-2 space-y-2">
                            <li>Shirts</li>
                            <li>T-Shirts</li>
                        </ul>
                    </li>
                </ul>
            </div>

            {filters.map((item) => (
                <div
                    key={item}
                    className="border-b px-5 py-4 flex items-center justify-between cursor-pointer"
                >
                    <span className="font-medium">{item}</span>
                    <ChevronDown size={18} />
                </div>
            ))}
        </aside>
    )
}

export default FilterSidebar