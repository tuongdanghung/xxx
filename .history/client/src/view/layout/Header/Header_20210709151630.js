import { NavLink } from "react-router-dom";
import "./header.scss";
export function Header() {
    return (
        <nav>
            <div className="logo"><h1>Todo List</h1></div>
            <ul>
                <li>
                    <NavLink exact={true} to="/home"><i className="fa fa-home" aria-hidden="true"></i>Home</NavLink>
                </li>
                <li>
                    <NavLink exact={true} to="/student"><i className="fa fa-graduation-cap" aria-hidden="true"></i>Student</NavLink>
                </li>
            </ul>
        </nav>
    );
};