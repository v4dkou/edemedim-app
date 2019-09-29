import React from "react";
import { RouteScreen } from "../screens/route";
// @ts-ignore
import Navigator from 'react-native-easy-router';
import {RouteTicketsScreen} from '../screens/routetickets';
import { SellerScreen } from "../screens/seller";
import { SellersScreen } from "../screens/sellers";
import { ComplexItemScreen } from "../screens/complexitem";
import { ComplexItemsScreen } from "../screens/complexitems";
import { CartScreen } from "../screens/cart";
import { PaymentScreen } from "../screens/payment";


let navigator: any | undefined;

const backHandler = (navigator: Navigator) => {
    const {screen} = navigator.stack[navigator.stack.length - 1]
    if(screen === 'RouteScreen') {
        navigator.push('RouteTicketsScreen', {}, {animation: 'left', duration: 200, easing: 'ease-out'})
        return true
    } else if(screen === 'RouteTicketsScreen'){
        return false
    } else {
        navigator.pop()
        return true
    }
}

// Map screen should always be the first, so that it's always initialized in the background for fluid UI.
export const Routes = () =>
    <Navigator
        screens={{ RouteTicketsScreen, RouteScreen, SellerScreen, SellersScreen, ComplexItemScreen, ComplexItemsScreen, CartScreen, PaymentScreen }}
        initialStack={['RouteScreen', 'RouteTicketsScreen']}
        navigatorRef={(ref: any) => {
            navigator = ref
        }}
        backHandler={backHandler}/>

// goTo(history).routeScreen()

export const routing = (history?: any) => {
    if(!history && !navigator) {
        throw new Error('Not clear which navigation to use')
    }

    const toRouteTicketsScreen = () => {
        navigator.resetFrom(navigator.stack[0].id, 'RouteTicketsScreen')
    }

    const toRouteScreen = (routeId: string) => {
        const screen = navigator.stack[0]
        if(screen.screen === 'RouteScreen') {
            navigator.popTo(screen.id, {animation: 'left', duration: 200, easing: 'ease-out'})
            // TODO: send new routeId to an existing map screen
        } else {
            navigator.reset('RouteScreen', { routeId })
        }
        // navigator.popTo('RouteScreen', {animation: 'left', duration: 250, easing: 'ease-out'})
    }

    const toSellerScreen = () => {
        navigator.push('SellerScreen')
    }
    const toSellersScreen = () => {
        navigator.push('SellersScreen')
    };
    const toComplexItemScreen = () => {
        navigator.push('ComplexItemScreen')
    };
    const toComplexItemsScreen = () => {
        navigator.push('ComplexItemsScreen')
    };
    const toCartScreen = () => {
        navigator.push('CartScreen')
    };
    const toPaymentScreen = () => {
        navigator.push('PaymentScreen')
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