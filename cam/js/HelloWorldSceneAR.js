'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />
        <ViroText text={this.state.name} scale={[.3, .3, .3]} position={[0, .2, -.5]} style={styles.Reuben} />
      </ViroARScene>

    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Hello World!",
        name : "My name is Reuben Ninan!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
        text : "Tracking lost. Recalibration needed..."
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
  Reuben: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#FF0000',
    textAlignVertical: 'top',
    textAlign: 'center',  
  },
});

module.exports = HelloWorldSceneAR;
