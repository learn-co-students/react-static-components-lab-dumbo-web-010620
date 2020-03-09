import React, { Component } from 'react';
import GraceHopperQuoteComponent from './GraceHopperQuoteComponent';

export default class CatComponent extends Component {
  render() {
    return (
      <div className="bar" id="cat">
        <img src="/cat.gif" />
      </div>
    );
  }
}
