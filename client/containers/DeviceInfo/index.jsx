import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import DeviceType from '../../components/deviceType'
import DeviceModel from '../../components/deviceModel'
import DeviceSerialNo from '../../components/deviceSerialNo'
import DeviceScreenSize from '../../components/deviceScreenSize'
import NextButton from '../../components/nextButton'
import * as actions from '../../actions/ticket'


class DeviceInfo extends Component {

  render() {
    console.log("props>>> 2nd ??? ")
    console.log(this.props)
    let {actions, ticket} = this.props;
    return (
      <div>
        <DeviceModel ticket={ticket} actions={actions} />
        <DeviceSerialNo ticket={ticket} actions={actions} />
        <DeviceScreenSize ticket={ticket} actions={actions} />
        <NextButton url="/deviceInfo" ticket={ticket} actions={actions.submitTicket} />
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    ticket: state.ticketReducers
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DeviceInfo)
