import {observer} from 'mobx-react';
import {
    Alert,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text, TextComponent,
    TouchableOpacity,
    View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useMst} from '../App';
import {Routeticket} from '../models';
import {routing} from '../router/Routes';

export const RouteTicketsScreen = observer(({ history }) => {
    const { getUser, isFetching, error, username, routeTickets } = useMst(({userStore: store}) => ({
        getUser: store.getUser,
        username: store.user.data && store.user.data.username,
        isFetching: store.user.isFetching,
        error: store.user.error,
        routeTickets: store.user.data && store.user.data.routetickets
    }));

    useEffect(() => {
        getUser()
    }, [])

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.body}>
                        <View style={styles.sectionContainer}>
                            <Text style={{fontFamily: 'RussoOne-Regular'}}>Добро пожаловать, {username}!</Text>
                            <Text style={{fontFamily: 'RussoOne-Regular'}}>
                                Выберите поездку, чтобы заказать еду <Text style={styles.highlight}>packages/components/App.tsx</Text> to change this
                                screen and then come back to see your edits (in the phone or the browser).
                            </Text>
                        </View>
                        {routeTickets && routeTickets.map((ticket: Routeticket) =>
                            <TouchableOpacity onPress={() => routing(history).toRouteScreen(ticket.route)}>
                                <View style={styles.sectionContainer} key={ticket.id}>
                                    <Text style={{fontFamily: 'RussianRailG-Reg', fontSize: 24}}>Новосибирск – Казань</Text>
                                    <Text style={{fontFamily: 'RussianRailGPro-Bold', fontSize: 24}}>Новосибирск – Казань</Text>
                                    <Text style={{fontFamily: 'RussianRailGPro-Extended', fontSize: 24}}>Новосибирск – Казань</Text>
                                    <Text style={{fontFamily: 'RussianRailGPro-ExtendedBold', fontSize: 24}}>Новосибирск – Казань</Text>
                                    <Text style={{fontFamily: 'RussianRailGPro-Medium', fontSize: 24}}>Новосибирск – Казань</Text>
                                    <Text style={styles.sectionDescription}>
                                        <Text style={styles.highlight}>Нет</Text> заказов
                                    </Text>
                                </View>
                            </TouchableOpacity>)}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
})

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: 'white',
    },
    sectionContainer: {
        marginTop: 24,
        paddingHorizontal: 24,
        marginBottom: 16
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        fontFamily: 'RussoOne-Regular',
        color: 'black',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: 'gray',
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: 'gray',
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});