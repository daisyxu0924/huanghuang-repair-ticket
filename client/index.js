
import { Router, Route, useRouterHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import { createHashHistory } from 'history'
import { render } from 'react-dom'
import React from 'react'
import App from './containers/App'
import Master from './containers'
import configure from './store'
import DeviceInfo from './containers/DeviceInfo'

const store = configure();
const cleanHashHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const history = syncHistoryWithStore(cleanHashHistory, store);

let reactElement = document.getElementById('root');
render(
 <Provider store={store}>
   <Router history={history}>
     <Route path="/" component={Master}>
       <IndexRoute component={App} />
       <Route path="/deviceInfo" component={DeviceInfo} />
     </Route>
   </Router>
 </Provider>,
 reactElement
);
