import { connect } from 'react-redux';
import ItemCart from './component';
import { deleteWithCartAction, editCartAction, fetchCartAction } from 'store/carts/actions';

const mapStateToProps = state => ({
  carts: state.cartsReducer.carts,
});

const mapDispatchToProps = {
  editCart      : editCartAction,
  fetchCart     : fetchCartAction,
  deleteWithCart: deleteWithCartAction
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCart);