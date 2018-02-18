import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, middleware);

sagaMiddleware.run(rootSaga);

export default store;
