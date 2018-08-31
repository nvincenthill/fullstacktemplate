import React from 'react';
import FontAwesome from 'react-fontawesome';

class Applet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      world: 'world',
    };
  }

  componentWillMount() {
    this.setState({
      world: 'world',
    });
  }

  render() {
    const { world } = this.state;
    return (
      <h1>
        Hello
        {world}
        <FontAwesome name="rocket" size="2x" />
      </h1>
    );
  }
}

export default Applet;
