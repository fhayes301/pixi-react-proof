import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import {Stage, Texture, Sprite, Screen, TilingSprite} from 'react-pixi';
import logo from './logo.svg';
const PIXI = require('pixi.js');


var application = new PIXI.Application(800, 600, { transparent: true });

class App extends React.Component {



  playVideo() {
    var texture = PIXI.Texture.fromVideoUrl('https://www.youtube.com/watch?v=2G8V00SkTvYd');
    console.log(texture)
    var videoSprite = new PIXI.Sprite(texture);
    console.log(videoSprite)
    videoSprite.width = application.screen.width;
    console.log(videoSprite.width)
    videoSprite.height = application.screen.height;
    console.log(videoSprite.height)
    application.stage.addChild(videoSprite);
  }

  render() {


    document.body.appendChild(application.view);

      return (
        this.playVideo()
      )


  }
};

export default App;
