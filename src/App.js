import React, { Component } from "react";
import "./App.css";
import WithLogin from "./login/withLogin";
import withFetchData from "./todo/withFetchData";
import withLoader from "./todo/withLoader";
import List from "./todo/list";

const Login = WithLogin();
const Todo = withFetchData(withLoader(List));
class App extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: false
    };
  }

  setIsLogin = flag => {
    this.setState({ isLogin: flag });
  };

  render() {
    return this.state.isLogin ? <Todo /> : <Login setLogin={this.setIsLogin} />;
  }
}

export default App;
