import { connect } from 'react-redux';
import Login from './component';
import {logOutAction} from "store/auth/actions";

const mapStateToProps = state => ({
    token: state.authReducer.token,
    userRole: state.authReducer.role,
});

const mapDispatchToProps = {
    logOut: logOutAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);