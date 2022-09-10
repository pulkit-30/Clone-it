import React from 'react';
import Classes from './Search.module.css';
import logo from '../../Assets/google-logo.png';
import SearchBar from '../Ui/SearchBar';
import { Avatar } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import DescriptionIcon from '@material-ui/icons/Description';
import { Link } from 'react-router-dom';
function SearchPage() {
  return (
    <div>
      <div className={Classes.header}>
        <div className={Classes.header__box + ' flex'}>
          <div className={Classes.header__left + ' flex'}>
            <Link to='/'>
              <img src={logo} alt='logo' />
            </Link>
            <SearchBar />
          </div>
          <div className={Classes.Header__right + ' flex'}>
            <AppsIcon />

            <Avatar className={Classes.Avatar} />
          </div>
        </div>
        <div className={Classes.Header__bottom}>
          <div className={Classes.navigation + ' flex'}>
            <Link to='/search' className={Classes.active}>
              <SearchIcon className={Classes.icon} />
              All
            </Link>
            <Link to='/search/image' className={Classes.active}>
              <WallpaperIcon className={Classes.icon} />
              Images
            </Link>
            <span>
              <LocalOfferIcon className={Classes.icon} />
              News
            </span>
            <span>
              <DescriptionIcon className={Classes.icon} />
              News
            </span>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
}

export default SearchPage;
