/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
} from 'react-native';



export default class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'React-native grrr' };
  }
  render() {
    let pic = {
      uri: 'https://source.unsplash.com/random'
    }
    let bgp = {
      uri: "../img/Capture4.png"
    }
    return (
      <Image source={pic} style={styles.bgImage}>
      <View style={styles.container}>
        <TextInput
        style={{width: 200, height: 40, borderColor: 'gray', borderWidth: 1, marginLeft: 100, marginTop: 200, backgroundColor: 'white'}}
        value={this.state.text} onChange={(text) => this.setState({text})}
        />
        <StatusBar
          backgroundColor="red"
          barStyle="light-content"
        />
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    padding: 0,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'transparent'
  },
  instructions: {
    textAlign: 'center',
    color: '#119512',
    marginBottom: 5,
    backgroundColor: 'transparent'
  },
  bgImage: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    resizeMode: 'stretch',
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
