import ticketReducers from './ticketReducers'
import {routerReducer } from 'react-router-redux'
import {combineReducers} from 'redux'

import storage             from 'redux-storage';

// export default combineReducers({
//   counter
// });

const rootReducer = combineReducers({
  routing: routerReducer,
  ticketReducers
})

// const rootReducer = combineReducers({
//   counter
// });

export default storage.reducer(rootReducer);


// export default combineReducers({
//   routing: routerReducer,
//   ticketReducers
// })
