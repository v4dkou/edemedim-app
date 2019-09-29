import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import {Button, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Header} from '../views/Header';
import ComplexProductChoice from '../views/ComplexProductChoice';

export const ComplexItemScreen = observer(() => {
    const item = {
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
    }
    return (
        <View style={{}}>
            <Header text={'Выбор блюд'}/>
            <ComplexProductChoice product={item}/>
        </View>
    );
})