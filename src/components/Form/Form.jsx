import React from 'react';

export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      name: null,
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(previousState => ({
      count: previousState.count + 1,
    }));
  };

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange}/>
      </form>
    );
  }
}
