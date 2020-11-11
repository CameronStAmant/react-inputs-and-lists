import React from 'react';
import Overview from './components/Overview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inp: '', items: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ inp: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ items: this.state.items.concat(this.state.inp) });
    this.setState({ inp: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
        <Overview items={this.state.items} />
      </div>
    );
  }
}

export default App;
