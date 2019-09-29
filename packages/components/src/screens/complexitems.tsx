import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import {Button, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import ComplexProductSelect from '../views/ComplexProductSelect';
import {ComplexItemDisplay} from '../views/CartItem';
import {Header} from '../views/Header';
import {routing} from '../router/Routes';

export const ComplexItemsScreen = observer(({history}) => {
    const complexProducts: ComplexItemDisplay[] = [
        {
            isComplex: true,
            image:
                "https://s3-alpha-sig.figma.com/img/1a6b/f2bb/1bef140c86856d808c72a9aee0599f19?Expires=1570406400&Signature=FJrlr6Vlg3YOk-jRY7WAbU6e7WQyGV4wNfNc7irzLNT-piZTqtZ8Uxx0Y0NeOP5CoV5iV8kD54ThPqc11CQySplhsowdrcT~9TMDDvyChjC4-lHevubiZgBy1GtK43KZzhugSohiH8ATRLpwY4Ge5lCCsfKCj5toCkM2Dg8AgtkgQqz1QZ30ZiaBIlNA2uqCg9yyuRc6qX6MBOLw~5bXgbtcW0ZygROFZFF6h4YAvWwzueQwdjNSwxckEhUbXYCL3tCagjxaBUWki~-J1YBsEDZrmwerSw1GR6HkQRe9FlMkm2VYaLXQ1DNXkA-KDAgIDZBefHAF82P6NuuewdwPmg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            title: "Завтрак Чемпиона",
            sellerName: 'ООО "Крошка Картошка"',
            arrives: {
                when: "21:32",
                where: "Екатеринбург"
            },
            prices: {
                min: 349,
                max: 439
            },
            cost: 359,
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
            isComplex: true,
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
            cost: 359,
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
    return (
        <View style={{}}>
            <Header text={'Завтраки'}/>
            <ComplexProductSelect options={complexProducts} onSelected={() => routing(history).toComplexItemScreen()}/>
        </View>
    );
})