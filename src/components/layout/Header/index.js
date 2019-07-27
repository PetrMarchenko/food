import { connect } from 'react-redux';
import HeadPage from './component';
import {fetchCartAction} from "store/carts/actions";

const mapStateToProps = state => ({
    carts: state.cartsReducer.carts,
    token: state.authReducer.token,
});

const mapDispatchToProps = {
    fetchCart: fetchCartAction
};

export default connect(mapStateToProps, mapDispatchToProps)(HeadPage);