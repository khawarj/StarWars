import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./components/App.js";
import Home from "./components/home/HomePage.js";
import Login from "./components/login/LoginPage.js";
import Search from "./components/search/SearchPage.js";
import EnsureLoggedInContainer from "./components/login/EnsureLoggedInContainer.js";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/search" component={Search}/>
    </Route>
);