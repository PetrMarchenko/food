import React, { useState, useEffect } from 'react';
import {Card, CardContent, CardMedia, Container} from "components/screan/Food/stylesComponent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";

function CartPage(props) {

    const {
        fetchCart,
        carts
    } = props;

    useEffect(() => {
        fetchCart();
        console.log('ddsfd');
    }, [fetchCart]);

    return (
        <Container maxWidth="md">
            {console.log(carts)}
            <Grid container spacing={4}>
                {carts.map(food => (
                    <Grid item key={food.id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                image={food.src}
                                title="Image title"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {food.name}
                                </Typography>
                                <Typography>
                                    {food.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Chip label={'$' + food.price} color="primary" />
                                <Button size="small" color="primary">
                                    Edit
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default CartPage;