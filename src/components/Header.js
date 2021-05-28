import React from 'react';
import { Switch, Route } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Switch>
                <Route exact path="/">
                    Pick your move!
                </Route>
                <Route path="/game">
                    Here's the results!
                </Route>
            </Switch>
        </div>
    );
}

export default Header;