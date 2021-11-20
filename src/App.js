import Navbar from "./compoent/navbar.js"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./compoent/Home.js";
import Destinations from "./compoent/Destinations.js";
import Accomodation from "./compoent/Accomodation.js";
import Experience from "./compoent/Experience.js";
import Blog from "./compoent/Blog.js";
import Intro from "./compoent/Intro.js";
import "./compoent/styles/navbar.css";
import Bottom from "./compoent/bottom.js"
import "./App.css"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/destinations" component={Destinations} ></Route>
          <Route path="/accomodation" component={Accomodation} ></Route>
          <Route path="/experiences" component={Experience} ></Route>
          <Route path="/blog" component={Blog} ></Route>
          </Switch>
      <Intro/>
      <Destinations/>
      <Accomodation/>
      <Bottom/>
      </BrowserRouter>
    </div>
  );
}

export default App;
