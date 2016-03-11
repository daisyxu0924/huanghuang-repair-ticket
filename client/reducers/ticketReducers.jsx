import {handleActions} from 'redux-actions'
import $ from 'jquery';
import Immutable from 'immutable'

const initialState = Immutable.Map({
  device_type: null,
  device_model: null,
  device_serial_no: null,
  device_screen_size: null,
  contact_name: null,
  contact_email: null,
  errors: null
})

let submitTicket = (state) => {
  console.log("posting... ")
  console.log(state.ticket)
  $.ajax({
    type: 'POST',
    url: '/tickets',
    data: JSON.stringify(state.ticket),
    contentType: 'application/json',
    success(response) {
      console.log(response)
    }, error(xhr, ajaxOptions, thrownError) {
      console.log(JSON.stringify(state));
      console.log('errors', xhr.status + ': ' + thrownError);
    }
  })

  return state;
}

export default handleActions({
  'set_device_type' (state, action) {
    //localStorage.device_type = action.payload;
    return state.set('device_type', action.payload)
  },
  'set_device_model' (state, action) {
    return state.set('device_model', action.payload)
  },
  'set_device_serial_no' (state, action) {
    return state.set('device_serial_no', action.payload)
  },
  'set_device_screen_size' (state, action) {
    return state.set('device_screen_size', action.payload)
  },
  'set_contact_name' (state, action) {
    return state.set('contact_name', action.payload)
  },
  'set_contact_email' (state, action) {
    return state.set('contact_email', action.payload)
  },
  'submit_ticket' (state, action) {
    return submitTicket(state)
  }
}, initialState)
