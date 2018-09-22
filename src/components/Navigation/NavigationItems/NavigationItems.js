import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      Comanda
    </NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem link="/orders">Comenzi</NavigationItem>
    ) : null}
    {props.isAuthenticated ? (
      <NavigationItem link="/logout">Deconectare</NavigationItem>
    ) : (
      <NavigationItem link="/auth">Autentificare</NavigationItem>
    )}
  </ul>
);

export default navigationItems;
