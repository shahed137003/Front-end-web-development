import { Component } from "react"

class Task extends Component{
    state={name:"Shahd"}

    render(){
        console.log(this.props)
        return <div>Task of {this.state.name}</div>
    }

}

export default Task
