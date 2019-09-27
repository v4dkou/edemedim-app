import React, {Component, useContext, useEffect, useState} from 'react';
import {Text} from 'react-native'
import {RootStore} from "./app/root-store";
import {setupRootStore} from "./app/setup-root-store";
import {Routes} from './router/Routes';

const MSTContext = React.createContext(null);

// eslint-disable-next-line prefer-destructuring
export const Provider = MSTContext.Provider;

// TODO: mapState typings
export function useMst(mapStateToProps: (store: RootStore) => any) {
    const store = useContext(MSTContext) as RootStore | null;

    if (typeof mapStateToProps !== 'undefined' && store !== null) {
        return mapStateToProps(store);
    }

    return store;
}

export function App() {
    const [rootStore, setRootStore] = useState()

    useEffect(() => {
        const loadStore = async () => {
            setRootStore(await setupRootStore())
        }

        loadStore()
    }, [])
    // @ts-ignore
    return rootStore ? (<Provider value={rootStore}>
        <Routes/>
    </Provider>) : <Text>Loading</Text>
}