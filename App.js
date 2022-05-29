import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import {store} from 'store'
import AppNavigator from 'navigator/AppNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}
