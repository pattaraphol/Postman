import React, { Component } from 'react'
import TweetBoard from './TweetBoard'

/* global firebase */
class App extends Component {
  state = {
    tweets : { }
  }
  componentDidMount(){
    let ref = firebase.database().ref('tweets/reactpost')
    ref.on('value', (snapshot) => {
      this.setState({ tweets: snapshot.val() })
    })
  /* Force Update */ 
    if (module.hot){
      module.hot.accept('./TweetBoard', () => {
        this.forceUpdate()
      })
    }
  }

  render() {
    return (
      <div className="App">
      <TweetBoard tweets={this.state.tweets}/>
      </div>
    )
  }
}

export default App;
