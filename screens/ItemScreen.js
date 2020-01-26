import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import IconButton from '../components/IconButton.js';

export default class ItemScreen extends React.Component {
  render() {
  return (
    <View style={styles.container}>
        <View style = {styles.headerContainer}>
            <Text style = {styles.header}>More</Text>
        </View>
        <View style = {styles.iconsContainer}>
            <IconButton name = 'Clear All Favorites' iconName = 'heart'/>
            <IconButton name = 'About' iconName = 'info'/>
            <IconButton name = 'Suggest' iconName = 'pencil-square'/>
        </View>
    </View>
  );
  }
}

ItemScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
});
