import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import withSocketConnection from './withSocketConnection';
import MessagesList from './MessagesList';
import MessageInput from './MessageInput';
import {
  userPropType,
  userPropDefault,
  messagesPropType,
  messagesPropDefault,
} from '../../constants/propTypes';

const Chat = ({ messages, user, allUsers }) => (
  <div>
    <MessagesList messages={messages} user={user} allUsers={allUsers} />
    <MessageInput />
  </div>
);

Chat.propTypes = {
  messages: messagesPropType,
  user: userPropType,
  allUsers: PropTypes.arrayOf(PropTypes.object),
};

Chat.defaultProps = {
  messages: messagesPropDefault,
  user: userPropDefault,
  allUsers: [],
};

const mapStateToProps = ({ chat, users }) => ({
  messages: chat.messages,
  user: users.user,
  allUsers: users.allUsers,
});

export default compose(
  connect(mapStateToProps),
  withSocketConnection,
)(Chat);
