import React, { Component } from "react";
import logo from "/logo.svg"
import ReactTodolist from "./ReactTodolist.css"

import AddTodo from "./Addtodo";
import TodoItem from "./TodoItem";

class ReactTodolist extends Component{
    state ={
        todos: [
            {
            text: "Buy Milk",
            completed: false
            },
            {
            text: "Buy Bread",
            completed: true
            }
        ]
    };

    toggleComplete = index => {
        const newTodos = this.state.todos.map((todo, i) => {
            if(index ===i){
                return{
                    ...todo,
                    completed: !todo.completed
                };
            }

            return todo;
        }); 

        this.setState({
            todos: newTodos
        })
    };

    deleteTodoFromState = index => {
        const newTodos = this.state.todos.filter((todo, i) => {
            if(index===i){
                return false;
            }
            return true;
        });
        this.setState({
            todos: newTodos
        });
    };
    

    editTodoFromState = (index,newText) => {
        const newTodos = this.state.todos.map((todo,i) => {
            if(index === i){
                return{
                    ...todo,
                    text: newText
                };
            }

            return todo;
        });

        this.setState({
            todos: newTodos
        });
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
                return (
                <TodoItem 
                toggleComplete={this.toggleComplete} 
                deleteTodoFromState={this.deleteTodoFromState}
                editTodoFromState={this.editTodoFromState}
                todo={todo} 
                index={index}
                key={{index}} 
                />)
            })}

            <AddTodo addTodoState = {this.addTodoToState}/>
        </div>
    }
}

export default ReactTodolist;