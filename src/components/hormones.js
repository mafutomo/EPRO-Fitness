import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';

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
      <Tabs>
        <Tab label="Exercise" >
          <div>
            <h2 style={styles.headline}>Exercise Recommendations</h2>

            <p>
              You should be running a lot.
            </p>

          </div>
        </Tab>

        <Tab label="Nutrition" >
          <div>
            <h2 style={styles.headline}>Nutrition Recommendations</h2>
            <p>
              You should eat chocolate every day of this week
            </p>
          </div>
        </Tab>

      </Tabs>
      </div>
    )
  }
}


export default Hormones;
