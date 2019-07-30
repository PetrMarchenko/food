import { connect } from 'react-redux';
import FoodPage from './component';
import { addToCartAction, editCartAction } from 'store/carts/actions';
import { fetchFoodAction } from 'store/foods/actions';

const mapStateToProps = state => ({
  foods: state.foodsReducer.foods,
  carts: state.cartsReducer.carts,
});

const mapDispatchToProps = {
  fetchFood: fetchFoodAction,
  addToCart: addToCartAction,
  editCart : editCartAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodPage);