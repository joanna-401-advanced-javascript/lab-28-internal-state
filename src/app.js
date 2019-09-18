import React from 'react';
import Form from './components/Form/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <div>Name: </div>
          <div># of Updates: </div>
          <Form />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
