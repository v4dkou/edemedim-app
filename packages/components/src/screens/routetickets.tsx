import {observer} from 'mobx-react';
import {Button, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useMst} from '../App';

export const RouteTicketsScreen = observer(() => {
    const { getUser, isLoading, username } = useMst(({userStore: store}) => ({
        getUser: store.getUser,
        username: store.user.data && store.user.data.username,
        routeTickets: store.user.data && store.user.data.routetickets
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