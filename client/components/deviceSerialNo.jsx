import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Input} from 'react-bootstrap'
import {input} from './style.css'
import className from 'classname'

export default class DeviceSerialNo extends Component {
  handleKeyUp(e) {

    if (e.keyCode === 13) {
      let action = this.props.actions.setDeviceSerialNo;
      action(e.target.value);
    }

  }
  render() {
    let ticket = this.props.ticket;
    if (ticket.get('device_type')) {
      return (
        <div>
          <h4>Serial no:</h4>
          <Input className={input} type="text" onKeyUp={this.handleKeyUp.bind(this)}/>
        </div>
      )
    } else {
      return (
        <div/>
      )
    }


  }
}
