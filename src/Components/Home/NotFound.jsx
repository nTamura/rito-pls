import React from 'react';
import { Link } from 'react-router-dom'
import amumu from '../../../src/img/amumu.gif';

const NotFound = (props) => (

  <div style={styles.helper}>
    <h1>404</h1>
    <img src={amumu} alt="amumu"/>
    <p>You're not supposed to be here <br />
    Please <Link to={`/`} style={styles.link}>go back</Link> and try again. </p>
  </div>

);

const styles={
  helper: {
    textAlign: 'center',
    padding: '10%'
  }
}

export default NotFound;
