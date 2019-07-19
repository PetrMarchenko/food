import React, { useState, useEffect } from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Chip from "@material-ui/core/Chip";
import {useStyles} from './stylesComponent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import * as PropTypes from 'prop-types';

const CartPage = props => {
    const classes = useStyles();
    const {
        fetchCart,
        carts
    } = props;

    useEffect(() => {
        fetchCart();
        console.log('ddsfd');
    }, [fetchCart]);

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {carts.map(food => (
                    <Grid item key={food.id} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={food.src}
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {food.name}
                                </Typography>
                                <Typography>
                                    {food.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Chip label={'$' + food.price} color="primary" />
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

CartPage.propTypes = {
    fetchCart: PropTypes.func,
    carts: PropTypes.array
};

export default CartPage;