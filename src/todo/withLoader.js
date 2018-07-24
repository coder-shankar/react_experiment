import React from "react";
import Loader from "./Loader";
const withLoader = Component => {
  class MyComponent extends React.Component {
    constructor() {
      super();
    }

    render() {
      console.log(this.props, "props from fetch");
      return this.props ? (
        <Component list={this.props.lists.data} />
      ) : (
        <Loader />
      );
    }
  }

  return MyComponent;
};

export default withLoader;
