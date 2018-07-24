import React from "react";
import loginServices from "./loginServices";

const withLogin = Component => {
  class MyComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        username: "",
        password: ""
      };
    }
    handleOnChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

    loginHandler = async e => {
      e.preventDefault();
      console.log(this.state.username);
      let flag = await loginServices(this.state.username, this.state.password);
      this.props.setLogin(flag);
    };

    render() {
      return (
        <div className="loginWrapper">
          <form>
            <label> UserName:</label>
            <input type="text" name="username" onChange={this.handleOnChange} />
            <br />
            <label> Password:</label>
            <input
              type="password"
              name="password"
              onChange={this.handleOnChange}
            />
            <br />
            <button onClick={this.loginHandler}>Login</button>
          </form>
        </div>
      );
    }
  }
  return MyComponent;
};
export default withLogin;
