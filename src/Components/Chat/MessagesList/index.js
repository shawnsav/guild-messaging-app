import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { map, get, isEqual, isNil, find } from 'lodash';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {
  userPropType,
  userPropDefault,
  messagesPropType,
  messagesPropDefault,
} from '../../../constants/propTypes';

const styles = theme => ({
  container: {
    flex: 1,
    clear: 'both',
    height: '90vh',
    overflowX: 'hidden',
  },
  userMessage: {
    textAlign: 'right',
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
  },
  friendMessage: {
    backgroundColor: theme.palette.secondary.main,
  },
  message: {
    color: '#fff',
    fontWeight: 600,
    fontSize: 16,
  },
});

class MessagesList extends Component {
  static propTypes = {
    messages: messagesPropType,
    user: userPropType,
    allUsers: PropTypes.arrayOf(PropTypes.object),
    classes: PropTypes.shape({
      container: PropTypes.string,
    }).isRequired,
  };

  static defaultProps = {
    messages: messagesPropDefault,
    user: userPropDefault,
    allUsers: [],
  };

  listElement = React.createRef();

  componentDidUpdate() {
    const { current } = this.listElement;
    current.scrollTop = current.scrollHeight;
  }

  render() {
    const { messages, user, allUsers, classes } = this.props;

    return (
      <div className={classes.container} ref={this.listElement}>
        <List>
          {map(messages, (message, index) => (
            <ListItem
              key={index}
              className={
                isEqual(get(user, 'id'), get(message, 'from.id'))
                  ? classes.userMessage
                  : classes.friendMessage
              }
              divider
            >
              <ListItemText
                classes={{ root: classes.message }}
                primary={get(message, 'body', '')}
                inset
              />

              {!isNil(get(message, 'from.id')) && (
                <ListItemIcon>
                  {get(
                    find(allUsers, { id: get(message, 'from.id') }),
                    'avatar',
                  )}
                </ListItemIcon>
              )}
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

MessagesList.propTypes = {
  messages: messagesPropType,
  user: userPropType,
  allUsers: PropTypes.arrayOf(PropTypes.object),
  classes: PropTypes.shape({
    container: PropTypes.string,
  }).isRequired,
};

MessagesList.defaultProps = {
  messages: messagesPropDefault,
  user: userPropDefault,
  allUsers: [],
};

export default withStyles(styles)(MessagesList);
