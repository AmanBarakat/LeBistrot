import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Today_menu from './Today_menu';
import Reservation from './Reservation';
import Today_recepies from './Today_recepies';

class Page extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Today_menu} />
                    <Route path="/recepies" exact component={Today_recepies} />
                    <Route path="/reservation" exact component={Reservation} />
                </Switch>
            </Router>
        )
    }
}
export default Page
