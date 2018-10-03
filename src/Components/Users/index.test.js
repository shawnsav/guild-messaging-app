import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Users from './index';
import allUsers from '../../constants/users';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {
  users: { allUsers },
};

it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Users store={mockStore(initialState)} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
