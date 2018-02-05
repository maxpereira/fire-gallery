import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import logo from './heart.svg';
import './App.css';
import Feb14App from './firebaseConfig.js';
import * as firebase from 'firebase';

export default class Feb14MainApp extends React.Component {
  constructor(props){
    super(props);
    this.database = Feb14App.ref().child('images');

      this.state = {
        photosArray: []
      }

      this.convertToArray = this.convertToArray.bind(this);
    };
  
    componentDidMount() {
      this.database.on('value', snapshot => {
  
        this.setState({
          photosArray: this.convertToArray(snapshot.val())
        });
      });
    };

    convertToArray(imagesDict) {
      var returnArray = [];
  
      for (var image in imagesDict) {
        var temp = {};
  
        temp.src = imagesDict[image].src;
        temp.width = imagesDict[image].width;
        temp.height = imagesDict[image].height;
  
        returnArray.push(temp);
      }
      console.log(returnArray);
      return returnArray;
    }

  render() {
    return (
    <div className="App parent">
      <div className="child">
        <header className="App-header">
          <img src={logo} className="App-logo animate-flicker" alt="logo" />
          <h1 className="App-title">Fire-Gallery</h1>
        </header>
        <Gallery photos={this.state.photosArray}/>
      </div>
    </div>  
    );
  }
}


