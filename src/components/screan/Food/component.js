import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

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

        return (
            <div>
                Food Page
                <br/>
                <input
                    ref={this.nameFood}
                />
                <br/>
                <button onClick={()=> this.createFood()} >
                    add food
                </button>
                <ul>
                    { foods.map((value) => {
                        return <li key={value.id}>{value.name}</li>
                    })}
                </ul>
            </div>
        );
    }
}
