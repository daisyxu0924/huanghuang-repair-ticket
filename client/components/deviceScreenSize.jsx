import React, {Component} from 'react'
import {connect} from 'react-redux'
import MultiSelect from './multiSelect'

export default class DeviceScreenSize extends Component {
  handleClick(value) {
    let action = this.props.actions.setDeviceModel;
    action(value);
  }
  render() {
    let ticket = this.props.ticket;
    if (ticket.get('device_type') == 'MacBook') {
      let ticket = this.props.ticket;
      let options = ['15', '13'];
      return (
        <div>
          <h4>Device screensize:</h4>
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
