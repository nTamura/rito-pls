import React, { Component } from 'react';
// import { Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Loading from '../Helpers/Loading.jsx'

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state={
      isLoading: true,
      triggerAlert: false,
      summoner: this.props.summoner
    }
  }

componentWillMount() {
  const params = this.props.match.params.id
  if (!this.props.summoner) {
    this.props.getData(params)
    .then(() => {
      this.setState({ summoner: this.props.summoner })
    })
  }

}
  render() {
    const isLoading = !this.state.summoner

    return (
      <div>
        { isLoading ? (
          <Loading />
        ) : (

        <div style={styles.container}>
          <h3>{ this.state.summoner.name } </h3>
          <p>Level: {this.state.summoner.summonerLevel}</p>
          {/* <p>{this.props.summoner.name}</p> */}

        </div>
      )}
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

export default Overview;
