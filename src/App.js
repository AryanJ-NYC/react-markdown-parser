import React, { Component } from 'react';
import marked from 'marked';
import MarkdownInput from './MarkdownInput';
import MarkdownOutput from './MarkdownOutput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.changeText = this.changeText.bind(this);
    this.renderMarkdown = this.renderMarkdown.bind(this);
  }

  changeText (newText) {
    this.setState({ text: newText });
  }

  renderMarkdown() {
    return marked(this.state.text);
  }
  
  render() {
    return (
      <div>
        <MarkdownInput value={this.state.text} onChange={(text) => this.changeText(text)} />
        <MarkdownOutput value={this.renderMarkdown()} />
      </div>
    );
  }
}

export default App;