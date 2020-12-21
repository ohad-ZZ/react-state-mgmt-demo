import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import saga from './saga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(saga)

export { store }
