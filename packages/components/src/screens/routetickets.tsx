import {observer} from 'mobx-react';
import {Button, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useMst} from '../App';

export const RouteTicketsScreen = observer(() => {
    const { getUser, isLoading, username } = useMst(({userStore: store}) => ({
        getUser: store.getUser,
        routeTickets: store.routeTickets,
        username: store.username
    }));

    useEffect(() => {
        getUser()
    }, [])

    return (
        <View>
            <Text>Добро пожаловать {username}</Text>
            {isLoading && <Text>ГРУЗИМ</Text>}
        </View>
    );
})