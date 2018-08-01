import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class Main extends Component {

  render() {
    return (
      <div className="container">
        <Card inverse style={styles.card}>
          <CardBody className="text-center" >
            <CardTitle className='brand' style={styles.brand}>
              Sightst<FontAwesomeIcon icon={faEye} size="xs" />ne
            </CardTitle>
            <CardSubtitle>Summoner Statistics</CardSubtitle>
            <hr />
            <CardText className="text-left" >Sightstone is a mobile-first League of Legends Summoner lookup PWA that provides summoner overview, ranked info and match history.</CardText>
            <hr />
            <Button outline color="info">
              <Link to="/search" style={styles.link}>
                Get started now
              </Link>
            </Button>
          </CardBody>
        </Card>

    </div>
    );
  }
}

const styles={
  card:{
    backgroundColor: '#0e2a40',
    borderColor: '#0e2a40'
  },
  brand: {
    fontSize: '2em'
  },
  link: {
    color: '#55c6ce',
    textDecoration: 'none'
  },
}

export default Main;
