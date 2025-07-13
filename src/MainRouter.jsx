// File: MainRouter.jsx | Student: Marianna McCue | StudentID: 301481506 | Date: May 2025
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Projects from "./components/Projects"
import About from "./components/About"
import Contact from "./components/Contact"
import Services from "./components/Services"
import Home from "./components/Home"
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'


const MainRouter = () => {
    return (
        <div>
            <Layout />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </div>
    )
}

export default MainRouter