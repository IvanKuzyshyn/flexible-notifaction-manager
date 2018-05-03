import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './App.css';
import { store, persistor } from './store';
import Routes from './routes';
import Bootstrapping from './bundles/CommonBundle/components/layout/Bootstrapping';
import UserContextProvider from './bundles/UserBundle/context/UserContextProvider';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<Bootstrapping />} persistor={persistor}>
      <React.StrictMode>
        <UserContextProvider>
          <Routes />
        </UserContextProvider>
      </React.StrictMode>
    </PersistGate>
  </Provider>
);

export default App;
