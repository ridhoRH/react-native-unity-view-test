import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { UnityView } from '@asmadsen/react-native-unity-view';
import { UnityModule } from '@asmadsen/react-native-unity-view';


export default class App extends React.Component<Props, State>{
  onToggleRotate() {
    UnityModule.postMessageToUnityManager('message');
  }

  render() {
    return (
      <View>
        <Button
          label="ARButton"
          onPress={this.onToggleRotate.bind(this)}
          title="Toggle EasyAR Camera" />
        <UnityView style={styles.container} />
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
