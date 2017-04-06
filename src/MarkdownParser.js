import React, { Component } from 'react';
import marked from 'marked';
import MarkdownInput from './MarkdownInput';
import MarkdownOutput from './MarkdownOutput';

class MarkdownParser extends Component {
  constructor(props) {
    super(props);
    const starterText = localStorage.getItem('text') || 
    `# This is a heading
## This is a sub-heading
### This is heading 3

**Bold this**
*Italicize this*
\`const a = 2;\`
~~I never wrote this~~


Two breaks for a newline!

Want to go to [Google.com](http://www.google.com)?

Shopping list
* Apples
* Oranges
* Bananas

To-Do List
1. This first
2. That second`;

    this.state = {
      text: starterText
    };
    this.changeText = this.changeText.bind(this);
    this.renderMarkdown = this.renderMarkdown.bind(this);
  }

  changeText (newText) {
    localStorage.setItem('text', newText);
    this.setState({ text: newText });
  }

  renderMarkdown() {
    return marked(this.state.text);
  }
  
  render() {
    return (
      <div>
        <h1 className="text-center">Markdown Parser</h1>
        <MarkdownInput value={this.state.text} onChange={(text) => this.changeText(text)} />
        <MarkdownOutput value={this.renderMarkdown()} />
      </div>
    );
  }
}

export default MarkdownParser;
