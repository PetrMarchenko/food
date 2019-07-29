import React, { useEffect } from 'react';
import * as PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {useStyles} from './stylesComponent';
import WrapInBadge from 'components/commons/WrapInBadge/component'

const FoodPage = props => {
    const classes = useStyles();
    const {
        fetchFood,
        foods,
        carts,
        addToCart,
        editCart
    } = props;

    useEffect(() => {
        fetchFood();
    }, [fetchFood]);

    const getCartByIdFood = (id) => {
        let cartIndex = carts.findIndex(element => element.id === id);
        return carts[cartIndex];
    };
    const countFoodInCart = (id) => {
        let cart = getCartByIdFood(id);
        return (typeof(cart) != "undefined") ? cart.count : '';
    };
    const addFoodToCart = (food) => {
        let cart = getCartByIdFood(food.id);
        if (typeof(cart) == "undefined") {
            addToCart(food);
        } else {
            cart.count = cart.count + 1;
            editCart(cart)
        }
    };

    return (
        <main>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {foods.map(food => (
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

                                    <WrapInBadge
                                        badgeColor="secondary"
                                        badgeContent={countFoodInCart(food.id)}
                                    >
                                        <Button
                                            size="small"
                                            color="primary"
                                            onClick={ () => addFoodToCart(food) }
                                        >
                                            Add
                                        </Button>
                                    </WrapInBadge>

                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
    );
};

FoodPage.propTypes = {
    fetchFood: PropTypes.func,
    pushToCart: PropTypes.func,
    foods: PropTypes.array
};

export default FoodPage;