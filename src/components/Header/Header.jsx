import Navigation from "../Navigation/Navigation"
import Hero from "./Hero"
import '../Header/Header.css'
import '../../index.css'

const Header = () => {
    return (
        <header className="header">
            <Navigation/>
            <Hero/>
        </header>
    
    )
}

export default Header;