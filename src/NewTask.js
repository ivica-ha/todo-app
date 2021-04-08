import React from 'react';

export default class NewTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: '',
    };
  }

  handleInputChange = (event) => {
    const currentTextInInput = event.target.value;
    this.setState({ inputText: currentTextInInput });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onAdd(this.state.inputText);
    this.setState({ inputText: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.inputText}
            onChange={this.handleInputChange}
          />
          <input type='submit' value='Add Task' />
        </form>
      </div>
    );
  }
}
