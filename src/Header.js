import React, { Component } from 'react';

export default class Header extends Component{
  render() {
    return (
      <div className="logo-container">
        <a href="#Logo" className="logo">
          <i className="zmdi zmdi-badge-check"></i> Todo!
        </a>
      </div>
    )
  }
}
