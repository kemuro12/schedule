import React from 'react';
import { connect } from 'react-redux';
import { createUser, login } from '../../redux/auth-reducer';
import Header from './Header';

const HeaderContainer = (props) => {
    return (
        <Header 
            createUser={props.createUser} 
            login={props.login} 
            isAuth={props.isAuth}
            formError={props.formError} 
            userRole={props.userRole}
        />
    )
}

const mapStateToProps = (state) => ({
    userRole: state.auth.user.role,
    isAuth: state.auth.isAuth,
    formError: state.auth.formError
})

export default connect(mapStateToProps, {createUser, login})(HeaderContainer);