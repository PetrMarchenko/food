import { connect } from 'react-redux';
import LogInPage from './component';
import { logInAction } from 'store/auth/actions';

const mapStateToProps = state => ({
    token: state.authReducer.token,
});

const mapDispatchToProps = {
    logInAction: logInAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);