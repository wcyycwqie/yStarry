import React from 'react'
import { BrowserRouter, HashRouter, Route, Link, Switch } from 'react-router-dom';
import Home from '../pages/home'
import Header from '../components/header'
import UserInfo from '../pages/userInfo'
import CaseDetail from '../pages/caseDetail';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/case-detail" component={CaseDetail} />
                <Route path="/userinfo" component={UserInfo} />
                <Route path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    )

}

export default AppRouter