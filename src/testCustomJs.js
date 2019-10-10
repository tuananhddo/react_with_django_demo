// App.js
import React, { Component } from 'react';
import add,{hello} from './custom.js'
class App extends Component {
  state = {
    todos: []
  };

  render() {
    return (
      <div>
          <div>{add(1,2)}</div>

      </div>
    );
  }
}
export class Myclass extends React.Component{
    render() {
    return (
      <div>
          <div>Hii</div>

      </div>
    );
  }
}
export default App;