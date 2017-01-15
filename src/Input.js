import React from 'react';
import { render } from 'react-dom';

class Input extends React.Component {
  render() {
    return (
      <textarea rows="22" className="form-control" onChange={this.props.updateValue} ref="input" value={this.props.value} />
    );
  }
}

export default Input;