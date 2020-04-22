import React, { Component } from 'react'
import NewTodoForm from "./NewTodoForm"
import "./TodoList.css"
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo"

export default class Todolist extends Component {
    constructor(props){
        super(props);
        this.state = {
            task: []
        }
        this.ListTodo = this.ListTodo.bind(this);
        this.addTodos = this.addTodos.bind(this);
        this.remove = this.remove.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.completed = this.completed.bind(this);
    }

    ListTodo(){
        return this.state.task.map(t => {
            return <Todo id={t.id} key={t.id} task={t.todo} removeTodo={this.remove} editTodo={this.editTodo} completed={this.completed} isCompleted={t.isCompleted}/>   
        })

    }

    addTodos(evt){
        const newtask = {todo: evt, id: uuidv4(), isCompleted: false}
        this.setState({task: [...this.state.task, newtask]});
    }

    remove(id){
        this.setState({
            task: [...this.state.task.filter(t => t.id !== id)]
        });
    }

    editTodo(id, newTodo){
        const Newtasks = this.state.task.map(t => {
            if(t.id === id){
                return {...t, todo: newTodo} 
            }
            return t;
            }
        )
        this.setState({task: Newtasks});
    };

    completed(id){
        const Newtasks = this.state.task.map(t => {
            if(t.id === id){
                return {...t, isCompleted: !t.isCompleted} 
            }
            return t;
            }
        )
        this.setState({task: Newtasks});
    };
    


    render() {
        return (
            <div className="TodoList">
                <h1>Todo List <span>A simple React App</span></h1>
               <ul>
                    {this.ListTodo()}
               </ul>
               <NewTodoForm addTodo={this.addTodos} id={"12312"}/> 

            </div>
        )
    }
}
