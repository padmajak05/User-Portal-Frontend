import React, { Component } from 'react';

const About = (props) => {
  return (
    <div className="welcome">
      <h1>Welcome {props.location.state.detail} </h1>
    </div>)
}
export default About;