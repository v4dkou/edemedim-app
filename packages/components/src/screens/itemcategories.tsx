import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {routing} from '../router/Routes';

export const ComplexCategoryItem = (props: {onPress: () => any, title: string, subtitle: string, disabled?: boolean}) => <TouchableOpacity onPress={props.onPress}>
    <View style={{flexDirection: 'row'}}>
        <Text style={{fontFamily: "RussianRailGPro-Extended", fontSize: 24, marginBottom: 12, color: '#E21A1A', opacity: props.disabled ? 0.5 : 1, flex: 1 }}>
            {props.title}
        </Text>
        <Text style={{fontFamily: "RussianRailGPro-Extended", fontSize: 14, marginBottom: 12, color: '#000000', opacity: props.disabled ? 0.7 : 1 }}>
            {props.subtitle}
        </Text>
    </View>
</TouchableOpacity>

export const SimpleCategoryItem = (props: {onPress: () => any, title: string}) => <TouchableOpacity onPress={props.onPress}>
    <Text style={{fontFamily: "RussianRailGPro-Extended", fontSize: 24, marginBottom: 12, color: '#E21A1A'}}>
        {props.title}
    </Text>
</TouchableOpacity>

export const ItemCategoriesScreen = observer(({history}) => {
    return (
        <View style={{paddingHorizontal: 20}}>

            <TextInput style={{fontFamily: "RussianRailGPro-Extended", borderBottomColor: '#394A58', borderBottomWidth: 1, marginBottom: 12}} placeholder={'поиск блюд и заведений'}/>
            {['Завтраки']
                .map(item => <ComplexCategoryItem title={item} onPress={() => routing(history).toComplexItemsScreen()} subtitle={'от 129 р.'}/>)}
            {['Обеды', 'Ужины']
                .map(item => <ComplexCategoryItem title={item} onPress={() => {}} subtitle={'недоступны'} disabled/>)}

            <View style={{height: 16}}/>

            {['Итальянская кухня', 'Американская кухня', 'Пан азиатская кухня']
                .map(item => <SimpleCategoryItem title={item} onPress={() => routing(history).toSellersScreen()}/>)}
        </View>
    );
})