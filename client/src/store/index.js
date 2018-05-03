import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';
import { storagePersistConfig } from '../config/storagePersist';

const sagaMiddleware = createSagaMiddleware();
// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(applyMiddleware(sagaMiddleware));
const persistedReducer = persistReducer(storagePersistConfig, rootReducer);
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
