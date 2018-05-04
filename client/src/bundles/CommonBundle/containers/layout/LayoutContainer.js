import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Layout from '../../components/layout/Layout';
import { userSignOutAction } from '../../../AuthenticationBundle/reducers/authenticationReducer';

const mapDispatchToProps = dispatch =>
  bindActionCreators({ userSignOutAction }, dispatch);

export default connect(null, mapDispatchToProps)(Layout);
