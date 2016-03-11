import { createAction } from 'redux-actions'
import * as actionTypes from './actionType'

export const setDeviceType = createAction(actionTypes.SET_DEVICE_TYPE)
export const setDeviceModel = createAction(actionTypes.SET_DEVICE_MODEL)
export const setDeviceSerialNo = createAction(actionTypes.SET_DEVICE_SERIAL_NO)
export const setDeviceScreenSize = createAction(actionTypes.SET_DEVICE_SCREEN_SIZE)
export const setContactName = createAction(actionTypes.SET_CONTACT_NAME)
export const setContactEmail = createAction(actionTypes.SET_CONTACT_EMAIL)
export const submitTicket = createAction(actionTypes.SUBMIT_TICKET)
