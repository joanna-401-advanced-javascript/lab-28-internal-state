import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: null,
    };
  }


  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState((previousState) => ({
      name: this.state.name,
      count: previousState.count + 1,
    }));
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <div>Name: {this.state.name}</div>
          <div># of Updates: {this.state.count}</div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange}/>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
