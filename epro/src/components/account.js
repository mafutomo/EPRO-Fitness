import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const styles = {
  customWidth: {
    width: 200,
  },
};

class Account extends Component {

  constructor(props) {
    super(props);
    this.state = {
      secondSlider: 21,
      checked: false,
    }
  }

  handleSecondSlider = (event, value) => {
      this.setState({secondSlider: value});
    };

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  render() {
      return (
        <div style={styles.block}>

        <TextField
         floatingLabelText="First Name"
        /><br />
        <TextField
         floatingLabelText="Last Name"
        /><br />
        <TextField
         floatingLabelText="Email"
         hintText="example@email.com"
        /><br />
        <TextField
         floatingLabelText="Password"
        /><br />
        <TextField
         floatingLabelText="Re-type Password"
        /><br />
        <br />
        <p>
          <span>{'Your Cycle Length: '}</span>
          <span>{`${this.state.secondSlider} Days`}</span>
        </p>
        <Slider
          min={21}
          max={36}
          step={1}
          style={{margin:35}}
          value={this.state.secondSlider}
          onChange={this.handleSecondSlider}
        />
        <DatePicker hintText="Day of Last Period" />
        <TextField
         floatingLabelText="Date of Birth"
         hintText="01/01/1991"
        /><br />

            <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Birth Control Method</TableHeaderColumn>
            <TableHeaderColumn>Examples</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableRowColumn>Non Hormonal</TableRowColumn>
            <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word'}}>None, Condoms, Paraguard/CopperIUD</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Triphasic</TableRowColumn>
            <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word'}}>Combination Birth Contol Pill - Varied Amount
, Ortho Tricyclen</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Monophasic</TableRowColumn>
            <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word'}}>Combination Birth Contol Pill - Same Amount
, Levora </TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Progestins</TableRowColumn>
            <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word'}}>Mirena IUD, Skyla, Mini Pill, Depo Shot, The Ring</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>

        </div>
      )
    }
  }


export default Account;
