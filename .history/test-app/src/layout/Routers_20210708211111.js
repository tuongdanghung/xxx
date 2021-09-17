// @flow
import { useEffect, useState } from 'react';
import "../css/routers.scss";
import {
    Switch,
    Route,
    useHistory
} from "react-router-dom";
import { Homepage } from "../view/home"
import { Student } from "../view/crud"
import { Header } from "./header"
import AuthContextProvider from "../context/auth"
import Auth from "../view/AuthLogin"
import ProtectedRoute from "../view/routing/ProtectedRoute"
import { Login } from "../view/auth/login"
export function Routers() {
    const [isLogin, setLogin] = useState(false)
    const history = useHistory()
    const accessToken = localStorage.getItem('test-app')
    console.log(accessToken);
    useEffect(function () {

        if (!accessToken) {
            setLogin(false)
            history.push('/login')
        } else {
            setLogin(true)
        }
    })
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
        <AuthContextProvider>
            <Switch>
                <Route exact path="/login" component={Login} />
            </Switch>
        </AuthContextProvider>
    )
};