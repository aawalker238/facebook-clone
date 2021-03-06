import React from 'react';
import './Header.css';

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import Add from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import StorefrontOutlined from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';
import SubscriptionsOutlined from '@material-ui/icons/SubscriptionsOutlined';
import ForumIcon from '@material-ui/icons/Forum';

import { Avatar, IconButton } from '@material-ui/core';

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
          alt="facebook logo"
        />
        <div className="header__input">
          <SearchIcon />
          <input type="search" placeholder="Seach Facebook..." />
        </div>
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>

        <div className="header__option">
          <SubscriptionsOutlined fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlined fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircle fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src="https://avatars2.githubusercontent.com/u/13881938?s=400&u=8e4913157e73479e351c6405ccae18ecb415d947&v=4" />
          <h4>Anthony</h4>
        </div>
        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
