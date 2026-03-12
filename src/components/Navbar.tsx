import { SingleLevelDropdownMenu } from "./DropdownMenu.tsx";

export default function Navbar() {
    return (
        <nav className = "flex items-center justify-between p-4 bg-white shadow">
            <h1 className = "text-lg font-bold">Portfolio</h1>
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
        </nav>
    );
}