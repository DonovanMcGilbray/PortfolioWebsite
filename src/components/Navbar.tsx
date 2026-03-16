import { SingleLevelDropdownMenu } from "./DropdownMenu.tsx";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className = "navbar">
            <h1 className = "navbar-left">Portfolio</h1>
            <div className = "navbar-right">
                <div style = {{ display: "inline-block" }}>
                    <SingleLevelDropdownMenu
                        buttonLabel = "Menu"
                        items = {[
                            {title: "Home", url: "/"},
                            {title: "About", url: "/about"},
                            {title: "Resume", url: "/resume"},
                            {title: "Portfolio", url: "/portfolio"},
                            {title: "Blog", url: "/blog"},
                            {title: "Contact", url: "/contact"},
                        ]}
                    />
                </div>
            </div>
        </nav>
    );
}