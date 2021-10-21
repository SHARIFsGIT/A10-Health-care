import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import { BrowserRouter,Switch ,Route } from 'react-router-dom';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import PageNotFound from './Component/PageNotFound/PageNotFound';
import Header from './Component/Header/Header';
import Register from './Component/Register/Register';
import Doctors from './Component/Doctors/Doctors';
import AllService from './Component/All-Service/AllService';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Footer from './Component/Footer/Footer';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div >
        <AuthProvider>
        <BrowserRouter>
        <Header></Header>
        <Switch>
    <Route exact  path="/" >
        <Home></Home>
      </Route>
      <Route path="/home" >
        <Home></Home>
      </Route>
      <PrivateRoute path = "/allservices">
      <AllService></AllService>
      </PrivateRoute>
      <Route path="/about" >
        <About></About>
      </Route>
    
      <Route path="/contact" >
        <Contact></Contact>
      </Route>
      <PrivateRoute path = "/doctors">
      <Doctors></Doctors>
      </PrivateRoute>
      <Route path="/register" >
        <Register></Register>
      </Route>
      <Route path="*" >
        <PageNotFound></PageNotFound>
      </Route>
    </Switch>
    <Footer></Footer>
        </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
