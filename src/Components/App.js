import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import axios from 'axios'
import './App.css';
import _ from 'lodash'

import Main from './Home/Main.jsx';
import NotFound from './Home/NotFound.jsx';

import Navigation from './Navbar/Navigation.jsx';

import SummonerResult from './Summoner/SummonerResult.jsx';
import Search from './Summoner/Search.jsx';
import Match from './Summoner/Match.jsx';

const API_KEY = 'RGAPI-8ba4263d-8324-4f91-85d7-042162fb131d'
// const API_KEY = process.env.REACT_APP_SECRET
const URL = 'https://na1.api.riotgames.com/'
const SUM = 'lol/summoner/v3/summoners/by-name/'
const RNK = 'lol/league/v3/positions/by-summoner/'
const HST = 'lol/match/v3/matchlists/by-account/'
const MCH = 'lol/match/v3/matches/'
const KEY = `api_key=${API_KEY}`
const LMT = '?endIndex=5'


// https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/31870321?endIndex=20&api_key=RGAPI-8ba4263d-8324-4f91-85d7-042162fb131d
// URL+HST+accountId+LMT+KEY

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      summoner: null,
      matchList: null,
      league: null,
      isLoading: false,
      triggerAlert: false,
      fireRedirect: false,
      error: ''
    }
  }

  getData = async (summonerName) => {
    try {
      const summoner = await axios.get(URL+SUM+summonerName+'/?'+KEY);
      const { accountId, id } = summoner.data
      const league = await axios.get(URL+RNK+id+'?'+KEY);
      const matchList = await axios.get(URL+HST+accountId+LMT+'&'+KEY);
      let newMatchList = []

      for (var match in matchList.data.matches) {
        let gameId = matchList.data.matches[match].gameId
        let matchDetails = await axios.get(URL+MCH+gameId+'?'+KEY);

        if (gameId === matchDetails.data.gameId) {
          let result = _.setWith(matchList.data.matches[match],
            'matchDetails', matchDetails.data, Object
          )
          newMatchList.push(result)
        }
      }
      console.log(newMatchList);

      // var x = newMatchList.filter((match) => {
      //   match.matchDetails.participantIdentities.player.filter((p) => {
      //     return summonerName
      //  })
      // });

      // for (let team in matchList.teams) {
      //
      //   console.log(matchList[match]);
      //
      //   let x = matchList.teams[team].filter((t) => {
      //     if teamId === t.matchDetails.
      //   })
      //
      //   let stats = {}
      //   const { matchList } = this.props
      // }
      // for (let match in matchList) {
      //
      //   console.log(matchList[match]);
      //   let x = match.filter((m) => {
      //     return m.matchDetails.participantIdentities.player.summonerName == 'itsnixin'
      //   })
      // { matchDetails } = this.props.matchList
      // matchDetails.participantIdentities[0].player.accountId
      // matchDetails.participantIdentities[0].player.summonerId
      // matchDetails.participantIdentities[0].player.summonerName
      //
      // matchDetails.teams[0].teamId
      // matchDetails.teams[0].win


      this.setState({
        summoner: summoner.data,
        matchList: newMatchList,
        league: league.data
      });


    } catch (err) {
      if (err.response) {
        // error handling for forbidden (new api key)
       console.log(err.response.data);
     }
    //   this.setState({
    //     error: err.response.data,
    //     triggerAlert: true
    //   }, () => this.clearAlert())
    //   console.log(err)
    // }
    }
  }

  clearAlert = () => {
    setTimeout(() => {
      this.setState({ triggerAlert: false });
    }, 2500);
  }

  clearSummoner = () => {
    this.setState({ summoner: null })
  }

  render() {
    return (
      <React.Fragment>

        <div style={styles.base}>
          <Navigation
            {...this.state}
            clearSummoner={this.clearSummoner}
          />
        </div>


        <div style={styles.content} className="container">

          <Switch>
            <Route exact path="/" render={() => {
              return <Main />
            }} />

            <Route path="/search" render={(props) => {
              return (
                <Search
                  {...props}
                  {...this.state}
                  getData={this.getData}
                />
              )
            }} />

            <Route path="/summoner/:id" render={(props) => {
              return (
                <SummonerResult
                  {...props}
                  {...this.state}
                  getData={this.getData}
                />
              )
            }} />

            <Route path="*" render={() => {
              return <NotFound />
            }} />

          </Switch>

        </div>
      </React.Fragment>
    );
  }
}

const styles = {
  base: {
    backgroundColor: '#0b2234',
  },
  content: {
    backgroundColor: '#0b2234',

    paddingTop: 40
  }
}


export default App;
