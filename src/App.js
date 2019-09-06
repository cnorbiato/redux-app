import React, { Component } from 'react';
import './App.css';
import { headingH1 } from './headingH1';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';

class App extends Component {

  state = {
    inputValue: ''
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {

    const { newValue, clickButton } = this.props;
    const { inputValue } = this.state;

    return (
      <div className="App" style={{ paddingTop: '10px' }}>
        <input type='text' onChange={this.inputChange} value={inputValue} />
        <button onClick={() => clickButton(inputValue)}>
          Click!
        </button>
        <headingH1 variavel={newValue} />
      </div>
    );
  }
};

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);