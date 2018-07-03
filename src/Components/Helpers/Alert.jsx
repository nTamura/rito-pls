import React from 'react';

// import FontAwesome from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Alert = (props) => (


  <div style={styles.alert}>
    {/* <FontAwesome className="spin" icon="spinner"/> */}
    <p>Summoner not found </p>
  </div>

);

const styles={
  alert: {
    textAlign: 'center',
    margin: '0 10%',
    // margin: '0 auto',
    border: '1px solid red',
    borderRadius: '2%',
    backgroundColor: 'gray'
  },
  link: {
    color: '#ffbb36',
    fontWeight: 'bold',
    fontStyle: 'oblique'
  }
}

export default Alert;
