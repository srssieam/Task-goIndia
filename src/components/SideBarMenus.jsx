import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Accordion, AccordionDetails, AccordionSummary, Badge, Divider } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const SideBarMenus = () => {
    return (
        <div className='bg-blue-950 w-full h-full text-white text-sm: lg:text-lg'>
            {/* drawer header */}
            <div>
                <div className='flex  items-center justify-between px-5 py-4'>
                    <div className='flex gap-2 items-center '>
                        <PersonIcon className='text-lg: lg:text-3xl'></PersonIcon>
                        Hello, User
                    </div>
                    <Badge color="error" variant="dot">
                        <NotificationsIcon className='text-lg: lg:text-3xl' />
                    </Badge>
                </div>
                <Divider sx={{ borderColor: "gray" }}></Divider>
            </div>

            {/* menus */}
            <div className='flex flex-col py-4'>

                <Accordion sx={{ backgroundColor: "rgb(0 0 0 / 0.45)", padding: "0px 0px", paddingLeft: "16px", color: "white", display: "block" }}>
                    <AccordionSummary
                        // sx={{padding:"0px 0px"}}
                        expandIcon={<ArrowDropDownIcon sx={{ color: "white", display: "block" }} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <button className='flex gap-2 w-full'>
                            <ChatIcon />
                            <p>Discussion Forum</p>
                        </button>
                    </AccordionSummary>
                    <AccordionDetails>
                        <button className='flex gap-2 items-center w-full px-4 py-2 hover:bg-black/40'>
                            <p className='ml-1'>Sector</p>
                        </button>
                        <button className='flex gap-2 items-center w-full px-4 py-2 hover:bg-black/40'>
                            <p className='ml-1'>Watchlist</p>
                        </button>
                        <button className='flex gap-2 items-center w-full px-4 py-2 hover:bg-black/40'>
                            <p className='ml-1'>Event</p>
                        </button>
                        <button className='flex gap-2 items-center w-full px-4 py-2 hover:bg-black/40'>
                            <p className='ml-1'>News/Interview</p>
                        </button>
                    </AccordionDetails>
                </Accordion>

                <button className='flex gap-2 items-center w-full px-4 py-2 hover:bg-black/40'>
                    <MonetizationOnIcon />
                    <p>Market Stories</p>
                </button>

                <button className='flex gap-2 items-center w-full px-4 py-2 hover:bg-black/40'>
                    <p className='ml-8'>Sentiment</p>
                </button>
                <button className='flex gap-2 items-center w-full px-4 py-2 hover:bg-black/40'>
                    <p className='ml-8'>Market</p>
                </button>
                <button className='flex gap-2 items-center w-full px-4 py-2 hover:bg-black/40'>
                    <p className='ml-8'>Sector</p>
                </button>
                <button className='flex gap-2 items-center w-full px-4 py-2 hover:bg-black/40'>
                    <p className='ml-8'>Watchlist</p>
                </button>
                <button className='flex gap-2 items-center w-full px-4 py-2 hover:bg-black/40'>
                    <p className='ml-8'>Event</p>
                </button>
                <button className='flex gap-2 items-center w-full px-4 py-2 hover:bg-black/40'>
                    <p className='ml-8'>News/Interview</p>
                </button>

            </div>
        </div>
    );
};

export default SideBarMenus;