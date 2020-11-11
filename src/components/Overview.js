import React from 'react';
import uniqid from 'uniqid';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = { items: props };
  }
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={uniqid()}>{item}</li>
        ))}
      </ul>
    );
  }
}

export default Overview;
