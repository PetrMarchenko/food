import { connect } from 'react-redux';
import FoodPage from './component';
import { createFood, fetchFood } from 'store/foods/actions';
import { pushToCart } from 'store/carts/actions';

const mapStateToProps = state => ({
    foods: state.foodsReducer.foods,
});

const mapDispatchToProps = {
    createFood: createFood,
    fetchFood: fetchFood,
    pushToCart: pushToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodPage);