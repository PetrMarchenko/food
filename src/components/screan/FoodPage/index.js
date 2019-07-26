import { connect } from 'react-redux';
import FoodPage from './component';
import { addToCartAction } from 'store/carts/actions';
import { fetchFoodAction } from 'store/foods/actions';

const mapStateToProps = state => ({
    foods: state.foodsReducer.foods,
});

const mapDispatchToProps = {
    fetchFood: fetchFoodAction,
    addToCart: addToCartAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodPage);