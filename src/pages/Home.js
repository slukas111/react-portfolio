import React, { Component } from "react";
import Skills from "../components/Skills";

// import React from 'react';



class Home extends Component {
    render() {
        return (
            <div>
                <h2>About Me:</h2>
                <p>My name is Sasha Lukas and I'm a native born from South Missippi, Gulfport.
                    I am a roaming transplant, that has spent years traveling the country working and exploring.
                    In 2011, made my home in the western portion of the state of Washington. My prior work history was odd end
                    jobs, bartending, and two years of store management. On many occassions I found myself coding, photography,
                    and film to help boost visibility. 
                </p>
                <hr />
                <br />
                <p><Skills/></p>
            </div>
        );
    }
}

export default Home;