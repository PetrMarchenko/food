import { connect } from 'react-redux';
import FoodPage from './component';
import { createFood } from 'store/foods/actions';

const mapStateToProps = state => ({
    foods: state.foodsReducer.foods,
});

const mapDispatchToProps = {
    createFood: createFood,
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodPage);