import React, { Component, PropTypes } from 'react';
import { createStyleSheet } from 'stylishly';
import shallowEqual from 'recompose/shallowEqual';
import IconButton from 'material-ui/IconButton';
import Collapse from 'material-ui/transitions/Collapse';
import MarkdownElement from './MarkdownElement';

const requireDemos = require.context('../demos', true, /\.js$/);
const requireDemoSource = require.context('!raw!../demos', true, /\.js$/);

const styleSheet = createStyleSheet('Demo', (theme) => {
  return {
    root: {
      position: 'relative',
      backgroundColor: theme.palette.background.contentFrame,
      marginBottom: 40,
    },
    demo: theme.mixins.gutters({
      display: 'flex',
      justifyContent: 'center',
      paddingTop: 20,
      paddingBottom: 20,
    }),
    codeButton: {
      zIndex: 10,
      position: 'absolute',
      top: 2,
      right: 7,
    },
    code: {
      padding: 0,
      margin: 0,
      '@raw pre': { // override prism styles
        backgroundColor: `${theme.palette.background.contentFrame} !important`,
        margin: '0px !important',
        borderRadius: '0px !important',
      },
    },
  };
});

export default class Demo extends Component {
  static propTypes = {
    demo: PropTypes.string,
  };

  static contextTypes = {
    theme: PropTypes.object.isRequired,
    styleManager: PropTypes.object.isRequired,
  };

  state = {
    codeOpen: false,
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      nextProps.demo !== this.props.demo ||
      nextState.codeOpen !== this.state.codeOpen ||
      !shallowEqual(this.context, nextContext)
    );
  }

  handleCodeButtonClick = () =>
    this.setState({
      codeOpen: !this.state.codeOpen,
    });

  render() {
    const DemoComponent = requireDemos(`./${this.props.demo}`).default;
    const demoSource = requireDemoSource(`./${this.props.demo}`);
    const classes = this.context.styleManager.render(styleSheet);

    const code = `\`\`\`js\n${demoSource}\n\`\`\``;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleCodeButtonClick}
          className={classes.codeButton}
        >
          code
        </IconButton>
        <Collapse in={this.state.codeOpen}>
          <MarkdownElement className={classes.code} text={code} />
        </Collapse>
        <div className={classes.demo}>
          <DemoComponent />
        </div>
      </div>
    );
  }
}
