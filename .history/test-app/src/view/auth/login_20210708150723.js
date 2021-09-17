import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth"
export const Login = () => {

    const { loginUser } = useContext(AuthContext)

    const [loginForm, setLogin] = useState({
        userName: '',
        password: ''
    })
    // 
    const { userName, password } = loginForm
    // 
    const onchangeLogin = e => setLogin({ ...loginForm, [e.target.name]: e.target.value })
    // 
    const login = async e => {
        e.preventDefault()
        try {
            const loginData = await loginUser(loginForm)
            console.log(loginUser);
        } catch (error) {

        }


    }
    return (
        <div className="row">
            <form className="form mx-auto" onSubmit={login}>
                <div className="form-group">
                    <label>User Name</label>
                    <input name="userName" value={userName} onChange={onchangeLogin} type="text" className="form-control" placeholder="Enter email" />
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