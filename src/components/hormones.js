import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import './hormone-chart.js';
import './hormone.css';

const styles = {
  margin: 16,
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class Hormones extends Component {

  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div>

      <div id="chart"></div>


      <Tabs>
        <Tab label="Exercise" style={{fontFamily: 'Julius Sans One', backgroundColor:'#52BFAB'}}>
          <div>

            <h2 style={{fontFamily: 'Julius Sans One'}}>Performance Phase</h2>
            <div style={{fontFamily: 'Alegreya Sans'}}>
              (days 1-7)
              <ul>
              <li>During this phase, your hormones are most favorable for performance because they are at their lowest. You are likely to feel your best physically with a rise in pain tolerance and a faster recovery time.</li>
              <li>Shoot for your goals this week as you will produce more force and greater strength than normal.</li>
              <li>Coordination may decrease during this time.</li>
              </ul>
            </div>

          </div>
        </Tab>

        <Tab label="Nutrition" style={{fontFamily: 'Julius Sans One', backgroundColor:'#52BFAB'}}>
          <div>
            <h2 style={{fontFamily: 'Julius Sans One'}}>Performance Phase</h2>
            <div style={{fontFamily: 'Alegreya Sans'}}>
            (days 1-7)
            <ul>
            <li>Iron is critical to optimal athletic performance because of its role in energy metabolism and oxygen transport. It is important to focus on iron intake at this time of the cycle due to increased blood loss.</li>
            <li>Peppers and spinach are rich in vitamin C, which can aid iron absorption.</li>
            </ul>
          </div>
          </div>
        </Tab>

      </Tabs>
      </div>
    )
  }
}

export default Hormones;
