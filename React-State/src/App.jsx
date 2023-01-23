import './App.css'
import React, { Component } from 'react'
import Profile from './components/Profile';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      time: 0,
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({ time: prevState.time + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div style={{textAlign: "center", fontSize: "smaller", display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "615px"}}>

        {this.state.show ? <Profile /> : null}

        <button onClick={() => this.setState({ show: !this.state.show })} style={{marginTop: "10px", border: "none", backgroundColor: "var(--blue)", padding: "15px", paddingLeft: "50px", paddingRight: "50px", borderRadius: "40px", cursor: "pointer", color: "white"}}>
          {this.state.show ? 'Hide' : 'Show'}
        </button>

        <p>Time since last mount: {this.state.time} seconds</p>
      </div>
    )
  }
}



