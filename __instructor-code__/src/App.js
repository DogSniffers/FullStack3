import React from 'react';
import Header from './components/Header'
import routes from './routes'
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        {routes}
      </div>
    )
  }
}

export default App;
