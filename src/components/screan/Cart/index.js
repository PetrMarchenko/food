import { connect } from 'react-redux';
import CartPage from './component';
import {fetchCart} from 'store/carts/actions';

const mapStateToProps = state => ({
    carts: state.cartsReducer.carts,
});

const mapDispatchToProps = {
    fetchCart: fetchCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);