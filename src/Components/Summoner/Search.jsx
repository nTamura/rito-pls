import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Alert, Card, CardText, CardBody,InputGroup, InputGroupAddon,FormFeedback, CardTitle, Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import karthus from '../../../src/img/karthus.png';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state={
      isLoading: false,
      triggerAlert: false,
      open: false,
    }
  }



  handleSubmit = (e) => {
    e.preventDefault();
    let summonerName = e.target.summonerName.value
    this.props.getData(summonerName)
  }

  handleError = (err) => {

  }

  render() {
    return (
      <div className="container">

        <Card inverse style={styles.card}>
          <CardBody>
            <CardTitle style={styles.title}>
              Summoner Search
            </CardTitle>

            <hr />
            <Form onSubmit={(e) => {this.handleSubmit(e)}}>
              <FormGroup>
                <Label hidden for="summonerName">
                  Summoner name
                </Label>
                <InputGroup>
                  <Input type="text"
                    // invalid
                    value="itsNIXIN"
                    name="summonerName"
                    placeholder="itsNIXIN"
                  />
                  <InputGroupAddon addonType="append">
                    <Button outline color="info">Search</Button>
                  </InputGroupAddon>

                  <FormFeedback>Summoner does not exist</FormFeedback>

                </InputGroup>
              </FormGroup>
            </Form>

            <hr />
            <CardText style={styles.sub}>Search by summoner name to view overview, match history and ranked stats</CardText>

          </CardBody>
        </Card>

        {
          this.props.triggerAlert &&
          <Alert color="warning" style={styles.alert}>
            {this.props.error.status.status_code} - {this.props.error.status.message}
          </Alert>
        }

        { this.props.summoner &&
          <Redirect to={{
            pathname: `/summoner/${this.props.summoner.name}`,
            props: { summoner: this.props.summoner }
          }}/>
        }


    </div>
    );
  }
}

const styles={
  alert: {
    marginTop: 20,
    textAlign: 'center'
  },
  card:{
    backgroundColor: '#0e2a40',
    borderColor: '#0e2a40'
  },


  title: {
    fontSize: '2em',
    color: '#55c6ce'
  },
  sub: {
    color: '#87a3b0'
    // width: '80%'
  },
  form: {
    margin: '0 auto',
    width: '90%'
  },
  button: {
    float: 'right',
    marginTop: 20
  }
}

export default Search;
