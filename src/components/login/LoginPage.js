import React from 'react';
import DocumentTitle from 'react-document-title';
import { connect } from "react-redux";
import {browserHistory} from 'react-router';

import { login } from '../../actions/loginActions';

class LoginPage extends React.Component {


    constructor(props, context){
        super(props, context);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            userName : '',
            password: ''
        }
    }

    handleNameChange(event){
        this.setState({userName: event.target.value});
    }

    handlePasswordChange(event){
        this.setState({password: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        let { userName, password } = this.state;
        if(userName && password){
            //dispatch action
            this.props.dispatch(login(userName, password));
        }else{
            alert("Please provide userName and password");
        }
    }

    componentWillReceiveProps(nextProps){
        let { loginInfo } = nextProps;
        if(loginInfo && loginInfo.isValid) {
            browserHistory.push('/search');
        }else{
            //invalid user Name password
        }
    }


    render() {
        return (
            <DocumentTitle title={`Login`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h3>Login</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <form className="form-horizontal" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label for="inputEmail3" className="col-sm-2 control-label">Email</label>
                                <div className="col-sm-6">
                                    <input type="text" onChange={this.handleNameChange} className="form-control" id="user-name" placeholder="User Name"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputPassword3" className="col-sm-2 control-label">Password</label>
                                <div className="col-sm-6">
                                    <input type="password" onChange={this.handlePasswordChange} className="form-control" id="password" placeholder="Password"/>
                                </div>
                            </div>
                            <div className="form-group">
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button type="submit" onClick="" className="btn btn-default">Sign in</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </DocumentTitle>
        );
    }
}

function mapStateToProps(state,ownProps){
    return {
          loginInfo : state.login
    };
}


export default connect(mapStateToProps)(LoginPage);