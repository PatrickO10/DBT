import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../src/components/home/HomePage";
import AboutPage from "../src/components/about/AboutPage";
import SkillsPage from "../src/components/skills/SkillsPage";
import PageNotFound from "../src/components/PageNotFound";

function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/skills" component={SkillsPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
