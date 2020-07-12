import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "../Pages/Landing";
import About from "../Pages/About";
import Project from "../Pages/Projects";
import Contact from "../Pages/Contact";
import Header from "../Header";

const App = () => {
   return (
    <Router>
        <Header />
        <div className="app-background">
            <Switch>
                <Route path="/" component={Landing} exact />
                <Route path="/about" component={About} exact />
                <Route path="/project" component={Project} exact />
                <Route path="/contact" component={Contact} exact />
            </Switch>
       </div>
    </Router>
   );
}

export default App;
