import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {login: false}

  onLoginClick = () => {
    const {login} = this.state

    this.setState(prevState => ({login: !login}))
  }

  render() {
    const {login} = this.state
    const btnText = login ? 'Logout' : 'Login'
    const Message = login ? 'Welcome User' : 'Please Login'

    return (
      <div className="MC">
        <div className="main-container">
          <h1>{Message}</h1>
          <button className="btn" type="button" onClick={this.onLoginClick}>
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
