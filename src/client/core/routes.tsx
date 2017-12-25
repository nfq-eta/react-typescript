import * as React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router4-with-layouts';

import { HomePage } from '../pages/home/HomePage';
import { DemoPage } from '../pages/demo/DemoPage';
import { LoginPage } from '../pages/login/LoginPage';
import { DefaultLayout } from '../layouts/default/DefaultLayout';
import { EmptyLayout } from '../layouts/empty/EmptyLayout';

export const CoreRoutes = () => (
    <Switch>
        <Route path="/" component={HomePage} exact={true} layout={DefaultLayout} />
        <Route path="/demo" component={DemoPage} layout={DefaultLayout} />
        <Route path="/login" component={LoginPage} layout={EmptyLayout} />
    </Switch>
);
