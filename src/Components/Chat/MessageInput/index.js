import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { partial, isEqual } from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';
import {
  updateMessageInputValue,
  sendingMessage,
  sentMessage,
} from '../actions';
import { userPropType } from '../../../constants/propTypes';

const styles = () => ({
  container: {
    height: 56,
    width: '100%',
    paddingTop: 12,
    paddingBottom: 12,
    overflow: 'hidden',
    position: 'absolute',
    zIndex: 500,
  },
  buttonWrapper: {
    paddingTop: 12,
    paddingBottom: 12,
  },
});

const MessageInput = ({
  user,
  friend,
  inputValue,
  socket,
  handleChange,
  handleSend,
  handleKeyUp,
  classes,
}) => (
  <Paper className={classes.container}>
    <Grid container spacing={24} justify="center">
      <Grid item xs={9}>
        <TextField
          value={inputValue}
          variant="outlined"
          fullWidth
          onChange={handleChange}
          onKeyUp={partial(
            handleKeyUp,
            { body: inputValue, from: user, to: friend },
            socket,
          )}
        />
      </Grid>
      <div className={classes.buttonWrapper}>
        <Button
          aria-label="Send"
          variant="fab"
          color="primary"
          onClick={partial(
            handleSend,
            { body: inputValue, from: user, to: friend },
            socket,
          )}
        >
          <SendIcon />
        </Button>
      </div>
    </Grid>
  </Paper>
);

MessageInput.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSend: PropTypes.func.isRequired,
  handleKeyUp: PropTypes.func.isRequired,
  user: userPropType.isRequired,
  friend: userPropType,
  socket: PropTypes.shape({
    emit: PropTypes.func,
  }),
  classes: PropTypes.shape({
    container: PropTypes.string,
  }).isRequired,
};

MessageInput.defaultProps = {
  friend: null,
  socket: null,
};

const mapStateToProps = ({ users, chat }) => ({
  inputValue: chat.inputValue,
  user: users.user,
  friend: users.friend,
  socket: chat.socket,
});

const mapDispatchToProps = dispatch => ({
  handleChange: ({ currentTarget }) => {
    dispatch(updateMessageInputValue(currentTarget.value));
  },
  handleKeyUp: (message, socket, event) => {
    if (!isEqual(event.key, 'Enter')) return;
    dispatch(sendingMessage());
    socket.emit('newMessage', message);
    dispatch(sentMessage());
  },
  handleSend: (message, socket) => {
    dispatch(sendingMessage());
    socket.emit('newMessage', message);
    dispatch(sentMessage());
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(MessageInput);
