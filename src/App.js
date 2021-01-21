import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Videos from "./Components/Videos";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Searchpage from "./Components/Searchpage";

function App() {
	return (
		<div className="app">
			<Router>
				<Header />
				<Switch>
					<Route path="/search/:searchTerm">
						<div className="app__page">
							<Sidebar />
							<Searchpage />
						</div>
					</Route>
					<Route path="/">
						<div className="app__page">
							<Sidebar />
							<Videos />
						</div>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
