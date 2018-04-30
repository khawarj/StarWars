import React from 'react';
import {connect} from "react-redux";
import {browserHistory} from 'react-router';

class EnsureLoggedInContainer extends React.Component {

    componentDidMount() {
        const { dispatch, currentURL, isLoggedIn } = this.props;

        if (!isLoggedIn) {
            // set the current url/path for future redirection (we use a Redux action)
            // then redirect (we use a React Router method)
            //dispatch(setRedirectUrl(currentURL));
            browserHistory.replace("/login");
        }
    }

    render() {
        const {isLoggedIn} = this.props;
        if (isLoggedIn) {
            return this.props.children;
        } else {
            return null
        }
    }
}

function mapStateToProps(state, ownProps) {
    return {
        isLoggedIn : state.login.isValid
    };
}

export default connect(mapStateToProps)(EnsureLoggedInContainer)