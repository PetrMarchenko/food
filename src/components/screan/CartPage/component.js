import React, { useEffect } from 'react';
import { useStyles } from './stylesComponent';
import Container from '@material-ui/core/Container';
import * as PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import FooterCart from './FooterCart/component';
import ItemCart from './ItemCart';

const CartPage = props => {
  const classes = useStyles();

  const {
    fetchCart,
    carts,
  } = props;

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <List dense className={classes.root}>
        {carts.map(food => {
          return (
            <ItemCart key={food.id}
                      food={food}
            />
          );
        })}
        <FooterCart
          carts={carts}
        />
      </List>
    </Container>
  );
};

CartPage.propTypes = {
  fetchCart: PropTypes.func,
  carts    : PropTypes.array
};

export default CartPage;
