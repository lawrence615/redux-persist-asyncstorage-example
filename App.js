import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import {store, persistor} from 'store'
import AppNavigator from 'navigator/AppNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator/>
      </PersistGate>
    </Provider>
  );
}
