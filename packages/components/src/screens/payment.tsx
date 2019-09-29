import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import {Button, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Header} from '../views/Header';


export const PaymentScreen = observer(() => {
    return (
        <View style={{}}>
            <Header text={'Оплата'}/>
        </View>
    );
})