import React from 'react';
import './App.css';

const marked = window.marked
class Code extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input:'# Heading\n## Sub-heading\n[Link](https://www.youtube.com/watch?v=dQw4w9WgXcQ)\n```\nfunction() {\n return true;\n}\n```\n> Blockquote\n![image](https://lh3.googleusercontent.com/W5LywwJHdo-l6Lm5Z6q2E0pziqzru05QEy5lwXDBPNAnrr5zx9oJrqefXNTGjtToW5s24pUZtQ=w640-h400-e365)\n**Bold text**\n- list item.\n`code block`'
    };
    this.handleChange = this.handleChange.bind(this);
  }
  /*As you type, the input state is automatically updated.*/
  handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }

  render() {
    const {input} = this.state;
    //The input is transformed into elements thanks to a markdown library.
    const markdown = marked(input);
    return (
      <div>
        <div className="editor-div">
          <textarea id="editor" value={this.state.input} onChange={this.handleChange} rows="10" cols="80"></textarea>
        </div>

        <div id="preview-div">
          <h1>Result</h1>
          <div id="preview" dangerouslySetInnerHTML={{__html: markdown}}>
          </div>
        </div>
      </div>
    );
  }
}

export default Code;
