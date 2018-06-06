import React, { Component } from 'react'
import dictionary from './dictionary'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      language: 'en',
    }
  }

  handleLanguageSwitch = (nextLang) => {
    this.setState({
      language: nextLang,
    })
  }

  render() {
    const { language } = this.state

    return (
      <Provider value={{ language }}>
        <Header />

        <Content />
        
        <button onClick={() => this.handleLanguageSwitch('en')}>EN</button>
        <button onClick={() => this.handleLanguageSwitch('hu')}>HU</button>
      </Provider>
    )
  }
}


const { Consumer, Provider } = React.createContext('en')

export const Header = () => (
  <Consumer>
    {({ language }) => (
      <header>
        <h1>{dictionary['GREETING'][language]}</h1>
      </header>
    )}
  </Consumer>
)

const Content = () => (
  <Consumer>
    {({ language }) => <div>{dictionary['CONTENT'][language]}</div>}
  </Consumer>
)

export default App
