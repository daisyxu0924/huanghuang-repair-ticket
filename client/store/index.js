
import { createStore, applyMiddleware } from 'redux'

import { logger } from '../middleware'
import rootReducer from '../reducers'

import storage from 'redux-storage'

import createEngine from 'redux-storage-engine-localstorage';
// const engine = createEngine('my-save-key');
//
// engine = storage.decorators.immutablejs(engine, [
//   ['device_type']
// ]);

const engine = createEngine('my-save-key');

const storageMiddleware = storage.createMiddleware(engine);

const create = window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore

const createStoreWithMiddleware = applyMiddleware(
  logger, storageMiddleware
)(create)

export default function configure(initialState) {

  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  const load = storage.createLoader(engine);

  load(store)
    .then((newState) => console.log('Loaded state:', newState))
    .catch(() => console.log('Failed to load previous state'));


  return store
}
