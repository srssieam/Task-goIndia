"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DiscussionForum from './DiscussionForum';
import MarketStories from './MarketStories';
import { styled } from '@mui/material';


const CustomTab = styled(Tab)({
    color: '#a1a1aa',
    fontWeight: 'bold',
    '&.Mui-selected': {
      backgroundColor:"#00000080",
      color: 'white',
      borderRadius: "0px 0px 0px 0px",
      borderBottom :"2px solid red",
      zIndex:"5"
    },
  });



const SmallScreenView = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='lg:hidden'>
                <TabContext value={value} sx={{width: "100%"}}>
                    <Box sx={{ width:"100%" }}>
                        <TabList onChange={handleChange} className=" bg-blue-950 overflow-hidden border-l-8 border-black border-r-8 " aria-label="lab API tabs example">
                            <CustomTab sx={{ width:"50%", px: { xs: 1.5, md: 3 }, pt: { xs: 0, md: 0 }, pb: { xs: 0, md: 0 } }} label="Discussion Forum" value="1" />
                            <CustomTab sx={{ width:"50%", px: { xs: 1.5, md: 3 }, pt: { xs: 0, md: 0 }, pb: { xs: 0, md: 0 } }} label="Market Stories" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1"><DiscussionForum /></TabPanel>
                    <TabPanel value="2"><MarketStories /></TabPanel>
                </TabContext>
        </div>
    );
};

export default SmallScreenView;