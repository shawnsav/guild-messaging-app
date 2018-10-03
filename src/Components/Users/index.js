import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import { map, partial } from 'lodash';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { setUser } from './actions';

const styles = () => ({
  container: {
    marginRight: 'auto',
    marginLeft: 'auto',
    width: 160,
  },
});

const Users = ({ allUsers, handleSelection, classes }) => (
  <Paper className={classes.container}>
    <GridList cellHeight={80} col={2}>
      {map(allUsers, user => (
        <GridListTile
          key={user.id}
          cols={1}
          onClick={partial(handleSelection, user)}
        >
          {user.avatar}
        </GridListTile>
      ))}
    </GridList>
  </Paper>
);

Users.propTypes = {
  allUsers: PropTypes.arrayOf(PropTypes.shape).isRequired,
  classes: PropTypes.shape({
    container: PropTypes.string,
  }).isRequired,
  handleSelection: PropTypes.func.isRequired,
};

const mapStateToProps = ({ users }) => ({
  allUsers: users.allUsers,
});

const mapDispatchToProps = dispatch => ({
  handleSelection: user => {
    dispatch(setUser(user));
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Users);
