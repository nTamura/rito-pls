import React, { Component } from 'react';
// import { Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import axios from 'axios'


class Splash extends Component {

  render() {
    return (
      <div style={styles.container}>
        <h3>Splash screen</h3>
        <p>Rito PLS is a mobile League of Legends stats PWA created with React. </p>
      </div>
    );
  }
}

const styles={
  container:{
    // margin: '0 auto'
  },
  form: {

  }
}

export default Splash;
