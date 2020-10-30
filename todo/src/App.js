import React from "react"

import './App.css';
import Header from "./Header"
import todosData from "./todosData"
import TodoItem from "./todoItem";

class App extends React.Component {
    constructor() {
      super()
      this.state = {
        todos: todosData
      }
    }

    render() {
      const todosArray = this.state.todos.map(item => 
          <TodoItem 
              key={item.id} 
              text={item.text} 
              checked={item.completed}
          />)

      return (
        <div className="App">
              <Header />
              <div className="container">
                  {todosArray}
              </div>
        </div>
      )
    }
}

export default App;
