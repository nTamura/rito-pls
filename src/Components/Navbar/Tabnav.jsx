import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardBody, CardSubtitle, CardImg, Button, CardTitle, CardText, Row, Col } from 'reactstrap';


class Tabnav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1'
    };
  }

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }

  render() {
    let summonerName
    if (!this.props.summoner) { summonerName = 'itsNXIN' }

    return (
      <div className="container">
        <Nav tabs justified className="text-center" >
          <NavItem>
            <NavLink style={styles.tabs}
              className={{ active: this.state.activeTab === '1' }}
              onClick={() => { this.toggle('1'); }}
            >
              Overview
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={{ active: this.state.activeTab === '2' }}
              onClick={() => { this.toggle('2'); }}
            >
              Ranked
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={{ active: this.state.activeTab === '3' }}
              onClick={() => { this.toggle('3'); }}
            >
              Matches
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeTab}>

          <TabPane tabId="1">
            <Card style={styles.card}>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />

              <CardBody style={styles.cardFont}>
                <CardTitle style={styles.brand}>
                  itsNIXIN
                </CardTitle>
                <CardSubtitle>Summoner Statistics</CardSubtitle>
                <hr />
                <CardText className="text-left" >Sightstone is a League of Legends Summoner lookup that provides summoner overview, ranked info and match history.</CardText>
              </CardBody>
            </Card>
          </TabPane>

          <TabPane tabId="2">
            <Card style={styles.card}>
              <CardBody style={styles.cardFont}>

              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Go somewhere</Button>
            </CardBody>

            </Card>
          </TabPane>

          <TabPane tabId="3">
            <Card style={styles.card}>
              <CardBody style={styles.cardFont}>

              <CardTitle>3rd itlasdjfasd</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Go somewhere</Button>
            </CardBody>

            </Card>
          </TabPane>
        </TabContent>

      </div>
    );
  }
}


const styles = {
  flex: {
    display: 'flex',
    justifyContent: 'space-around',
    // alignItems: 'center'
  },
  tabs: {
    // textDecoration: 'none'
    color: '#97b2c6',
    backgroundColor: '#0e2a40',
    borderColor: '#0e2a40'

  },
  cardFont:{
    color: '#97b2c6',
  },
  card:{
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    // color: '#97b2c6',
    backgroundColor: '#0e2a40',
    borderColor: '#0e2a40'
  },
  active: {
    backgroundColor: 'red'
  }
}

export default Tabnav;
