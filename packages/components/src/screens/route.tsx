// @ts-ignore
import BottomSheet from 'reanimated-bottom-sheet'
import {observer} from 'mobx-react';
import React, {useEffect, useRef} from 'react';
import {RouteMap} from '../views/map';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {gestureHandlerRootHOC} from "react-native-gesture-handler";

const RouteSheet = (props: {onHeaderPress: () => any} ) => <View style={styles.sheetContainer}>
    <TouchableWithoutFeedback
        key={'header-container'}
        onPress={props.onHeaderPress}
    >
        <View style={{width: '100%', alignItems: 'center',}}>
            <View style={styles.headerBar}/>
        </View>
    </TouchableWithoutFeedback>
    <Text style={styles.sectionTitle}>Новосибирск – Казань</Text>
    <Text style={styles.sectionDescription}>
        <Text style={styles.highlight}>Нет</Text> заказов
    </Text>
</View>

const _RouteScreen = observer(() => {
    const bottomSheet = useRef(null);
    const openHalfpoint = () => {
        // @ts-ignore
        bottomSheet.current!.snapTo(1)
    }
    return (
        <View style={styles.container}>
            <RouteMap/>
            <BottomSheet
                ref={bottomSheet}
                initialSnap = {2}
                snapPoints = {['95%', 300, 50]}
                renderContent = {() => <RouteSheet onHeaderPress={openHalfpoint}/>}
            />
        </View>
    );
})
export const RouteScreen = gestureHandlerRootHOC(_RouteScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
    },
    sectionContainer: {
        marginTop: 24,
        paddingHorizontal: 24,
        marginBottom: 16,
        backgroundColor: 'white'
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: 'black',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: 'gray',
    },
    sheetContainer: {
        backgroundColor: '#F2F2F2',
        height: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        elevation: 4
    },
    headerBar: {
        borderRadius: 4,
        height: 6,
        margin: 20,
        width: 85,
        opacity: 0.5,
        overflow: 'hidden',
        backgroundColor: '#394A58',
    }
});