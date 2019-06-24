import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../src/components/home/HomePage";
import AboutPage from "../src/components/about/AboutPage";
import SkillsPage from "../src/components/skills/SkillsPage";
import PageNotFound from "../src/components/PageNotFound";
import skills from "./tools/mockData";
import SkillPage from "../src/components/skills/SkillPage";

function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={HomePage} />
        <Route path={process.env.PUBLIC_URL + "/about"} component={AboutPage} />
        <Route
          path={process.env.PUBLIC_URL + "/skills"}
          component={props => <SkillsPage {...props} skills={skills} />}
        />
        {skills.skills.map(skill => (
          <Route
            key={skill.id}
            path={process.env.PUBLIC_URL + "/" + skill.slug}
            component={props => <SkillPage {...props} skill={skill} />}
          />
        ))}
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
