import React , { PropTypes } from "react";
import DocumentTitle from 'react-document-title';

class HomePage extends React.Component{
    render() {
        return(
            <DocumentTitle title={`Home`}>
                <h1>Home</h1>
            </DocumentTitle>
        );
    }
}

export default HomePage;