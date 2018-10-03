import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  avatar: {
    fontSize: 44,
    marginTop: 10,
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 10,
    paddingTop: 6,
    paddingRight: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    border: '1px solid black',
    borderRadius: '50%',
  },
});

const Avatar = ({ Icon, classes }) => <Icon className={classes.avatar} />;

Avatar.propTypes = {
  Icon: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    avatar: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(Avatar);
