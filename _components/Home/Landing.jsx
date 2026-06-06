'use client'
import React from 'react'
import { Button } from '@heroui/react';

const Landing = (props) => {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <Button variant="secondary">
                My Button
            </Button>
        </div>
    )
}

export default Landing