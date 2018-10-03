import PropTypes from 'prop-types';
import io from 'socket.io-client';
import { lifecycle, withState, compose } from 'recompose';
import { connect } from 'react-redux';
import {
  connecting,
  connected,
  disconnected,
  setSocket,
  messageReceived,
} from '../actions';

const socket = io('http://localhost:9000');

const withSocketConnection = lifecycle({
  componentDidMount() {
    const {
      connectingToSocket,
      connectedToSocket,
      disconnectedFromSocket,
      storeSocket,
      receiveMessage,
    } = this.props;
    storeSocket(socket);
    connectingToSocket();
    socket.on('connection', connectedToSocket);
    socket.on('disconnect', disconnectedFromSocket);
    socket.on('broadcast', receiveMessage);
    socket.connect('http://localhost:9000');
  },
});

withSocketConnection.propTypes = {
  userId: PropTypes.string.isRequired,
  friendId: PropTypes.string.isRequired,
};

const mapStateToProps = ({ users }) => ({
  user: users.user,
  friend: users.friend,
});

const mapDispatchToProps = dispatch => ({
  connectingToSocket: () => {
    dispatch(connecting());
  },
  connectedToSocket: () => {
    dispatch(connected(socket));
  },
  storeSocket: socketInstance => {
    dispatch(setSocket(socketInstance));
  },
  disconnectedFromSocket: () => {
    dispatch(disconnected());
  },
  receiveMessage: message => {
    dispatch(messageReceived(message));
  },
});

export default compose(
  withState('userId', 'friendId'),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withSocketConnection,
);
