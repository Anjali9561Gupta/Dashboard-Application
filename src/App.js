import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Dashboard from './Dashboard';
import SearchBar from './SearchBar';
import "./index.css";

const App = () => (
  <Provider store={store}>
    <div>
      <SearchBar />
      <Dashboard />
    </div>
  </Provider>
);

export default App;