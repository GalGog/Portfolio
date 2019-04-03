import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AboutMe from './aboutme';



const Main = () => (
    <Switch>
        <Route path="/aboutme" component={AboutMe} />
    </Switch>
);

export default Main;
