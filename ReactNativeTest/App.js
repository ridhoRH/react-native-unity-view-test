import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
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
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
});
