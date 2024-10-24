import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class Todo extends Component {
      constructor(props) {
        super(props);
        this.state = {
          todos: [], // Array to store the list of todos
          currentTodo: '', // Temporary state for the current input value
        };
      }
    
      // Handle input change for adding new todo
      handleInputChange = (event) => {
        this.setState({ currentTodo: event.target.value });
      };
    
      // Add new todo to the list
      addTodo = () => {
        const { currentTodo, todos } = this.state;
        if (currentTodo.trim() !== '') { // Prevent adding empty todos
          this.setState({
            todos: [...todos, currentTodo],
            currentTodo: '', // Clear the input field after adding
          });
        }
      };
    
      // Remove a todo from the list
      removeTodo = (index) => {
        const { todos } = this.state;
        const newTodos = todos.filter((_, i) => i !== index);
        this.setState({ todos: newTodos });
      };
    
      render() {
        const { todos, currentTodo } = this.state;

        const styles = {
            container: {
              maxWidth: '500px',
              marginTop: '50px',
              marginLeft: '34%',
              padding: '20px',
              textAlign: 'center',
              fontFamily: 'Arial, sans-serif',
              border: '1px solid #ddd',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            },
            heading: {
              color: '#333',
            },
            input: {
              padding: '10px',
              width: 'calc(100% - 22px)',
              marginBottom: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontSize: '16px',
            },
            button: {
              padding: '10px 20px',
              margin: '5px',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: '#32de84',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '16px',
            },
            removeButton: {
              marginLeft: '10px',
              padding: '5px 10px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
            },
            todoList: {
              listStyle: 'none',
              padding: 0,
            },
            todoItem: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
              borderBottom: '1px solid #ddd',
            },
          };
    
        return (
          <div style={styles.container}>
            <h1 style={styles.heading}>TODO⚙️</h1>
            <input
              style={styles.input}
              type="text"
              value={currentTodo}
              onChange={this.handleInputChange}
              placeholder="Write Something?"
            /> <br />
            <button
            style={styles.button}
            onClick={this.addTodo}>Add Todo</button>
            <ul style={styles.todoList}>
              {todos.map((todo, index) => (
                <li key={index} style={styles.todoItem}>
                  {todo}
                  <button 
                  style={styles.removeButton}
                   onClick={() => this.removeTodo(index)}>❌</button>
                </li>
              ))}
            </ul>
          </div>
        );
      }
 }

export default Todo
