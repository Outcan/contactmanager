import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    console.log("Component did mount...");
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  /*componentWillMount() {
    console.log("Component will mount...");
  }

  // runs when state changed...
  componentDidUpdate() {
    console.log("Component did update...");
  }

  componentWillUpdate() {
    console.log("Component will update...");
  }

  //
  componentWillReceiveProps(nextProps, nextState) {
    console.log("Component will receive props...");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate...");
  }*/

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title.charAt(0).toUpperCase() + title.substr(1)}</h1>
        <p>{body.charAt(0).toUpperCase() + body.substr(1)}.</p>
      </div>
    );
  }
}

export default Test;
