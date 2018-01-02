import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import {Stage, Texture, TilingSprite} from 'react-pixi';
import logo from './logo.svg';
const PIXI = require('pixi.js');


var application = new PIXI.Application(800, 600, { transparent: true });
document.body.appendChild(application.view);

class App extends React.Component {


  playVideo() {
    var texture = PIXI.Texture.fromVideoURL('https://www.youtube.com/watch?v=2G8V00SkTvYd');
    var videoSprite = new PIXI.Sprite(texture);
    videoSprite.width = app.screen.width;
    videoSprite.height = app.screen.height;
    application.stage.addChild(videoSprite);
  }

  render() {

    return (

      { this.playVideo() }

    );
  }
};

export default App;
