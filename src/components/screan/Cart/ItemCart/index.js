import { connect } from 'react-redux';
import ItemCart from './component';
import {deleteWithCart, fetchCart, editCart} from 'store/carts/actions';

const mapStateToProps = state => ({
    carts: state.cartsReducer.carts,
});

const mapDispatchToProps = {
    editCart: editCart,
    fetchCart: fetchCart,
    deleteWithCart: deleteWithCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCart);