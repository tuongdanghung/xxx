// @flow
// import { useState } from 'react';
import "../css/routers.scss";
import {
    Switch,
    Route,
} from "react-router-dom";
import { Homepage } from "../view/home"
import { Student } from "../view/crud"
import { Header } from "./header"
import AuthContextProvider from "../context/auth"
import Auth from "../view/AuthLogin"
import Landing from "../view/auth/langding"
import ProtectedRoute from "../view/routing/ProtectedRoute"
export function Routers() {
    return (
        <div>
            <Header />
            <main>
                <AuthContextProvider>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/home" component={Homepage} />
                        <Route exact path="/student" component={Student} />
                        <Route exact path="/login" render={props => <Auth {...props} authRoute="login" />} />
                        <ProtectedRoute exact path="/register" render={props => <Auth {...props} authRoute="register" />} />
                    </Switch>
                </AuthContextProvider>
            </main>
        </div>
    )
};