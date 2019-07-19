import { connect } from 'react-redux';
import CartPage from './component';
import {deleteWithCart, fetchCart,} from 'store/carts/actions';

const mapStateToProps = state => ({
    carts: state.cartsReducer.carts,
});

const mapDispatchToProps = {
    fetchCart: fetchCart,
    deleteWithCart: deleteWithCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);