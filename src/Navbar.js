import { Link, useMatch, useResolvedPath } from "react-router-dom"
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';


export default function Navbar() {
    const path = window.location.pathname
    return <nav className="nav">
        <ul>
            <CustomLink to="/create"><AddCircleSharpIcon /></CustomLink>
            <Link to="/" className="site-title">Task List</Link>
            <CustomLink to="/settings"> <SettingsSharpIcon /></CustomLink>

        </ul>
    </nav>
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}