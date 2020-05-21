import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {UnityView} from '@asmadsen/react-native-unity-view';


export default class App extends React.Component<Props, State>{
  render() {
    return (
      <View>
      
        <Text style={styles.sectionTitle}>
          Welcome to React Native!
        </Text>
        <UnityView style={styles.container}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
