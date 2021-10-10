import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";

import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import AllMethods from "./pages/AllMethods/AllMethods";
import ChosenMethods from "./pages/ChosenMethods/ChosenMethods";
import ChosenMethod from "./components/ChosenMethod/ChosenMethod";
import References from "./pages/References/References";
import Tags from "./pages/Tags/Tags";
import Tag from "./components/Tag/Tag";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="seperator"></div>
        <div className="appContainer">
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route
              exact
              path="/chosen-methods"
              render={() => <ChosenMethods />}
            />
            <Route path="/chosen-methods/:id" render={() => <ChosenMethod />} />
            <Route exact path="/all-methods" render={() => <AllMethods />} />
            <Route exact path="/tags" render={() => <Tags />} />
            <Route exact path="/tags/:id" render={() => <Tag />} />
            <Route exact path="/references" render={() => <References />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
