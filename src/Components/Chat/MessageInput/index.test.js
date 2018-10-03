import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import MessageInput from './index';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {
  users: {
    user: {},
  },
  chat: {
    inputValue: '',
  },
};
const store = mockStore(initialState);

it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MessageInput store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
