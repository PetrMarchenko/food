import { connect } from 'react-redux';
import UsersPage from './component';
import { fetchUserAdminAction } from 'store/admin/users/actions';


const mapStateToProps = state => ({
  users: state.usersAdminReducer.users,
});

const mapDispatchToProps = {
  fetchUserAdmin: fetchUserAdminAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);