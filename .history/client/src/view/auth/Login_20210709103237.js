import React from 'react'

const Login = () => {
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

export default Login
