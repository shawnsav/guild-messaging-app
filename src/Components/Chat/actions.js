import { createAction } from 'redux-actions';

export const UPDATE_MESSAGE_INPUT_VALUE = 'chat/UPDATE_MESSAGE_INPUT_VALUE';
export const updateMessageInputValue = createAction(UPDATE_MESSAGE_INPUT_VALUE);

export const SENDING_MESSAGE = 'chat/SENDING_MESSAGE';
export const sendingMessage = createAction(SENDING_MESSAGE);

export const MESSAGE_SENT = 'chat/MESSAGE_SENT';
export const sentMessage = createAction(MESSAGE_SENT);

export const CONNECTING = 'chat/CONNECTING';
export const connecting = createAction(CONNECTING);

export const CONNECTED = 'chat/CONNECTED';
export const connected = socket => ({
  socket,
  type: CONNECTED,
});

export const SET_SOCKET = 'chat/SET_SOCKET';
export const setSocket = socket => ({
  socket,
  type: SET_SOCKET,
});

export const DISCONNECTED = 'chat/DISCONNECTED';
export const disconnected = createAction(DISCONNECTED);

export const MESSAGE_RECEIVED = 'chat/MESSAGE_RECEIVED';
export const messageReceived = createAction(MESSAGE_RECEIVED);
