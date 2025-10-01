import React, { Component } from "react";
import axios from 'axios'
import logo from "/logo.svg"
import ReactTodolist from "./ReactTodolist.css"

import AddTodo from "./Addtodo";
import TodoItem from "./TodoItem";

class ReactTodolist extends Component{
    state ={
        todos: [
            
        ]
    };

    componentDidMount() {
        axios.get("http://localhost:3333/").then((result) => {

            this.setState({
                todos: result.data 
            });
        });
    }

    toggleComplete = index => {

        const { todos } = this.state;
        const todo = todos[index];

        const newTodos = todos.map((todo, i) => {
            if(index ===i){
                return{
                    ...todo,
                    completed: !todo.completed
                };
            }

            return todo;
        }); 

        axios
           .put("http://localhost:3333/todos/" + todo.id, {
            ...todo,
            completed: !todo.completed
        })
        .then(() => {
            this.setState({
            todos: newTodos
            });
        });        
    };

    deleteTodoFromState = index => {

        const { todos } = this.state;

        const todo = todos[index];

        axios.delete("http://localhost:3333/todos/" + todo.id).then(() =>{
            const newTodos = todos.filter((todo, i) => {
                if(index===i){
                    return false;
                }
                return true;
            });
            this.setState({
                todos: newTodos
            });
        })       
    };
    

    editTodoFromState = (index,newText) => {

        const { todos } = this.state;
        const todo = todos[index];

        axios.put("http://localhost:3333/todos/" + todo.id, {
            ...todo,
            text: newText
        }).then(() => {
            const newTodos = todos.map((todo,i) => {
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
        });        
    };

    addTodoToState = text => {

        axios.post("http://localhost:3333/todos", {
            text,
            completed: false
        })
        .then(result => {
            const newTodo = this.state.todos.concat({
            text
            });

            this.setState({
                todos: newTodos
            });
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