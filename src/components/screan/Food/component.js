import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from './cardMedia';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { useStyles } from './useStyles';


export default class FoodPage extends Component {
    static propTypes = {
        foods: PropTypes.array,

        createFood : PropTypes.func,
    };

    constructor(props) {
        super(props);
        this.createFood = this.createFood.bind(this);
        this.nameFood = React.createRef();


    }

    createFood = () => {
        let data = {
            name: this.nameFood.current.value
        };
        this.props.createFood(data);
    };

    render() {
        const { foods } = this.props;
        const classes = useStyles;

        return (
                <main>
                    <Container className={classes.cardGrid} maxWidth="md">
                        {/* End hero unit */}
                        <Grid container spacing={4}>
                            {foods.map(card => (
                                <Grid item key={card.id} xs={12} sm={6} md={4}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            image="/image.jpg"
                                            title="Image title"
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Heading
                                            </Typography>
                                            <Typography>
                                                This is a media card. You can use this section to describe the content.
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                View
                                            </Button>
                                            <Button size="small" color="primary">
                                                Edit
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </main>
        );
    }
}











// {/*Food Page*/}
// {/*<br/>*/}
// {/*<input*/}
// {/*    ref={this.nameFood}*/}
// {/*/>*/}
// {/*<br/>*/}
// {/*<button onClick={()=> this.createFood()} >*/}
// {/*    add food*/}
// {/*</button>*/}
// {/*<ul>*/}
// {/*    { foods.map((value) => {*/}
// {/*        return <li key={value.id}>{value.name}</li>*/}
// {/*    })}*/}
// {/*</ul>*/}