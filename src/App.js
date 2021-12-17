import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./component/Home.js";
import Destinations from "./component/Destinations.js";
import Accomodation from "./component/Accomodation.js";
import Experience from "./component/Experience.js";
import Place from "./pages/place/Place.js";
import Blog from "./component/Blog.js";
import "./component/styles/navbar.css";
import Login from "./pages/Login";
import "./App.css";
import NotFound from "./pages/NotFound.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/destinations" component={Destinations} exact></Route>
          <Route path="/accomodation" component={Accomodation} exact></Route>
          <Route path="/experiences" component={Experience} exact></Route>
          <Route path="/blog" component={Blog} exact></Route>
          <Route path="/login" component={Login} exact></Route>
          <Route path="/place/:name" component={Place}></Route>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
