import React from "react";
import { RouteScreen } from "../screens/route";
import { Route, Router, Switch } from "./index";
import {Main} from './layout';
import {RouteTicketsScreen} from '../screens/routetickets';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {RouteProps} from 'react-router';
import "./style.css";

const AnimatedSwitch = (props: { animationClassName: string, animationTimeout: number, children: JSX.Element[] }) => (
    <Route render={({ location }) => (
        <TransitionGroup style={{
            flex: 1,
            position: 'relative',
        }}>
            <CSSTransition
                key={location.key}
                timeout={props.animationTimeout}
                classNames={props.animationClassName}
            >
                <Switch location={location}>
                    {props.children}
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )} />
);

const AnimatedRoute = (props: RouteProps) => (
    <div className="absolute">
        <Route {...props} />
    </div>
);

export const Routes = () => {
  return (
    <Router>
      <AnimatedSwitch animationClassName="fadeLeft"
                      animationTimeout={300}>
        <AnimatedRoute exact path="/" component={RouteTicketsScreen} />
        <AnimatedRoute exact path="/route" component={RouteScreen} />
        {/*<Route*/}
          {/*exact*/}
          {/*path="/workout/:year/:month/:day"*/}
          {/*component={CurrentWorkout}*/}
        {/*/>*/}
      </AnimatedSwitch>
    </Router>
  );
};
