import React, { Component } from 'react'
import "./NewTodoForm.css"

export default class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {task: []}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value});
    }
    
    handleSubmit(evt){
        evt.preventDefault();
        this.props.addTodo(this.state.task);
        this.setState({task: ""})
    }

    render() {
        return (      
            <div >
                <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                    <label htmlFor="task">New Todo</label>
                    <input type="text" name="task" placeholder="add a new todo" value={this.state.task} onChange={this.handleChange}/>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}
