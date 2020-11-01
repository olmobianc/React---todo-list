import React from "react"

import './App.css';
import Header from "./Header"
import TodoItem from "./todoItem";
import todosData from "./todosData"


class App extends React.Component {
    constructor() {
      super()
      this.state = {
        todos: todosData
      }
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
      this.setState((prevState) => {
        const newArray = prevState.todos.map((elem) => {
          if(elem.id === id) {
            elem.completed = !(elem.completed)
          }
          return elem
        })
        return {
          todos: newArray
        }
      })
    }

    render() {
      const todosArray = this.state.todos.map(item => 
          <TodoItem
              key={item.id} 
              item={item}
              handleChange={this.handleChange}
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
