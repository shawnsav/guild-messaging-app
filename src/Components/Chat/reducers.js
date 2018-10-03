import { handleActions } from 'redux-actions';
import {
  UPDATE_MESSAGE_INPUT_VALUE,
  MESSAGE_SENT,
  MESSAGE_RECEIVED,
  SET_SOCKET,
  CONNECTING,
  CONNECTED,
  DISCONNECTED,
} from './actions';

const initialState = {
  inputValue: '',
  messages: [],
  socket: null,
  connecting: false,
};

const reducer = handleActions(
  {
    [CONNECTING]: state => ({ ...state, connecting: true }),
    [CONNECTED]: (state, { socket }) => ({
      ...state,
      socket,
      connecting: false,
    }),
    [DISCONNECTED]: state => ({ ...state, connected: null }),
    [SET_SOCKET]: (state, { socket }) => ({ ...state, socket }),
    [UPDATE_MESSAGE_INPUT_VALUE]: (state, { payload }) => ({
      ...state,
      inputValue: payload,
    }),
    [MESSAGE_SENT]: state => ({
      ...state,
      inputValue: initialState.inputValue,
    }),
    [MESSAGE_RECEIVED]: (state, { payload }) => ({
      ...state,
      messages: state.messages.concat(payload),
    }),
  },
  initialState,
);

export default reducer;
