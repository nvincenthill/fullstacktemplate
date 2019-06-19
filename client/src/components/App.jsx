import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    // consider Redux store, only use in certain situations
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>hello</p>
      </div>
    );
  }
}

export default App;
