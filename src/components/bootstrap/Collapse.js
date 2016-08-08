import React from 'react';
import Transition from 'react-overlays/lib/Transition';
const FADE_DURATION = 2000;

export default class Collapse extends React.Component {
  
  render() {
  

    return (
      <Transition
        {...this.props}

        exitedClassName="collapse"
        exitingClassName="collapsing"
        enteredClassName="collapse in"
        enteringClassName="collapsing"
      />
    );
  }
}
