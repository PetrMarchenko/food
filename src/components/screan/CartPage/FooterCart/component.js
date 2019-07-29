import React, {useEffect} from 'react';

import {useStyles} from './stylesComponent';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const FooterCart = props => {
    const classes = useStyles();

    const {
        carts
    } = props;

    const [total, setTotal] = React.useState(0);

    const getTotal = (carts) =>  {
        const newTotal = carts.reduce(function(sum, current) {
            return sum + (current.price * current.count);
        }, 0);
        setTotal(newTotal);
    };

    useEffect(() => {
        getTotal(carts);
    }, [getTotal]);

    if (total === 0) {
        return '';
    }

    return (
        <ListItem button>
            <ListItemText >
                <TextField
                    id="standard-read-only-input"
                    label="total"
                    value={ total }
                    className={classes.textField}
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </ListItemText>
            <ListItemSecondaryAction>
                <Button
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                >
                    Buy
                </Button>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default FooterCart;