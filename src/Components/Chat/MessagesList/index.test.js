import React from 'react';
import ReactDOM from 'react-dom';
import MessagesList from './index';

it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MessagesList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
