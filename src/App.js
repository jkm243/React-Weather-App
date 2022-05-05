import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home"
import Nav from "./components/Nav"
import Header from './components/Header';
import Footer from "./components/Footer"
import About from "./components/About"
import Weather from "./components/Weather"
function App() {
  return (
    <div>
      <Header />
      {<BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/weather" component={Weather} />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>}
    </div>
  )
}

export default App
