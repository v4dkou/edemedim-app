// @ts-ignore
import BottomSheet from 'reanimated-bottom-sheet'
import {observer} from 'mobx-react';
import {
    Alert, ImageBackground,
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
import {getDefaultRuPlural} from '../utils/get-plural-type';
import {gestureHandlerRootHOC} from "react-native-gesture-handler";

// fixme: switch to FlatList
export const RouteTicketsList = observer(({history}) => {
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
    return <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>
            <View style={styles.sectionContainer}>
                <Text style={{fontFamily: 'RussoOne-Regular', fontSize: 24}}>
                    Выберите поездку, чтобы заказать еду
                </Text>
            </View>
            {routeTickets && routeTickets.map((ticket: Routeticket) =>
                <TouchableOpacity onPress={() => routing(history).toRouteScreen(ticket.route)} key={ticket.id}>
                    <View style={styles.sectionContainer}>
                        <Text style={{fontFamily: "RussianRailGPro-Extended", fontSize: 14}}>30.10.2019 14:32</Text>
                        <Text style={{fontFamily: "RussoOne-Regular", fontSize: 32, color: '#E21A1A'}}>Новосибирск – Казань</Text>
                        <Text style={{fontFamily: "RussianRailGPro-Extended", fontSize: 18, color: '#E21A1A'}}>
                            Нет заказов
                        </Text>
                        <Text style={{fontFamily: "RussianRailGPro-Extended", fontSize: 18}}>
                            {3 + getDefaultRuPlural('ru', 3, ' заказ', ' заказа', ' заказов')}
                        </Text>
                    </View>
                </TouchableOpacity>)}
        </View>
    </ScrollView>
})

export const _RouteTicketsScreen = observer(({ history }) => {

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <ImageBackground source={require('../../../../img/train1.jpg')} style={styles.container}>
                <View style={{height: '50%', padding: 30}}>
                    <View style={{flex: 1}}/>
                    {['Заказы', 'Отзывы', 'Настройки', '', 'Почитать']
                        .map(item => <MenuItem title={item} onPress={() => {}}/>)}
                </View>
                <BottomSheet
                    initialSnap = {1}
                    snapPoints = {['95%', '50%']}
                    renderContent = {() => <RouteTicketsList history={history}/>}
                />
            </ImageBackground>
        </>
    );
})

export const MenuItem = (props: {onPress: () => any, title: string}) => <TouchableOpacity onPress={props.onPress}>
    <Text style={{fontFamily: 'RussoOne-Regular', fontSize: 24, marginBottom: 20, color: 'white'}}>
        {props.title}
    </Text>
</TouchableOpacity>

export const RouteTicketsScreen = gestureHandlerRootHOC(_RouteTicketsScreen)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#999',
    },
    scrollView: {
        backgroundColor: 'white',
        height: '100%',
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