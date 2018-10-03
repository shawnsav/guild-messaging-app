import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Chat from './index';
import * as actions from './actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {
  users: {
    user: {},
  },
  chat: {
    inputValue: '',
    messages: [],
  },
};
const store = mockStore(initialState);

it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Chat />
    </Provider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});

describe('messages', () => {
  it('should update input value', () => {
    const message = 'hello';
    const action = {
      type: actions.UPDATE_MESSAGE_INPUT_VALUE,
      payload: 'hello',
    };
    expect(actions.updateMessageInputValue(message)).toEqual(action);
  });

  it('should let state know about whether it is sending or sent', () => {
    const sendingAction = {
      type: actions.SENDING_MESSAGE,
    };
    const sentAction = {
      type: actions.MESSAGE_SENT,
    };
    expect(actions.sendingMessage()).toEqual(sendingAction);
    expect(actions.sentMessage()).toEqual(sentAction);
  });
});
