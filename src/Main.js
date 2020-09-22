import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./pages/Home.js";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume"

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Sasha Lukas Portfolio</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/project">Project</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/resume">Resume</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/project" component={Project} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/resume" component={Resume} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;