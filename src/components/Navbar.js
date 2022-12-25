import React, { useContext } from 'react'
import { Cartcontext } from '../context/context'

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Homepage from "../pages/homepage/Homepage"
import Cart from '../pages/cart/Cart'
import "./Navbar.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
// const GlobalState = useContext(Cartcontext)


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function Navbar() {
    const [value, setValue] = React.useState(0);
    const GlobalState = useContext(Cartcontext)
    const state = GlobalState.state


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div><Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab label="Online shop" {...a11yProps(0)} />
              
          <Tab  label=<div>  <ShoppingBasketIcon/>
          <div className='length'>
          {state.length>0 && state.length}
          </div>
         
          </div>  {...a11yProps(1)} />
       
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Homepage/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Cart/>
      </TabPanel>
      
    </Box></div>
  )
}

export default Navbar