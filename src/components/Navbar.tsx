import { Link } from "react-router-dom";
import { SingleLevelDropdownMenu } from "./DropdownMenu";
import ThemeToggle from "./ThemeToggle";
import { profile, navItems } from "../data/portfolioData";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            {/* Brand links back to the home page. Text comes from portfolioData. */}
            <Link to="/" className="navbar-left">
                {profile.name}
            </Link>

            <div className="navbar-right">
                {/* Inline nav links for wider screens. */}
                <div className="navbar-links">
                    {navItems.map((item) => (
                        <Link key={item.url} to={item.url} className="navbar-link">
                            {item.title}
                        </Link>
                    ))}
                </div>

                {/* Dropdown menu used on small screens (shown via CSS). */}
                <div className="navbar-menu">
                    <SingleLevelDropdownMenu
                        buttonLabel="Menu"
                        items={navItems.map((item) => ({ title: item.title, url: item.url }))}
                    />
                </div>

                <ThemeToggle />
            </div>
        </nav>
    );
}
