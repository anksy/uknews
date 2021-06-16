import React from "react";
import { Switch, Route } from "react-router-dom";

import NewsContainer from "../containers/news/index.container";
import E404 from "../components/common/errors/404";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact>
                <NewsContainer />
            </Route>
            <Route>
                <E404 />
            </Route>
        </Switch>
    )
}