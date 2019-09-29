import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import {RoutestopDisplay} from './Route';

export const Header = (props: {text: string}) => <View style={styles.header}>
    <Text style={styles.headerText}>{props.text}</Text>
</View>

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 80,
    backgroundColor: '#F2F2F2',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerText: {
    fontFamily: "RussoOne-Regular",
    fontSize: 24,
    flex: 1,
    textAlign: 'center',
    marginTop: 32,
    color: '#394A58',
  }
});
