// @flow weak

import React, { Component } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Button from 'material-ui/Button';
import { Dialog } from 'material-ui/Dialog';
import {
  List,
  ListItem,
  ListItemText,
} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Text from 'material-ui/Text';
import CloseIcon from 'material-ui/svg-icons/close';
import Slide from 'material-ui/transitions/Slide';

const styleSheet = createStyleSheet('FullScreenDialog', () => ({
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
}));

export default class FullScreenDialog extends Component {
  state = {
    open: false,
  };

  handleRequestClose = () => this.setState({ open: false });

  render() {
    const classes = this.context.styleManager.render(styleSheet);
    return (
      <div>
        <Button onClick={() => this.setState({ open: true })}>
          Open full-screen dialog
        </Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
          transition={<Slide direction="up" />}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton contrast onClick={this.handleRequestClose}>
                <CloseIcon />
              </IconButton>
              <Text type="title" colorInherit className={classes.flex}>Sound</Text>
              <Button contrast onClick={this.handleRequestClose}>save</Button>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>
              <ListItemText primary="Phone ringtone" secondary="Titania" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Default notification ringtone" secondary="Tethys" />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

FullScreenDialog.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};
