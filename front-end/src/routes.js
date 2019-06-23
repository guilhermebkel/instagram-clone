import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import New from './pages/New';

function Routes() {
    return(
        <Switch>
            <Route path="/Fake-Instagram" exact component={Feed} />
            <Route path="/Fake-Instagram/new" component={New} />
        </Switch>
    );
}

export default Routes;