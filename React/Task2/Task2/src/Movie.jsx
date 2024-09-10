import { memo, PureComponent } from 'react'
import  { Component } from 'react'
import axios from "axios"
import {useState} from 'react'
import Movies from './Movies'
class Movie extends PureComponent {
    
constructor(props){
    console.log("Constructor")
    
super(props)
this.state={
results:null
}
// const [movieArr]=useState(this.state.results)
}
//results:{...this.status.results,success:true}

render() {

    console.log("Render")

    if(!this.state.results) return <div>Loading.....</div>
    return (
   <div >
    {this.state.results.map((u)=><Movies key={u.id} {...u}></Movies>)}
   </div>
    )
    
}
componentDidMount(){
axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7").then(res=>this.setState({results:res.data.results}))
console.log("componentDidMount")
}

}


export default memo(Movie)