import {observer} from 'mobx-react';
import {Button, Text, View} from 'react-native';
import React, {useEffect} from 'react';

export const RouteScreen = observer(() => {
    return (
        <View>
            <Text>value: {0}</Text>
            <Button onPress={() => {}} title="Inc"/>
        </View>
    );
})