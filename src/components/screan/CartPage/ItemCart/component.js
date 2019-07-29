import React from 'react';
import {useStyles} from './stylesComponent';
import * as PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from "@material-ui/core/Button";
import DeleteSweep from '@material-ui/icons/DeleteSweep';
import TextField from '@material-ui/core/TextField';

const ItemCart = props => {
    const classes = useStyles();

    const {
        editCart,
        deleteWithCart,
        food
    } = props;

    const convertToInt = (value, defaultValue) => {
        const count = parseInt(value);
        return (count === value)
            ? count
            : count > 0 ? count : defaultValue;
    };

    const handleChange = (food) => event => {
        food.count = convertToInt(event.target.value, '');
        editCart(food);
        /* TODO send only id and count */
        // editCart({
        //     "id" : food.id,
        //     "count" : convertToInt(event.target.value, '')
        // });
    };

    const deleteFoodWithCart = (food) => {
        console.log('deleteFoodFromCart', food);
        deleteWithCart(food)
    };

    const labelId = `checkbox-list-name-label-${food.id}`;
    return (
        <ListItem key={food.id} button>
            <ListItemAvatar>
                <Avatar
                    alt={food.name}
                    src={food.src}
                />
            </ListItemAvatar>
            <ListItemText
                id={labelId}
                primary={food.name}
                className={classes.textField}
            />
            <ListItemText id={labelId} >
                <TextField
                    id="standard-number"
                    label="count"
                    value={food.count}
                    onChange={handleChange(food)}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                />

                <TextField
                    id="standard-read-only-input"
                    label="price"
                    value={ food.price}
                    className={classes.textField}
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />

                <TextField
                    id="standard-read-only-input"
                    label="total"
                    value={ food.price * food.count}
                    className={classes.textField}
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />

            </ListItemText>
            <ListItemSecondaryAction>
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
};

ItemCart.propTypes = {
    editCart: PropTypes.func,
    deleteWithCart: PropTypes.func,
    food: PropTypes.object
};

export default ItemCart;