import PropTypes from 'prop-types';

export const userPropType = PropTypes.shape({
  userId: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.component,
});

export const userPropDefault = {};

export const messagesPropType = PropTypes.arrayOf(PropTypes.object);

export const messagesPropDefault = [];
