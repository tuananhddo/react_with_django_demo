// App.js
import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
class App extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:8000/api/'); // fetching the data from api, before the page loaded
      const todos = await res.json();
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.todos.map((items,index,array) => (
          <div key={items.id}>
            <h1>{items.title}</h1>
            <span>{items.description}</span>
            <p>Title : {array[0].title}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;