import React from 'react';
import { render } from 'react-dom';
import marked from 'marked';

import Input from './Input';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
    }
  }

  updateValue(event) {
    this.setState({
      value: event.target.value
    });
  }

  parseInput(input) {
    let content = marked(input, { sanitize: true });
    return { __html: content };
  }

  render() {
    return (
      <div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <Input value={this.state.value} updateValue={this.updateValue.bind(this)} />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div dangerouslySetInnerHTML={this.parseInput(this.state.value)} ></div>
        </div>
      </div>
    )
  }
}

render(<Container />, document.getElementById('container'));