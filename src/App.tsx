import List from "./components/tweet/List"
import TweetView from "./components/tweet/TweetView"
import { Router, Link, RouteComponentProps } from "@reach/router"


import './App.css';

function App(props: RouteComponentProps) {
  return (
    <div className="app">
      <header className="App-header">
         <h1>Universe Twitter</h1>
         <List url="posts"/>
      </header>
    </div>
  );
}

function MyApp(){
  return(
  <Router>
    <App path="/"/>
    <TweetView path="tweet/:tweetId"/>
    <List path="/list/u/:userId"/>
  </Router>
  )
}

export default MyApp;
