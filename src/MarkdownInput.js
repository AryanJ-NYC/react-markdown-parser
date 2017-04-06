import React, { Component } from 'react';

class MarkdownInput extends Component {
  render() {
    const styles = {
      height: '90%'
    };
    return (
      <textarea
        className="col-sm-6"
        onChange={(e) => this.props.onChange(e.target.value)}
        value={this.props.value}
        style={styles}>
      </textarea>
    );
  }
}

export default MarkdownInput;
