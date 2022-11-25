import React, { useState } from 'react'
import {AppBar, Typography , Toolbar, Tabs, Tab} from  '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import {NavLink} from 'react-router-dom'


const Header = () => {
   const [value,setValue] = useState();
  return (
    <div>
      <AppBar sx={{backgroundColor:"#232F3D"}}  position='sticky'>
                 <Toolbar>
                 <Typography>
                    <LibraryBooksIcon/>
                 </Typography>
                 <Tabs 
                    sx={{ml:'auto'}}

                 textColor='inherited'indicatorColor="primary"  value={value} onChange = {(e,val)=>setValue(val)}
                 >
                      <Tab LinkComponent={NavLink} to="/add" label='Add product'/>
                      <Tab LinkComponent={NavLink} to="/books" label='Books'/>
                      <Tab LinkComponent={NavLink} to="/about" label='About Us'/>
                      <Tab LinkComponent={NavLink} to="/signin" label='Become A Member'/>
                      
                 </Tabs>
                 </Toolbar>
                
      </AppBar>
    </div>
  )
}

export default Header
