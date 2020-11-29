import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
// import HotelsView from "../Views/HotelsView/HotelsView";
// import SingleHotelView from '../Views/SingleHotelView/SingleHotelView';

function App() {
  return (
    <div className="App">
      <Router>
				<div className={"hotel-app"}>
					<Navigation/>
					<Switch>
						<Route path="/" exact component={HotelsView}/>
						<Route path={"/hotel/:id"} component={SingleHotelView}/>
						{/* <Route path="/reservation" component={ReservationsView}/>
						<Route path="/buy" component={BuyHotelsView}/>
						<Route path="/add" component={AddHotelsView}/>
						<Route path="/send" component={AddHotelReview}/>
						<Route path="/forbidden" component={Forbidden}/>
						<Route path="/add/success" component={AddHotelSuccess}/>
						<Route component={NoMatch}/> */}
					</Switch>

				</div>
			</Router>
    </div>
  );
}

export default App;
