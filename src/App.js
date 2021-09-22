import "./App.css";
import { Route, Redirect, Switch } from "react-router";
import Home from "./pages/home/home";
import Faq from "./pages/faq/faq";
import About from "./pages/about/about";
import Book from "./pages/book/book";
import ErrorComponent from "./pages/errorComponent/errorComponent";
import Admin from "./pages/admin/admin";
import { useSelector } from "react-redux";
import Checkout from "./pages/checkout/checkout";

function App() {
  // const user = {
  //   claims : {
  //    admin : false
  //   }
  // }

  const user = useSelector((state) => state.user.userDetails);
  console.log(user);

  if (user.claims.admin) {
    return (
      <div className="App">
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/add" component={Admin} />
          <Route path="/users" component={Admin} />
          <Route path="/orders" component={Admin} />
          <Redirect from="/" exact to="/admin" />
          <Redirect exact to="/admin" />
        </Switch>
      </div>
    );
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/faq" component={Faq} />
        <Route path="/about" component={About} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/books/:id" component={Book} />
        <Route path="/notFound" component={ErrorComponent} />

        <Redirect from={["/", "/admin", "/add", "/user"]} exact to="/home" />
        <Redirect exact to="/notFound" />
      </Switch>
    </div>
  );
}

export default App;
