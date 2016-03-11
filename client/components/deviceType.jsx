import React, {Component} from 'react'
import {bindActionCreator} from 'redux'
import {connect} from 'react-redux'
import MultiSelect from './multiSelect'

export default class DeviceType extends Component {
  handleClick(value) {
    let action = this.props.actions.setDeviceType;
    action(value);
  }
  render() {
    let options = ['iPhone', 'MacBook'];

    return (
      <div>
        <h4>Device type:</h4>
        <MultiSelect options={options} onClick={this.handleClick.bind(this)}/>
      </div>
    )
  }
}
