import React, { Component } from 'react';

// Form
import { FaPlus } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  // 1. Class Field: Estado declarado direto, sem constructor
  state = {
    novaTarefa: '',
  };

  // 2. Class Field + Arrow Function: O 'this' já vem vinculado automaticamente
  inputMudou = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    const { novaTarefa } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form action="#" className="form">
          <input onChange={this.inputMudou} type="text" value={novaTarefa} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
      </div>
    );
  }
}
