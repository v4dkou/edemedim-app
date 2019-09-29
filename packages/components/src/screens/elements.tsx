import {observer} from 'mobx-react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import React, {useEffect} from 'react';
import SellerCard from '../views/SellerCard';
import PointitemCard, {PointitemDisplay} from '../views/PointitemCard';
import ComplexProductSelect from '../views/ComplexProductSelect';
import Route, {RoutestopDisplay} from '../views/Route';
import TestImage from '../views/TestImage';
import TestProductImage from '../views/TestProductImage';
import {Seller} from '../models';
import ComplexProductChoice from '../views/ComplexProductChoice';
import CartItem from '../views/CartItem';


const logoUri = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3"><g fill="#61DAFB"><path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z" /><circle cx="420.9" cy="296.5" r="45.7" /><path d="M520.5 78.1z" /></g></svg>`;

const route = [
    { text: "Станция 1", time: "22:22:26", passed: true },
    { text: "Станция 2", time: "через 23:23:36", passed: false },
    { text: "Станция 3", time: "00:20:06", passed: false },
    { text: "Станция 4", time: "01:20:06", passed: false },
    { text: "Станция 5", time: "02:20:06", passed: false },
    { text: "Станция 6", time: "03:20:06", passed: false }
] as RoutestopDisplay[];

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


const complexProducts = [
    {
        image:
            "https://s3-alpha-sig.figma.com/img/1a6b/f2bb/1bef140c86856d808c72a9aee0599f19?Expires=1570406400&Signature=FJrlr6Vlg3YOk-jRY7WAbU6e7WQyGV4wNfNc7irzLNT-piZTqtZ8Uxx0Y0NeOP5CoV5iV8kD54ThPqc11CQySplhsowdrcT~9TMDDvyChjC4-lHevubiZgBy1GtK43KZzhugSohiH8ATRLpwY4Ge5lCCsfKCj5toCkM2Dg8AgtkgQqz1QZ30ZiaBIlNA2uqCg9yyuRc6qX6MBOLw~5bXgbtcW0ZygROFZFF6h4YAvWwzueQwdjNSwxckEhUbXYCL3tCagjxaBUWki~-J1YBsEDZrmwerSw1GR6HkQRe9FlMkm2VYaLXQ1DNXkA-KDAgIDZBefHAF82P6NuuewdwPmg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        title: "Завтрак Короля",
        sellerName: 'ООО "Лабеан Фуд"',
        arrives: {
            when: "21:32",
            where: "Екатеринбург"
        },
        prices: {
            min: 349,
            max: 439
        },
        price: 359,
        rating: {
            value: 3.4,
            votes: "1000+"
        },
        sections: [
            {
                name: "Каша",
                variants: ["манная", "овсяная", "гречневая", "перловая"]
            },
            {
                name: "Глазунья",
                variants: [
                    "с грибами",
                    "с лисичками",
                    "с беконом",
                    "с ветчиной и сыром"
                ]
            },
            {
                name: "Десерт",
                variants: ["круасан", "блинчики с вареньем", "торт “Наполеон”"]
            },
            {
                name: "Напиток",
                variants: ["чай", "кофе", "морс", "сок"]
            }
        ]
    },
    {
        image:
            "https://s3-alpha-sig.figma.com/img/7794/7618/049e2c0019f3cc140fbd4b8973e92fe7?Expires=1570406400&Signature=MFMRU-fxLJdCA0DhRXMGh5OW~nsm13Xmev~ffbnNBuuzpwpP4gKa~d-06bJfn5Y2umfxE4t72k2tcVfEgQYnmiTU0g7VpM1IXtU6dNFgVG7FVKNfJ~VTy7dh5DD46z4409NMI7SuTxfU57ob-j6wWv7QXCTFo0MNIPYjjodxMa3Vu~qBi0~K71Tby~BKv9s3Id4bJOWNfDZPYMVtJm~vf93C~fFWxmBMVZs4s9sVoMPJsSzXpgJRrz~sWHQ0X0zfZsOghNgQf~gUdDVUwDDsRdRbPiDg8zZFyNIcsmauOwd8jJ4s7-h~-gQ0pBbkIE7JgiUelcgBIIXf0qGTdTg0lQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        title: "Завтрак Принца",
        sellerName: 'ООО "Фуд Мастерс"',
        arrives: {
            when: "23:52",
            where: "Казань"
        },
        prices: {
            min: 329,
            max: 419
        },
        price: 359,
        rating: {
            value: 4.5,
            votes: "10 000+"
        },
        sections: [
            {
                name: "Каша",
                variants: ["манная", "овсяная", "гречневая", "перловая"]
            },
            {
                name: "Десерт",
                variants: ["круасан", "блинчики с вареньем", "торт “Наполеон”"]
            },
            {
                name: "Напиток",
                variants: ["чай", "кофе", "морс", "сок"]
            }
        ]
    }
];

const cartItem1 = {
    seller,
    items: [
        { isComplex: false, ...item },
        { isComplex: false, ...item, title: "Бургер", price: 249 },
        { isComplex: false, ...item, title: "Фирменная", price: 315 }
    ],
    total: "693.00",
    paid: true
};

const cartItem2 = {
    seller,
    items: [
        { isComplex: true, ...complexProducts[0] },
        { isComplex: true, ...complexProducts[1] }
    ],
    total: "329.00",
    paid: false
};


export const ElementsScreen = observer(({ history }) => {

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.body}>
                        <View style={{ marginBottom: 30 }}>
                            <CartItem cartItem={cartItem2} />
                        </View>

                        <View style={{ marginBottom: 30 }}>
                            <CartItem cartItem={cartItem1} />
                        </View>

                        <View style={{ marginBottom: 30 }}>
                            <Route points={route} />
                        </View>

                        <View style={{ marginTop: 30 }}>
                          <SellerCard seller={seller} />
                        </View>
                        <View style={{ marginTop: 30 }}>
                          <PointitemCard item={item} />
                        </View>


                        <View style={{ marginBottom: 30 }}>
                            <ComplexProductSelect options={complexProducts} />
                        </View>
                        <View style={{ marginBottom: 30 }}>
                            <ComplexProductChoice product={complexProducts[0]} />
                        </View>
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
    body: {
        backgroundColor: 'white',
    },
});