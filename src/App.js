import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      language: 'en'
    }
  }

  handleLanguageSwitch = (nextLang) => {
    this.setState({
      language: nextLang
    })
  }

  render() {
    return (
      <Provider value={this.state.language}>
        <Header />

        <Content />
        
        <button onClick={() => this.handleLanguageSwitch('en')}>EN</button>
        <button onClick={() => this.handleLanguageSwitch('hu')}>HU</button>
      </Provider>
    )
  }
}

const { Consumer, Provider } = React.createContext('en')

const dictionary = {
  GREETING: {
    en: 'Hello World!',
    hu: 'Helló Világ!',
  },
  CONTENT: {
    en: 'This is the content in English.',
    hu: 'Ez itt a magyar nyelvű tartalom.',
  }
}

const Header = () => (
  <Consumer>
    {value => (
      <header>
        <h1>{dictionary['GREETING'][value]}</h1>
      </header>
    )}
  </Consumer>
)

const Content = () => (
  <Consumer>
    {value => <div>{dictionary['CONTENT'][value]}</div>}
  </Consumer>
)

export default App
