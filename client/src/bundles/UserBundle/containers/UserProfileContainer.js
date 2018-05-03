import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserProfileContainer extends Component {

    componentDidMount() {

    }

    render() {
        return <div>UserProfileContainer</div>
    }

}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer);
