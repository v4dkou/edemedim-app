import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import {Button, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import SellerCard from '../views/SellerCard';
import {RoutestoporderStatusEnum, Seller} from '../models';
import TestImage from '../views/TestImage';
import {routing} from '../router/Routes';
import {Header} from '../views/Header';

export const SellersScreen = observer(({history}) => {
    const seller: Seller = {
        id: "1",
        logo: TestImage,
        promoImages: [],
        title: "KFC",
        rating: {
            value: 3.4,
            votes: "1000+"
        },
        description:
            "Закручен со вкусом! Кусочки нежнейшего куриного филе в хрустящей " +
            "острой или оригинальной панировке с сочными листьями салата, " +
            "кусочками помидора и нежным соусом мы завернули в пшеничную лепешку " +
            "и поджарили в тостере. Тут все и закрутилось!"
    };

    return (
        <View>
            <Header text={'Компании'}/>
            <ScrollView style={{backgroundColor: '#F2F2F2'}}>
                {[seller, seller, seller].map(it =>
                    <View style={{ marginTop: 16, marginHorizontal: 16, elevation: 4, backgroundColor: '#F2F2F2' }}>
                        <TouchableOpacity onPress={() => routing(history).toSellerScreen()}>
                            <SellerCard seller={it} />
                        </TouchableOpacity>
                    </View>)}
            </ScrollView>
        </View>
    );
})