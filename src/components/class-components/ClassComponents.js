// ejemplo componente de clase

import { Component } from "react";

export class ClassComponents extends Component {

  // 1° creo un estado:
  constructor() {
    super();
    this.state = {
      name: "Juan",
    };
  }

  // 2° creo una funcion:
updateNAme = () => {
  this.setState({ name: "Leo"});
}

  render () {
    const { name, age } = this.props;
    return (
      <>
        <h1>ClassComponents</h1>
        <h2>Nombre: {name} </h2>
        <h2>Edad: {age} </h2>

        <div onClick={this.updateNAme}>
          <h2>Nombre del estado: {this.state.name} </h2>
        </div>
      </>
    );
  }
}