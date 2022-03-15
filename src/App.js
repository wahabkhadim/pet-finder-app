// import Pet from "./Pet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./Details";
import { Link } from "react-router-dom";

import "./App.css";
import SearchParams from "./SearchParams";

function App() {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        ;
        <Switch>
          <Route path="/details/:id"><Details /></Route>
          <Route path="/"><SearchParams /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
