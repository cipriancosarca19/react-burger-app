import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Sper ca a fost delicios!!!</h1>
      <div>
        <Burger ingredients={props.ingredients} />
        <Button btnType="Danger" clicked={props.checkoutCancelled}>
          REVOCA
        </Button>
        <Button btnType="Success" clicked={props.checkoutContinued}>
          CONTINUA
        </Button>
      </div>
    </div>
  );
};

export default checkoutSummary;
