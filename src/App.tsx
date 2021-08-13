import React from "react";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Slicer from "./pages/HomePage/Slicer";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/introduction">
            <Slicer stage={0} />
          </Route>
          <Route path="/">
            <SideBar />
          </Route>
          <Route path="*">
              <h1>Not Found</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
