import React, { Component } from 'react';

class MarkdownOutput extends Component {
  constructor(props) {
    super(props);
    this.createMarkup = this.createMarkup.bind(this);
  }

  createMarkup() {
    return {__html: this.props.value};
  }

  render() {
    return (
      <div className="col-sm-6" dangerouslySetInnerHTML={this.createMarkup()}></div>
    );
  }
}

export default MarkdownOutput;
