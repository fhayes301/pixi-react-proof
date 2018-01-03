import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import {Stage, Texture, Sprite, Screen, TilingSprite} from 'react-pixi';
import logo from './logo.svg';
const PIXI = require('pixi.js');


var application = new PIXI.Application(800, 600);
document.body.appendChild(application.view);

class App extends React.Component {

  displayVideo() {
    var texture = PIXI.Texture.fromVideoUrl('https://www.youtube.com/watch?v=2G8V00SkTvYd');
    var videoSprite = new PIXI.Sprite(texture);
    videoSprite.width = application.screen.width;
    videoSprite.height = application.screen.height;
    application.stage.addChild(videoSprite);
    console.log(application)
    console.log(application.stage)
    console.log(videoSprite)
  }

  render() {



      return (
        <div>

          {this.displayVideo()}

        </div>
      )


  }
};

export default App;
