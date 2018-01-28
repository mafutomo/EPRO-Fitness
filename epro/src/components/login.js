import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
  };

class Login extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Login Component
        <TextField
        hintText="example@email.com"
        floatingLabelText="Email Login"
        /><br />

        <TextField
          hintText=""
          floatingLabelText="Password"
          type="password"
        /><br />

         <RaisedButton label="Register" primary={true} style={style} />
         <RaisedButton label="Login" primary={true} style={style} />

      </div>
    )
  }
}


export default Login;
