import {
  createStore,
  compose, applyMiddleware
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import saga from './saga'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(saga)

export { store }
