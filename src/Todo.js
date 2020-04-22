import React, { Component } from 'react'
import "./Todo.css"

export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.toogleForm = this.toogleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.result = this.result.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleRemove(){
        this.props.removeTodo(this.props.id)
    }

    handleEdit(evt){
        evt.preventDefault();
        this.props.editTodo(this.props.id, this.state.task);
        this.setState({isEditing: !this.state.isEditing});
    }

    toogleForm(){
        this.setState({isEditing: !this.state.isEditing});
    }

    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value});
    }

    handleClick (){
        this.props.completed(this.props.id)
    }

    result(){
        if (this.state.isEditing){ return (
            <div className="Todo">    
                <form className="Todo-edit-form" onSubmit={this.handleEdit}>
                    <input type="text" value={this.state.task} onChange={this.handleChange} name="task" />
                        <button>save</button>        
                </form>
            </div>    
            )


        } else {
            return (
                <div className="Todo">
                    <li  className={this.props.isCompleted ? "Todo-task completed": "Todo-task"}>
                        <p onClick={this.handleClick}>{this.props.task}</p>
                        
                    </li>
                    <div className="Todo-buttons">
                        <button onClick={this.toogleForm}><i className="fas fa-pen" />    </button>
                        <button onClick={this.handleRemove}><i className="fas fa-trash" /></button>
                    </div>
                </div>
            )
        }
    }


    render() {

        return (
            this.result()
        )
    }
}
