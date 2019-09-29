// @ts-ignore
import BottomSheet from 'reanimated-bottom-sheet'
import {observer} from 'mobx-react';
import React, {useEffect, useRef} from 'react';
import {RouteMap} from '../views/map';
import {StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {gestureHandlerRootHOC} from "react-native-gesture-handler";
import {ItemCategoriesScreen} from './itemcategories';

const RouteSheet = (props: {onHeaderPress: () => any} ) => <View style={styles.sheetContainer}>
    <TouchableWithoutFeedback
        key={'header-container'}
        onPress={props.onHeaderPress}
    >
        <View style={{width: '100%', alignItems: 'center',}}>
            <View style={styles.headerBar}/>
        </View>
    </TouchableWithoutFeedback>
    <ItemCategoriesScreen />
</View>

const _RouteScreen = observer(() => {
    const bottomSheet = useRef(null);
    const openHalfpoint = () => {
        // @ts-ignore
        bottomSheet.current!.snapTo(1)
    }
    return (
        <>
            <StatusBar barStyle="dark-content" translucent backgroundColor="#f3f3f366" />
            <View style={styles.container}>
                <RouteMap/>
                <BottomSheet
                    ref={bottomSheet}
                    initialSnap = {1}
                    snapPoints = {['50%', 50]}
                    renderContent = {() => <RouteSheet onHeaderPress={openHalfpoint}/>}
                />
            </View>
        </>
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
        marginTop: 20,
        marginBottom: 10,
        width: 85,
        opacity: 0.5,
        overflow: 'hidden',
        backgroundColor: '#394A58',
    }
});