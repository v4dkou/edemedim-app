import React from "react";
import { RouteScreen } from "../screens/route";
import { Route, Router, Switch } from "./index";
import {Main} from './layout';
import {RouteTicketsScreen} from '../screens/routetickets';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {RouteProps} from 'react-router';
import "./style.css";
import {ElementsScreen} from '../screens/elements';
import {MapBridge} from '../screens/mapbridge.web';

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
      <AnimatedSwitch animationClassName="page"
                      animationTimeout={300}>
        <AnimatedRoute exact path="/" component={RouteTicketsScreen} />
        <AnimatedRoute exact path="/route" component={RouteScreen} />
      <AnimatedRoute exact path="/elements" component={ElementsScreen} />
      <AnimatedRoute exact path="/mapbridge" component={MapBridge} />

          {/*<Route*/}
          {/*exact*/}
          {/*path="/workout/:year/:month/:day"*/}
          {/*component={CurrentWorkout}*/}
        {/*/>*/}
      </AnimatedSwitch>
    </Router>
  );
};

export const routing = (history?: any) => {
    if(!history) {
        throw new Error('react-router-dom is not connected to the current route')
    }

    const toRouteTicketsScreen = () => history.push('/')

    const toRouteScreen = (routeId: string) => history.push('/route')

    const toSellerScreen = () => {
        history.push('/seller')
    }
    const toSellersScreen = () => {
        history.push('/sellers')
    };
    const toComplexItemScreen = () => {
        history.push('/complex')
    };
    const toComplexItemsScreen = () => {
        history.push('/complex')
    };
    const toCartScreen = () => {
        history.push('/cart')
    };
    const toPaymentScreen = () => {
        history.push('/payment')
    };

    return {
        toRouteTicketsScreen,
        toRouteScreen,
        toSellerScreen,
        toSellersScreen,
        toComplexItemScreen,
        toComplexItemsScreen,
        toCartScreen,
        toPaymentScreen
    }
}