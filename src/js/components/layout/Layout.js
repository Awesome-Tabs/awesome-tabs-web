import React from "react"
import { connect } from "react-redux"

import { fetchUser } from "../../actions/userActions"
import { fetchTweets } from "../../actions/tweetsActions"

import Nav from "./Nav"

// connect should only be placed in smart components
@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})

export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser())
  }

  fetchTweets() {
    this.props.dispatch(fetchTweets())
  }

  render() {

    require('../../../css/style.scss');

    const { user, tweets } = this.props;
    const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.text}</li>)
    const contents = tweets.length ? <ul>{mappedTweets}</ul> : <button onClick={this.fetchTweets.bind(this)}>load tweets</button>

    return (
      <div>
        <Nav/>
        <h1>{user.name}</h1>
        {contents}
      </div>
    )
  }
}
