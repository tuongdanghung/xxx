import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth"
import { useHistory } from 'react-router-dom'
export const Login = () => {

    const { loginUser } = useContext(AuthContext)
    const History = useHistory()
    const [loginForm, setLogin] = useState({
        username: '',
        password: ''
    })
    // 
    const { username, password } = loginForm
    // 
    const onchangeLogin = e => setLogin({ ...loginForm, [e.target.name]: e.target.value })
    // 
    const login = async e => {
        e.preventDefault()
        try {
            const loginData = await loginUser(loginForm)
            if (loginData.success) {
                History.push('home')
            } else {

            }
        } catch (error) {
            console.log(error);
        }


    }
    return (
        <div className="row">
            <form className="form mx-auto" onSubmit={login}>
                <div className="form-group">
                    <label>User Name</label>
                    <input name="username" value={username} onChange={onchangeLogin} type="text" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input name="password" value={password} onChange={onchangeLogin} type="password" className="form-control" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>

        </div>
    )
}