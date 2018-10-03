import React from 'react';
import Plane from '@material-ui/icons/Flight';
import Cloud from '@material-ui/icons/FilterDrama';
import Martini from '@material-ui/icons/LocalBar';
import Mountain from '@material-ui/icons/Terrain';
import Train from '@material-ui/icons/Train';
import Bug from '@material-ui/icons/BugReport';
import Avatar from '../Components/Users/Avatar';

const users = [
  {
    id: 'user-0',
    name: 'Plane',
    avatar: <Avatar Icon={Plane} />,
  },
  {
    id: 'user-1',
    name: 'Cloud',
    avatar: <Avatar Icon={Cloud} />,
  },
  {
    id: 'user-2',
    name: 'Martini',
    avatar: <Avatar Icon={Martini} />,
  },
  {
    id: 'user-3',
    name: 'Mountain',
    avatar: <Avatar Icon={Mountain} />,
  },
  {
    id: 'user-4',
    name: 'Train',
    avatar: <Avatar Icon={Train} />,
  },
  {
    id: 'user-5',
    name: 'Bug',
    avatar: <Avatar Icon={Bug} />,
  },
];

export default users;
