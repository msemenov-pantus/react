import React from "react";
import HomePage from "pages/HomePage"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
export  const  RouteConfig:React.SFC = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path="/about">
                    <HomePage/>
                </Route>
                <Route exact path="/">

                </Route>
                <Route exact path="*">
                    <div>404</div>
                </Route>
            </Switch>
        </Router>
    )
}