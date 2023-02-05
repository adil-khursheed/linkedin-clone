import React from 'react';
import logo from '../assets/linkedin-logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import avatar from '../assets/adil_khursheed.jpeg';


const Header = () => {
  return (
      <>
          <header className='header'>
              <nav className="navbar">
              <div className='header__left'>
                  <div className='logo'>
                      <h1>Linked</h1>
                      <img alt="LinkedIn" src={logo} />
                    </div>

                  <div className='header__search'>
                      <SearchIcon />
                      <input type='text' placeholder='Search' />
                  </div>
              </div>
              <div className='header__right'>
                  <HeaderOption Icon={HomeIcon} title='Home'/>
                  <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
                  <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                  <HeaderOption Icon={ChatIcon} title='Messaging'/>
                  <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                  <HeaderOption avatar={avatar} title='Me'/>
              </div>
              </nav>
          </header>
      </>
  )
}

export default Header