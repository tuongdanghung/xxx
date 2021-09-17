import { NavLink } from "react-router-dom";
import "./header.scss";
import { AuthContext } from "../../../context/AuthContext"
import { useContext } from "react"
// import Bug from '../../../asset/images/bug.svg';
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

                <li>
                    <NavLink exact={true} to="/covid-19">
                        {/* <img src={Bug} alt='' width='20' height='16' /> */}
                        Covid-19</NavLink>
                </li>


                <li>
                    <NavLink exact={true} to="/todolist"><i className="fa fa-graduation-cap" aria-hidden="true"></i>Todo list</NavLink>
                </li>

                <li>
                    <NavLink exact={true} to="/login" onClick={logOut}><i class="fa fa-certificate" aria-hidden="true"></i>Logout</NavLink>
                </li>
            </ul>
        </nav>
    );
};