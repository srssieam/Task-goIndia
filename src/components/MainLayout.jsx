"use client"
import * as React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Drawer from '@mui/material/Drawer';
import SideBarMenus from './SideBarMenus';

const MainLayout = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className='flex'>
      {/* drawer */}
      <Drawer
        sx={{
          position: "relative",
          width: 210,
          '@media (min-width: 768px)': {
            width: 250,
          },
          '& .MuiDrawer-paper': {
            width: 210,
            border: "none",
            boxSizing: 'border-box',
            '@media (min-width: 768px)': {
              width: 250,
            },
          },
        }}
        variant="persistent"
        open={open}
      >
        {/* drawer menus */}
        <SideBarMenus></SideBarMenus>

        <button onClick={() => setOpen(!open)} className='xl:hidden absolute top-[50%] bottom-[50%] right-0 border-l border-t border-b -translate-y-[50%] h-24 w-6 bg-blue-950 text-white'>
          <ArrowRightIcon className='text-3xl' />
        </button>
      </Drawer>

      {/* layout body */}
      <div className='relative h-[100vh] '>
        <div className={`transition-all duration-200 ease-out  -ml-[210px] md:-ml-[250px]  ${open ? "xl:-ml-0" : "xl:-ml-[250px]"}`}>

          {/* drawer toggle button */}
          <button onClick={() => setOpen(!open)} className='fixed top-[50%] bottom-[50%] -translate-y-[50%] h-24 w-6 bg-blue-950 text-white'>
            <ArrowRightIcon className='text-3xl' />
          </button>

            {children}
        </div>
      </div>
    </div>
  );
}
export default MainLayout;