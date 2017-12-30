import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentWillMount(){
    this.setState({
      tweets: this.props.newTweets
    })
  }
  componentWillReceiveProps(nextProps){
    // console.log(nextProps.newTweets)
    this.setState({
      tweets: nextProps.newTweets.concat(this.state.tweets)
    })
    // console.log(this.state)
    // console.log(this.props)
    // console.log(nextProps)
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log(nextProps.newTweets.length)
    return nextProps.newTweets.length !== 0
  }

  componentWillUpdate(nextProps, nextState){
    console.log("Component Updated!")
  }



  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
