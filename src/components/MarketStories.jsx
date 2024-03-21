"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import storyImg from "@/assets/story.jpg"

const MarketStories = () => {
    const [marketData, setMarketData] = useState({});

    // fetch dummy data
    useEffect(() => {
        fetch('/marketData.json')
            .then((response) => response.json())
            .then((json) => setMarketData(json));
    }, [])

    return (
        <div>
            <button className="hidden lg:block text-lg lg:text-xl xl:text-2xl text-red-700 font-semibold uppercase px-4 xl:px-6 py-2 xl:py-4 rounded-md bg-gray-300">
                Market Stories
            </button>
            <div className='flex flex-col gap-7 mt-6'>
                {
                    marketData.marketStories?.map((story, idx) => (
                        <div key={idx} className='cursor-pointer'>                        
                                <Image src={storyImg } className='h-48 w-full' alt='story image'></Image>
                                <div className='p-3'>
                                    <h3 className='font-semibold text-lg'>{story.title}</h3>
                                    <p className='mt-4 text-justify'>{story.details.slice(0,100)}...</p>
                                </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MarketStories;