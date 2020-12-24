import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  sideNav: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function SideNav() {
  const classes = useStyles();
  return (
    <div>
      <IconButton aria-label="delete">
        <MenuIcon />
      </IconButton>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </div>
  );
}

export default SideNav;
