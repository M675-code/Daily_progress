import React, { Component } from "react";
import logo from "/logo.svg"

import AddTodo from "./Addtodo";

class ReactTodolist extends Component{
    state ={
        todos: [
            {
            text: "Buy Milk"
            },
            {
            text: "Buy Bread"
            }
        ]
    };

    addTodoToState = text => {
        const newTodo = this.state.todos.concat({
            text
        });

        this.setState({
            todos: newTodos
        });
    };

    render(){
        return <div className="ReactTodolist">
            {this.state.todos.map((todo, index) => {
                return <li key={index}>{todo.text}</li>
            })}

            <AddTodo addTodoState = {this.addTodoToState}/>
        </div>
    }
}

export default ReactTodolist;