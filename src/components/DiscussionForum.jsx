"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

// import icons
import userIcon from "@/assets/userIcon.png"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const DiscussionForum = () => {

    const [marketData, setMarketData] = useState({});

    // fetch dummy data
    useEffect(() => {
        fetch('/marketData.json')
            .then((response) => response.json())
            .then((json) => setMarketData(json));
    }, [])

    // formate number to k
    const formatNumberToK = (number) => {
        if (number >= 1000) {
            return (number / 1000).toFixed(1) + 'k';
        }
        return number.toString();
    }

    // calculate time ago
    const timeAgo = (dateString) => {
        const currentDate = new Date();
        const previousDate = new Date(dateString);
        const timeDifference = currentDate.getTime() - previousDate.getTime();
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) {
            return days === 1 ? "1 day ago" : `${days} days ago`;
        } else if (hours > 0) {
            return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
        } else if (minutes > 0) {
            return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
        } else {
            return seconds === 1 ? "1 second ago" : `${seconds} seconds ago`;
        }
    }

    return (
        <div>
            <button className="hidden lg:block text-lg lg:text-xl xl:text-2xl text-red-700 font-semibold uppercase px-4 xl:px-6 py-2 xl:py-4 rounded-md bg-gray-300">
                Discussion Forum
            </button>
            <div className='flex flex-col gap-5 mt-6 w-full'>
                {
                    marketData.discussionForum?.map((data, idx) => (
                        <div key={idx} className="p-3 lg:p-5 rounded-xl shadow-lg flex gap-1 lg:gap-3">
                            <div>
                                {
                                    data.image ?
                                        <Image src={data.image} className="w-10 h-10 lg:h-14 lg:w-14 rounded-full border-2 border-black" alt="user"></Image>
                                        :
                                        <Image src={userIcon} className="w-10 h-10 lg:h-14 lg:w-14 rounded-full border-2 border-black" alt="user"></Image>
                                }
                            </div>
                            <div className="flex-1 flex justify-between mt-2 lg:mt-3">
                                <div className="space-y-1 lg:space-y-3 w-full lg:w-4/5 ">
                                    <div className="flex justify-between">
                                        <div className='flex items-center gap-1 lg:gap-3'>
                                            <h3 className="lg:text-xl font-semibold">{data.name}</h3>
                                            <p className="text-sm lg:text-base px-2 lg:px-4 py-1 rounded-xl lg:rounded-3xl bg-blue-950 text-white">Sector 2</p>
                                        </div>
                                        <p className='block lg:hidden text-sm text-blue-950 font-semibold'>{timeAgo(data.postedOn)}</p>
                                    </div>
                                    <p className="text-sm lg:text-lg">{data.title}</p>
                                    <div className="flex justify-between text-sm">
                                        <button className="flex gap-1 items-center lg:px-2 lg:py-1 rounded hover:bg-gray-300"><FavoriteBorderIcon className='text-sm lg:text-base' /> <p>{formatNumberToK(data.watchlist)}</p></button>
                                        <button className="flex gap-1 items-center lg:px-2 lg:py-1 rounded hover:bg-gray-300"><VisibilityOutlinedIcon className='text-sm lg:text-base' /> <p>{formatNumberToK(data.view)}</p></button>
                                        <button className="flex gap-1 items-center lg:px-2 lg:py-1 rounded hover:bg-gray-300"><ModeCommentOutlinedIcon className='text-sm lg:text-base' /> <p>{formatNumberToK(data.comments)}</p></button>
                                        <button className="flex gap-1 items-center lg:px-2 lg:py-1 rounded hover:bg-gray-300"><ShareOutlinedIcon className='text-sm lg:text-base' /> <p>Share</p></button>
                                    </div>
                                </div>
                                <p className='hidden lg:block text-blue-950 font-semibold'>{timeAgo(data.postedOn)}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default DiscussionForum;