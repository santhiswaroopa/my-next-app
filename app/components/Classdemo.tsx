"use client";

import React, { Component } from "react";

type WelcomeProps = {
  fname: string;
  lname: string;
};

class Classdemo extends Component<WelcomeProps> {
  fullname: string;

  constructor(props: WelcomeProps) {
    super(props);
    this.fullname = "Welcome " + props.fname + " " + props.lname;
  }

  render() {
    return <h2>{this.fullname}</h2>;
  }
}

export default Classdemo;