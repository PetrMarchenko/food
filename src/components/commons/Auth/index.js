import { connect } from 'react-redux';
import Auth from './component';

const mapStateToProps = state => ({
  userRole: state.authReducer.role,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);