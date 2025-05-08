import { Link } from "react-router-dom";

export default function Layout() {
    return (
        <>
        <h1> My portfolio</h1>
        <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/education">Education</Link> | <Link to="/projects">Projects</Link> | <Link to="/contact">Contact</Link>
        </nav>
        </>
    )
}