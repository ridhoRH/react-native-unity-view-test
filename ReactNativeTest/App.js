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
import LottieView from 'lottie-react-native';



export default class App extends React.Component<Props, State>{
  onToggleUnity() {
    UnityModule.postMessageToUnityManager('React Button Pressed');
  }

  onMessage(event) {
    if (event.nativeEvent.message === 'on') {
      this.animation.play();
    }
    else {
      this.animation.pause();
      this.animation.reset();
    }
  }


  render() {
    return (
      <View>
        <Button
          label="ARButton"
          onPress={this.onToggleUnity.bind(this)}
          title="Toggle Unity Colours" />
        <UnityView style={styles.container} />
        <LottieView style={{ width: 200, height: 200, position: "absolute", bottom: 0, right: 0 }}
          ref={animation => {
            this.animation = animation;
          }}
          source={require('./connected.json')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  cbottom: {
    height: '50%',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
});
