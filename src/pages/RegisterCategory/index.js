import React, { Component } from "react";

export default class RegisterCategory extends Component {
  state = {
    category: null
  };

  componentDidMount() {
    const { params } = this.props.match;
    console.log(params);
    if (params != undefined) {
      this.getData(params);
    }
  }

  getData(data) {
    const { id } = data;

    api
      .get(`/categories/${id}`)
      .then(resp => {
        const { data } = resp;
        this.setState({ data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return <div>Hello</div>;
  }
}
