import React from 'react';
// import FontAwesome from '@fortawesome/react-fontawesome'
import amumu from '../../../src/img/amumu.gif';

const Loading = () => (
  <div style={styles.helper}>
    {/* <img src={amumu} alt="amumu"/> */}

    <p>Loading...</p>
  </div>
);

export default Loading;

const styles={
  helper: {
    textAlign: 'center',
    padding: '10%'
  }
}
