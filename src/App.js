import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Navigation from './components/Navigation'
import News from './components/News'
import Home from './components/Home'
import BottomTag from './components/BottomTag'
import NewsList from './components/NewsList'
import MainNews from './components/MainNews'
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
      </div>
      <Switch>
        <Route exact path="/">
          <div className="sections">
            <Navigation />
            <Home />
            <News />
            <BottomTag />
            <NewsList />
          </div>
        </Route>
        <Route path="/news">
          <MainNews />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
