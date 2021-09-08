import "./App.css";
import { Route, Redirect, Switch } from "react-router";
import Home from "./pages/home/home";
import Faq from "./pages/faq/faq";
import About from "./pages/about/about";
import Book from './pages/book';
import ErrorComponent from "./pages/errorComponent/errorComponent";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/faq" component={Faq} />
        <Route path="/about" component={About} />
        <Route path="/books/:id" component={Book} />
        <Route path="/notFound" component={ErrorComponent} />


        <Redirect exact to="/notFound" />
      </Switch>
    </div>
  );
}

export default App;
