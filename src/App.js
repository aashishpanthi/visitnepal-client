import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./component/Home.js";
import Destinations from "./component/Destinations.js";
import Accomodation from "./component/Accomodation.js";
import Experience from "./component/Experience.js";
import Blog from "./component/Blog.js";
import "./component/styles/navbar.css";
import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/destinations" component={Destinations}></Route>
          <Route path="/accomodation" component={Accomodation}></Route>
          <Route path="/experiences" component={Experience}></Route>
          <Route path="/blog" component={Blog}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
