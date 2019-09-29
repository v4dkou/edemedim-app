import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import {Button, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Header} from '../views/Header';
import {Seller} from '../models';
import TestImage from '../views/TestImage';
import SellerCard from '../views/SellerCard';
import {routing} from '../router/Routes';
import PointitemCard, {PointitemDisplay} from '../views/PointitemCard';
import TestProductImage from '../views/TestProductImage';

export const SellerScreen = observer(({history}) => {
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

    const item: PointitemDisplay = {
        id: "1",
        thumbnail: TestProductImage,
        title: "Твистер",
        subtitle: "оригинальный",
        subtitleLabel: "острый",
        description:
            "Закручен со вкусом! Кусочки нежнейшего куриного филе в хрустящей " +
            "острой или оригинальной панировке с сочными листьями салата, " +
            "кусочками помидора и нежным соусом мы завернули в пшеничную лепешку " +
            "и поджарили в тостере. Тут все и закрутилось!",
        cost: 129,
        available: true,
        displayed: true
    };

    return (
        <View>
        <Header text={seller.title}/>
        <ScrollView style={{}}>
            <SellerCard seller={seller} />
            {[seller, seller, seller].map(it =>
                <View style={{ marginTop: 16, marginHorizontal: 16, elevation: 4, borderRadius: 18, backgroundColor: '#F2F2F2' }}>
                    <PointitemCard item={item} />
                </View>)}
        </ScrollView>
        </View>
    );
})