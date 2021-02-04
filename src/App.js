import React from 'react';
import './App.css';

const marked = window.marked
marked.setOptions({
  breaks: true
})
class Code extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input:'# Heading\n## Sub-heading\n[Link](https://www.youtube.com/watch?v=dQw4w9WgXcQ)\n```\nfunction() {\n return true;\n}\n```\n> Blockquote\n![image](https://miro.medium.com/max/300/0*9U_PkckAUtKGrb_R.png)\n**Bold text**\n- list item.\n`code block`'
    };
    this.handleChange = this.handleChange.bind(this);
  }
  /*As you type, the input state is automatically updated.*/
  handleChange(event) {
      marked.setOptions({
        breaks: true
      });

      this.setState({
        input: event.target.value
      });
  }

  render() {
    const {input} = this.state;
    //The input is transformed into elements thanks to the marked library.
    const markdown = marked(input);
    return (
      <div>
        <div className="editor-div">
          <h1 class="previewer-heading">Your code</h1>
          <textarea id="editor" value={this.state.input} onChange={this.handleChange} rows="10" cols="80"></textarea>
        </div>

        <div id="preview-div">
          <h1 class="previewer-heading" id="result">Result</h1>
          <div id="preview" dangerouslySetInnerHTML={{__html: markdown}}>
          </div>
        </div>
      </div>
    );
  }
}

export default Code;
