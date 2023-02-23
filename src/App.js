import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";

import ListUserComponent from './components/ListUserComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateUserComponent from './components/CreateUserComponent';
import UpdateUserComponent from './components/UpdateUserComponent';
import ViewUserComponent from './components/ViewUserComponent';
import ListProductComponent from './components/ListProductComponent';
import CreateProductComponent from './components/CreateProductComponent';
import UpdateProductComponent from './components/UpdateProductComponent';
import ViewProductComponent from './components/ViewProductComponent';
import UserDashboardComponent from './components/UserDashboardComponent';
import ServiceDashboardComponent from './components/ServiceDashboardComponent';
import ListServiceComponent from './components/ListServiceComponent';
import CreateServiceComponent from './components/CreateServiceComponent';
import UpdateServiceComponent from './components/UpdateServiceComponent';
import ViewServiceComponent from './components/ViewServiceComponent';
import ListServicereportComponent from './components/ListServicereportComponent';
import CreateServicereportComponent from './components/CreateServicereportComponent';
import UpdateServicereportComponent from './components/UpdateServicereportComponent';
import ViewServicereportComponent from './components/ViewServicereportComponent';

// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Service Booking Management
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            


          </div>
          <div className="navbar-nav mr-auto">

            {currentUser && (
              <li className="nav-item">
                <Link to={"/Users"} className="nav-link">
                  User Dashboard
                </Link>
              </li>
            )}
            {currentUser && (
              <li className="nav-item">
                <Link to={"/Products"} className="nav-link">
                  Product Dashboard
                </Link>
              </li>
            )}
            {currentUser && (
              <li className="nav-item">
                <Link to={"/servicedashboard"} className="nav-link">
                  Service Dashboard
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path = "/Products" component = {ListProductComponent}></Route>
            <Route path = "/add-product/:id" component = {CreateProductComponent}></Route>
            <Route path = "/view-product/:id" component = {ViewProductComponent}></Route>
            <Route path = "/update-product/:id" component = {UpdateProductComponent}></Route>
            <Route path = "/Users" component = {ListUserComponent}></Route>
            <Route path = "/add-user/:id" component = {CreateUserComponent}></Route>
            <Route path = "/view-user/:id" component = {ViewUserComponent}></Route>
            <Route path = "/update-user/:id" component = {UpdateUserComponent}></Route>
            <Route path = "/userdashboard" component = {UserDashboardComponent}></Route>
            <Route path = "/servicedashboard" component = {ServiceDashboardComponent}></Route>
            <Route path = "/services" component = {ListServiceComponent}></Route>
            <Route path = "/add-service/:id" component = {CreateServiceComponent}></Route>
            <Route path = "/view-service/:id" component = {ViewServiceComponent}></Route>
            <Route path = "/update-service/:id" component = {UpdateServiceComponent}></Route>
            <Route path = "/servicereports" component = {ListServicereportComponent}></Route>
            <Route path = "/add-servicereport/:id" component = {CreateServicereportComponent}></Route>
            <Route path = "/view-servicereport/:id" component = {ViewServicereportComponent}></Route>
            <Route path = "/update-servicereport/:id" component = {UpdateServicereportComponent}></Route>
          </Switch>
        </div>

        { /*<AuthVerify logOut={this.logOut}/> */ }
      </div>
    );
  }
}

export default App;
