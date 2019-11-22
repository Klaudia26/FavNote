import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import Button from '../Button/Button';
import styles from './Header.module.scss';
import logoImage from '../../assets/images/logo.svg';

const Header = ({ openModalFn }) => (
  <header className={styles.wrapper}>
    {/* <img src={logoImage} alt="FavNote" /> */}
    <img className={styles.logo} src={logoImage} alt="FavNote logo" />
    <div>
      <HeaderNavigation />
    </div>
    <Button onClick={openModalFn} secondary>
      new item
    </Button>
  </header>
);

export default Header;
