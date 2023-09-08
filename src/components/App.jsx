import React, { useState } from "react";
import ReactDOM from "react-dom";
import Project from "./project";
import AboutMe from "./aboutMe";
import NotFound from "./not_found";
import Home from "./home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/project" element={<Project />} />
                <Route path="/aboutMe" element={<AboutMe />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
