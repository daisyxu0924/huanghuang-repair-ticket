import React, {Component} from 'react'
import App from './App'

export default class Master extends Component {
 render() {
   return (
     <div>
       <h1>Create a new ticket</h1>
       {this.props.children}
     </div>
   )
 }
}
