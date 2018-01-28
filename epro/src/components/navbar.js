import React from 'react';
import AppBar from 'material-ui/AppBar';
// import LeftNav from 'material-ui/left-nav';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const Navbar = ({open, handleToggle}) => {

  return (
    <div>

    <AppBar
   title="Title"
   iconClassNameRight="muidocs-icon-navigation-expand-more"
    />

       <FlatButton
          label="Toggle Drawer"
         onClick={this.handleToggle}
        />

       <Drawer open={this.state.open}>
         <MenuItem>Home</MenuItem>
         <MenuItem>Account</MenuItem>
         <MenuItem>User Base</MenuItem>
         <MenuItem>Logout</MenuItem>
       </Drawer>

    </div>
  )
}


export default Navbar;
