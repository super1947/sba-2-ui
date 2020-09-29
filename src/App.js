import React from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import store from './store/index';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <div id="root">
        <TodoInput />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
