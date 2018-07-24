import React from "react";
import fetchData from "./todoServices";
const withFetchData = Component => {
  class MyComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        list: [],
        input: ""
      };
    }
    async componentDidMount() {
      let res = await fetchData();
      this.setState({ list: res.data });
    }

    searchHandler = async e => {
      await this.setState({ [e.target.name]: e.target.value });
      let res = await fetchData("?title=" + this.state.input);
      this.setState({ list: res.data });
    };

    render() {
      return (
        <div>
          <input
            type="text"
            name="input"
            onChange={e => {
              this.searchHandler(e);
            }}
          />

          <Component lists={this.state.list} />
        </div>
      );
    }
  }

  return MyComponent;
};

export default withFetchData;
