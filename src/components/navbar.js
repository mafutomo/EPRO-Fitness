import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
          <div>

              <AppBar
                  onClick={this.handleToggle}
                  iconClassNameRight="muidocs-icon-navigation-expand-more"
              />

              <Drawer
                  docked={false}
                  width={200}
                  open={this.state.open}
                  onRequestChange={(open) => this.setState({open})}>

                <MenuItem>Home</MenuItem>
                <MenuItem>Account</MenuItem>
                <MenuItem>User Base</MenuItem>
                <MenuItem>Logout</MenuItem>
              </Drawer>
        </div>
      )
  }
}


export default Navbar;
