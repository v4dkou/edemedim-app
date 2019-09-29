import {observer} from 'mobx-react';
import React, {useEffect, useRef, useState} from 'react';
import {StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View, Image} from 'react-native';
import {RouteMap} from '../views/map';
import {ItemCategoriesScreen} from './itemcategories';

const RouteSheet = ({ selectedRouteStop, closeRouteStop } : { selectedRouteStop: any, closeRouteStop: () => any}) => {
    return (
        <View style={styles.sheetContainer}>
            <TouchableWithoutFeedback key={'header-container'} onPress={() => closeRouteStop()}>
                <View style={styles.routestopHeader}>
                    <View style={{paddingBottom: 7}}>
                      <Image source={require('../../../../img/leftarrow.png')} style={{height: 20, width: 20, marginRight: 19}} resizeMode="contain" />
                    </View>

                    {!!selectedRouteStop && (
                        <Text style={styles.routestopText}>Тюмень, 13:32 30.09</Text>
                    )}

                    {!selectedRouteStop && (
                        <Text style={styles.routestopText}>Выберите станцию</Text>
                    )}
                </View>
            </TouchableWithoutFeedback>

            {!!selectedRouteStop && (
              <ItemCategoriesScreen />
            )}
        </View>
    );
}

const RouteInfo = () => {
  return (
    <View style={{position: 'absolute', left: 50, bottom: 100, backgroundColor: '#F2F2F2', padding: 25}}>
      <Text style={styles.routestopText}>Новосибирск - Казань</Text>
      <Text style={styles.routeinfoText}>27.09.2019 12:12</Text>
    </View>
  );
}

export const RouteScreen = observer(() => {
    const [selectedRouteStop, selectRouteStop] = useState(1);

    return (
        <>
            <View style={styles.container}>
                <RouteMap />
                <RouteSheet selectedRouteStop={selectedRouteStop} closeRouteStop={() => selectRouteStop(0)} />
                <RouteInfo />
            </View>
        </>
    );
})

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    sectionContainer: {
        marginTop: 24,
        marginBottom: 16,
        paddingHorizontal: 24,
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
        position: 'absolute',
        top: 100,
        left: 50
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
    },
    routestopHeader: {
      marginVertical: 24,
      paddingHorizontal: 24,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    routestopText: {
      fontFamily: "RussianRailGPro-Extended",
      fontSize: 24,
      fontWeight: 'bold',
      lineHeight: 29,
      color: '#394A58',
      verticalAlign: 'middle'
    },
    routeinfoText: {
      fontFamily: "RussianRailGPro-Extended",
      fontSize: 18,
      color: '#394A58',
      verticalAlign: 'middle'
    }
});
