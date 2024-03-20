"use client"
import * as React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Drawer from '@mui/material/Drawer';

const MainLayout = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className='flex'>

      <Drawer
        sx={{
          position: "relative",
          width: 190,
          '@media (min-width: 768px)': {
            width: 240,
          },
          '& .MuiDrawer-paper': {
            width: 190,
            boxSizing: 'border-box',
            '@media (min-width: 768px)': {
              width: 240,
            },
          },
        }}
        variant="persistent"
        open={open}
      >
        <p>list 2</p>
        <p>list 2</p>
        <p>list 2</p>
        <p>list 2</p>

        <button onClick={() => setOpen(!open)} className='xl:hidden absolute top-[50%] bottom-[50%] right-0 -translate-y-[50%] h-24 w-6 bg-blue-950 text-white'>
          <ArrowRightIcon className='text-3xl' />
        </button>
      </Drawer>

      {/* layout body */}
      <div className='relative h-[100vh] '>
        <div className={`transition-all duration-200 ease-out  -ml-[190px] md:-ml-[240px]  ${open ? "xl:-ml-0" : "xl:-ml-[240px]"}`}>
          <button onClick={() => setOpen(!open)} className='absolute top-[50%] bottom-[50%] -translate-y-[50%] h-24 w-6 bg-blue-950 text-white'>
            <ArrowRightIcon className='text-3xl' />
          </button>

          {/* top bar for large screen */}
          <h1 className='text-4xl'>This is nav bar</h1>
          <div className=''>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainLayout;