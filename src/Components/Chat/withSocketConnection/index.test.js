import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import withSocketConnection from './index';

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
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>{withSocketConnection(Component)}</Provider>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
