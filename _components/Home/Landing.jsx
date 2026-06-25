'use client'
import React from 'react'
import { Button } from '@heroui/react';
import CategoriesTab from '@/_components/Home/CategoriesTab';

const Landing = (props) => {
    return (
        <div className="w-full">
            <CategoriesTab />
        </div>
    )
}

export default Landing