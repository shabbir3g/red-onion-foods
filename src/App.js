import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Breakfastdetails from './components/Breakfast/Breakfastdetails';
import Checkout from './components/Checkout/Checkout';
import Dinner from './components/Dinner/Dinner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Lunch from './components/Lunch/Lunch';
import PageNotFound from './components/PageNotFound/PageNotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router> 
      <Header></Header>
        <Switch> 
          <Route exact path="/"> 
            <Home></Home>
          </Route>
          <Route exact path="/home"> 
            <Home></Home>
          </Route>
          <Route exact path="/breakfast/:fastId"> 
            <Breakfastdetails></Breakfastdetails>
          </Route>
          <Route exact path="/home/lunch"> 
            <Lunch></Lunch>
          </Route>
          <Route exact path="/home/dinner"> 
            <Dinner></Dinner>
          </Route>
          <Route path="/login"> 
            <Login></Login>
          </Route>
          <Route path="/register"> 
            <Register></Register>
          </Route>
          <PrivateRoute path="/checkout"> 
            <Checkout></Checkout>
          </PrivateRoute>
          <PrivateRoute path="/order"> 
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route path="*"> 
            <PageNotFound></PageNotFound>
          </Route>
          
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>

     
    </div>
  );
}

export default App;
