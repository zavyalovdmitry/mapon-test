import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/home';

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
