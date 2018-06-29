import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import addTodoItem from './action';
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.addTodoItem();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({ todo }) => ({
})

const mapDispatchToProps = (dispatch) => ({
  addTodoItem: () => dispatch(addTodoItem()),
  enrolledList: () =>  {}
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
