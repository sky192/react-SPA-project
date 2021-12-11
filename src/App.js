import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Products from "./components/Products";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />

                <Switch>
                    <Route path="/products" component={Products} />
                    <Route path="/" component={LandingPage} />
                </Switch>

                <Footer />
            </div>
        );
    }
}

export default App;
