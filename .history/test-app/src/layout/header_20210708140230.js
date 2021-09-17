import { NavLink } from "react-router-dom";
import "../css/header.scss";
export function Header() {
    return (
        <nav>
            <div className="logo"><h1>Todo List</h1></div>
            <ul>
                <li>
                    <NavLink exact={true} to="/"><i className="fa fa-home" aria-hidden="true"></i>Home</NavLink>
                </li>
                <li>
                    <NavLink exact={true} to="/student"><i className="fa fa-graduation-cap" aria-hidden="true"></i>Student</NavLink>
                </li>
                <li>
                    <NavLink exact={true} to="/login"><i className="fa fa-sign-out" aria-hidden="true"></i>Login</NavLink>
                </li>
                <li>
                    <NavLink exact={true} to="/register"><i className="fa fa-sign-out" aria-hidden="true"></i>dang ky</NavLink>
                </li>
            </ul>
        </nav>
    );
};