import { NavLink } from "react-router-dom";
import "./header.scss";
import { AuthContext } from "../../../context/AuthContext"
import { useContext } from "react"
export function Header() {
    const { authState:
        { user: { username }
        },
        logoutUser }
        = useContext(AuthContext)
    // 
    const logOut = () => logoutUser()
    return (
        <nav>
            <h1>hello {username}</h1>
            <div className="logo"><h1>Todo List</h1></div>
            <ul>
                <li>
                    <NavLink exact={true} to="/home"><i className="fa fa-home" aria-hidden="true"></i>Home</NavLink>
                </li>
                {/* <li>
                    <NavLink exact={true} to="/student"><i className="fa fa-graduation-cap" aria-hidden="true"></i>Student</NavLink>
                </li> */}

                <li>
                    <NavLink exact={true} to="/todo"><i className="fa fa-home" aria-hidden="true"></i>Todo list</NavLink>
                </li>
                <li>
                    <NavLink exact={true} to="/todo" onClick={logOut}><i className="fa fa-sign-out" aria-hidden="true"></i>Logout</NavLink>
                </li>
            </ul>
        </nav>
    );
};