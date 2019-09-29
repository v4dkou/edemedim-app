import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import {Button, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {RoutestoporderDisplay} from '../views/CartItem';
import {RoutestoporderStatusEnum, Seller} from '../models';
import TestImage from '../views/TestImage';
import {PointitemDisplay} from '../views/PointitemCard';
import TestProductImage from '../views/TestProductImage';

export const CartScreen = observer(() => {
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

    const cartItem1: RoutestoporderDisplay = {
        seller,
        items: [
            { isComplex: false, ...item, amount: 1, paid: false },
            { isComplex: false, ...item, title: "Бургер", cost: 249, amount: 1, paid: false },
            { isComplex: false, ...item, title: "Фирменная", cost: 315, amount: 1, paid: false }
        ],
        status: RoutestoporderStatusEnum.Available,
        total: "693.00",
    };
    return (
        <ScrollView style={{paddingHorizontal: 20}}>


        </ScrollView>
    );
})