import { connect } from 'react-redux';
import CartPage from './component';
import { fetchCartAction } from 'store/carts/actions';

const mapStateToProps = state => ({
    carts: state.cartsReducer.carts,
});

const mapDispatchToProps = {
    fetchCart: fetchCartAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);