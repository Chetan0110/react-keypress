import React from "react";
import Keypress from "keypress.js";

var listner = new Keypress.Listener();

export default class KeyboardShortcut extends React.Component {

  componentDidMount() {
    this.props.addShortcut({
      ...this.props.shortcuts,
      [this.props.combo]: this.props.description
    });

    this.registered_combo = listner.simple_combo(this.props.combo, (event, count) => {
      this.props.callback();
    });
  }

  componentWillUnmount() {
    listner.unregister_combo(this.registered_combo);
  }

  render() {
    return (
      <>
      </>
    );
  }
}