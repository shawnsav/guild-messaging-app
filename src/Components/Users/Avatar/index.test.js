import React from 'react';
import ReactDOM from 'react-dom';
import DoneIcon from '@material-ui/icons/Done';
import Avatar from './index';

it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Avatar Icon={DoneIcon} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
