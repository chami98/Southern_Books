import logo from "./logo.svg";
import "./App.css";
import { Route, Redirect, Switch } from "react-router";
import Home from "./pages/home/home";
import Faq from './pages/faq/faq';
import About from './pages/about/about';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/faq" component={Faq} />
        <Route path="/about" component={About} />
        <Redirect from="/" exact to="/home" />
      </Switch>
    </div>
  );
}

export default App;
