import React, {useEffect } from 'react';

import Chip from "@material-ui/core/Chip";
import {useStyles} from './stylesComponent';
import Container from '@material-ui/core/Container';
import * as PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Button from "@material-ui/core/Button";
import DeleteSweep from '@material-ui/icons/DeleteSweep';

const CartPage = props => {
    const classes = useStyles();
    const {
        fetchCart,
        carts,
        deleteWithCart
    } = props;

    useEffect(() => {
        fetchCart();
        console.log('useEffect fetchCart');
    }, [fetchCart]);

    const [checked, setChecked] = React.useState([1, 2, 3]);

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const deleteFoodWithCart = (food) => {
        console.log('deleteFoodFromCart', food);
        deleteWithCart(food)
    };

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <List dense className={classes.root}>
                {carts.map(food => {
                    const labelId = `checkbox-list-name-label-${food.id}`;
                    return (
                        <ListItem key={food.id} button>
                            <ListItemAvatar>
                                <Avatar
                                    alt={food.name}
                                    src={food.src}
                                />
                            </ListItemAvatar>
                            <ListItemText id={labelId} primary={food.name} />
                            <ListItemText id={labelId} >
                              <Chip label={'$' + food.price} color="primary" />
                            </ListItemText>
                            <ListItemSecondaryAction>
                                <Checkbox
                                    edge="end"
                                    onChange={handleToggle(food.id)}
                                    checked={checked.indexOf(food.id) !== -1}
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                                <Button
                                    size="small"
                                    color="primary"
                                    onClick={ () => deleteFoodWithCart(food)}
                                >
                                    <DeleteSweep/>
                                </Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })}
            </List>
        </Container>
    );
};

CartPage.propTypes = {
    fetchCart: PropTypes.func,
    carts: PropTypes.array
};

export default CartPage;