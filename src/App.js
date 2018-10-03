import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Users from './Components/Users';
import Chat from './Components/Chat';
import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const styles = () => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
});

const mapStateToProps = ({ users }) => ({
  user: users.user,
});

const ConnectedApp = connect(mapStateToProps)(
  ({ user }) => (user ? <Chat /> : <Users />),
);

ConnectedApp.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    avatar: PropTypes.element,
  }),
};

ConnectedApp.defaultProps = {
  user: null,
};

const App = ({ classes }) => (
  <Provider store={store}>
    <div className={classes.app}>
      <ConnectedApp />
    </div>
  </Provider>
);

App.propTypes = {
  classes: PropTypes.shape({
    app: PropTypes.string,
  }).isRequired,
};

export default compose(withStyles(styles))(App);
