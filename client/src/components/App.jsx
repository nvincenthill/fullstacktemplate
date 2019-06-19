import React from 'react';
import ChildComponent from './ChildComponent';


class App extends React.Component {
  constructor(props) {
    super(props);
    // consider Redux store, only use in certain situations
    this.state = {};
  }

  render() {
    return (
      <div>
        <ChildComponent />
      </div>
    );
  }
}

export default App;
