// @flow weak

import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import PhoneIcon from 'material-ui-icons/Phone';
import FavoriteIcon from 'material-ui-icons/Favorite';
import PersonPinIcon from 'material-ui-icons/PersonPin';

export default class IconLabelTabs extends Component {
  state = {
    index: 0,
  };

  handleChange = (event, index) => {
    this.setState({ index });
  };

  render() {
    return (
      <Paper style={{ width: 500 }}>
        <Tabs
          index={this.state.index}
          onChange={this.handleChange}
          fullWidth
          textColor="accent"
        >
          <Tab
            icon={<PhoneIcon />}
            label="RECENTS"
          />
          <Tab
            icon={<FavoriteIcon />}
            label="FAVORITES"
          />
          <Tab
            icon={<PersonPinIcon />}
            label="NEARBY"
          />
        </Tabs>
      </Paper>
    );
  }
}
