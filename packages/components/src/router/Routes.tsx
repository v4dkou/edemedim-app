import React from "react";
import { RouteScreen } from "../screens/route";
import { Route, Router, Switch } from "./index";
import {Main} from './layout';
import {RouteTicketsScreen} from '../screens/routetickets';

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/tickets" component={RouteTicketsScreen} />
        <Route exact path="/route" component={RouteScreen} />
        {/*<Route*/}
          {/*exact*/}
          {/*path="/workout/:year/:month/:day"*/}
          {/*component={CurrentWorkout}*/}
        {/*/>*/}
      </Switch>
    </Router>
  );
};
