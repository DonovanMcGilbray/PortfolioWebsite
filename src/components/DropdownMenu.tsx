import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./DropdownMenu.css";

interface SingleLevelDropdownMenuProps {
    buttonLabel: string;
    items: {
        title: string;
        url?: string;
        icon?: React.ReactNode;
        action?: () => void;
    }[];
}

export const SingleLevelDropdownMenu = ({
    buttonLabel,
    items,
}: SingleLevelDropdownMenuProps) => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const handleToggle = () => setOpen((prev) => !prev);

    // Close the menu when the user clicks or taps anywhere outside of it.
    useEffect(() => {
        const handler = (event: MouseEvent | TouchEvent) => {
            if (
                open &&
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [open]);

    return (
        <div className="dropdown" ref={menuRef}>
            <button
                ref={buttonRef}
                type="button"
                className="dropdown-button"
                onClick={handleToggle}
                aria-expanded={open}
            >
                {buttonLabel}
                <span className="dropdown-chevron">
                    {open ? <FaChevronUp /> : <FaChevronDown />}
                </span>
            </button>

            {open && (
                <ul className="dropdown-list">
                    {items.map((item) => (
                        <li key={item.title} className="dropdown-item">
                            {item.url ? (
                                <Link
                                    to={item.url}
                                    className="dropdown-link"
                                    onClick={() => setOpen(false)}
                                >
                                    {item.title}
                                </Link>
                            ) : (
                                <button
                                    className="dropdown-link"
                                    onClick={() => {
                                        item.action?.();
                                        setOpen(false);
                                    }}
                                    type="button"
                                >
                                    {item.title}
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
