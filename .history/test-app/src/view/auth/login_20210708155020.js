import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth"
export const Login = () => {

    const { loginUser } = useContext(AuthContext)

    // Local state
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })

    const [alert, setAlert] = useState(null)

    const { userName, password } = loginForm

    const onChangeLoginForm = event =>
        setLoginForm({ ...loginForm, [event.target.name]: event.target.value })

    const login = async event => {
        event.preventDefault()

        try {
            const loginData = await loginUser(loginForm)
            if (!loginData.success) {
                setAlert({ type: 'danger', message: loginData.message })
                setTimeout(() => setAlert(null), 5000)
            }
        } catch (error) {
            console.log(error)
        }



    }
    return (
        <div className="row">
            <form className="form mx-auto" onSubmit={login}>
                <div className="form-group">
                    <label>User Name</label>
                    <input name="userName" value={userName} onChange={onChangeLoginForm} type="text" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input name="password" value={password} onChange={onChangeLoginForm} type="password" className="form-control" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>

        </div>
    )
}