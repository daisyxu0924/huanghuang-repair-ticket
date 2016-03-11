import React, {Component} from 'react'
import {connect} from 'react-redux'
import MultiSelect from './multiSelect'

export default class DeviceModel extends Component {
  handleClick(value) {
    let action = this.props.actions.setDeviceModel;
    action(value);
  }
  render() {
    let ticket = this.props.ticket;
    let options = ['MacBook Air', 'MacBook Pro'];
    if (ticket.get('device_type') == 'iPhone') {
      options = ['iPhone5', 'iPhone5s', 'iPhone6', 'iPhone6s', ]
    }
    if (ticket.get('device_type')) {
      return (
        <div>
          <h4>Device model:</h4>
          <MultiSelect options={options} onClick={this.handleClick.bind(this)}/>
        </div>
      )
    } else {
      return (
        <div/>
      )
    }


  }
}
