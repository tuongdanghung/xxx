// @flow
import { useState, useHistory, useEffect } from 'react';
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
import { Login } from "../view/auth/login"
import ProtectedRoute from "../view/routing/ProtectedRoute"
export function Routers() {
    const [isLogin, setLogin] = useState(false)
    const history = useHistory()


    return isLogin ? (
        <div>
            <Header />
            <main>
                <AuthContextProvider>
                    <Switch>
                        <Route exact path="/home" component={Homepage} />
                        <Route exact path="/student" component={Student} />
                        <ProtectedRoute exact path="/register" render={props => <Auth {...props} authRoute="register" />} />
                    </Switch>
                </AuthContextProvider>
            </main>
        </div>
    ) : (
        <Switch>
            <Route exact path="/login" component={Login} />
        </Switch>
    )
};