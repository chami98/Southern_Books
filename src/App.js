import './App.css';
import { Route, Redirect, Switch } from 'react-router';
import Home from './pages/home/home';
import Faq from './pages/faq/faq';
import About from './pages/about/about';
import Book from './pages/book/book';
import ErrorComponent from './pages/errorComponent/errorComponent';
import Admin from './pages/admin/admin';
import { useSelector } from 'react-redux';
import Checkout from './pages/checkout/checkout';
import Employee from './pages/employee/employee';
import MockInitiate from './mock-payment/initiate';
import Orders from './pages/employee/Orders';
import Reports from './pages/employee/Reports';
import UserOrders from './pages/userOrders/userOrders';

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
					<Route path="/reports" component={Reports} />
					<Redirect from="/" exact to="/admin" />
					<Redirect exact to="/admin" />
				</Switch>
			</div>
		);
	} else if (user.claims.employee) {
		return (
			<div className="App">
				<Switch>
					<Route path="/employee" component={Employee} />
					<Route path="/orders" component={Orders} />
					<Redirect from="/" exact to="/employee" />
					<Route path="/Books1" component={Employee} />
					<Route path="/boks" component={Employee} />
					<Route path="/books" component={Employee} />
					<Redirect exact to="/employee" />
				</Switch>
			</div>
		);
	} else if (user.claims.manager) {
		return (
			<div className="App">
				<Switch>
					{/* <Route path="/admin" component={Admin} /> */}
					{/* <Route path="/add" component={Admin} /> */}
					{/* <Route path="/users" component={Admin} /> */}
					<Route path="/reports" component={Reports} />
					<Redirect from="/" exact to="/reports" />
					<Redirect exact to="/reports" />
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
				<Route path="/orders" component={UserOrders} />
        
				<Route path="/notFound" component={ErrorComponent} />
				{/* <Redirect from={["/", "/admin", "/add", "/user" , "/employee"]} exact to="/home" /> */}
				<Redirect exact to="/notFound" />
			</Switch>
			<MockInitiate show={true} />
		</div>
	);
}

export default App;
