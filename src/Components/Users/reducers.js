import { handleActions } from 'redux-actions';
import { SET_USER } from './actions';
import users from '../../constants/users';

const initialState = {
  allUsers: users,
  user: null,
  friend: null,
};

const reducer = handleActions(
  {
    [SET_USER]: (state, { payload }) => ({ ...state, user: payload }),
  },
  initialState,
);

export default reducer;
