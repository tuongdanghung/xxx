import { NavLink } from "react-router-dom";
import "./header.scss";
import { AuthContext } from "../../../context/AuthContext"
import { PostContext } from "../../../context/PostContext"
import { useContext, useEffect } from 'react'
// import Bug from '../../../asset/images/bug.svg';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));


export function Header() {
    const classes = useStyles();

    const { authState:
        { user: { username }
        },
        logoutUser }
        = useContext(AuthContext)
    // 
    const {
        postState: { post },
        getPosts,
    } = useContext(PostContext)

    // 
    const logOut = () => logoutUser()
    useEffect(() => getPosts(), [])
    console.log(post);
    return (
        <nav>
            <div className={classes.root}>
                <Badge color="secondary" badgeContent={0} showZero>
                    <MailIcon />
                </Badge>
            </div>
            <div className="logo"><h4>Chào Mừng {username} Tới Todo List</h4></div>

            <ul>
                <li>
                    <NavLink exact={true} to="/home"><i className="fa fa-home" aria-hidden="true"></i>Home</NavLink>
                </li>

                <li>
                    <NavLink exact={true} to="/covid-19">
                        <i class="fa fa-certificate" aria-hidden="true"></i>
                        Covid-19</NavLink>
                </li>


                <li>
                    <NavLink exact={true} to="/todolist"><i className="fa fa-graduation-cap" aria-hidden="true"></i>Todo list</NavLink>
                </li>

                <li>
                    <NavLink exact={true} to="/login" onClick={logOut}><i className="fa fa-sign-out" aria-hidden="true"></i>Logout</NavLink>
                </li>
            </ul>
        </nav>
    );
};