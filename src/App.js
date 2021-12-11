import React, { Component } from "react";

import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <LandingPage />
                <Footer />
            </div>
        );
    }
}

export default App;
