import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Random from "./pages/Random";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Category from "./pages/Category";
import Recipe from "./pages/Recipe";


function App() {
    return (
        <>
            <Router basename='/What-did-my-wife-cook'>
                <Header/>
                <main className="container content">
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/random" component={Random}/>
                        <Route path="/contacts" component={Contact}/>
                        <Route path="/category/:name" component={Category}/>
                        <Route path="/meal/:id" component={Recipe}/>
                        <Route component={NotFound}/>
                    </Switch>
                </main>
                <Footer/>
            </Router>
        </>
    )
}

export default App;