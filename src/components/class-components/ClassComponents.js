// ejemplo componente de clase

import { Component } from "react";

export class ClassComponents extends Component {
  render () {
    const { name, age } = this.props;
    return (
      <>
        <h1>ClassComponents</h1>
        <h2>Nombre: {name} </h2>
        <h2>Edad: {age} </h2>
      </>
    );
  }
}