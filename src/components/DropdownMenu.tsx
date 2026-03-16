import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

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
    const [, setFocusedIndex] = useState<number | null>(null);
    const handleToggle = () => {
        setOpen((prev) => {
            if(!prev) setFocusedIndex(null);
            return !prev;
        });
    };
    const menuRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    useEffect(() => {
        const handler = (event: MouseEvent | TouchEvent) => {
            if(
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
        <div className = "inline-flex relative" ref = {menuRef}>
            <button
                ref = {buttonRef}
                type = "button"
                className = "inline-flex items-center justify-center rounded-md text-sm border border-[#e4e4e7] h-10 px-4 py-2"
                onClick = {handleToggle}
            >
                {buttonLabel}
                <span className = "ml-2">
                    {open ? <FaChevronUp /> : <FaChevronDown />}
                </span>
            </button>
            {open && (
                <div className = "absolute right-0 top-12">
                    <ul className = "w-56 h-auto shadow-md rounded-md p-1 border bg-white">
                        {items.map((item) => (
                            <li
                                key = {item.title}
                                className = {'relative flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 rounded-md'}
                            >
                                {item.url ? (
                                    <Link
                                        to = {item.url}
                                        className = "w-full text-left"
                                        onClick = {() => setOpen(false)}
                                    >
                                        {item.title}
                                    </Link>
                                ) : (
                                    <button 
                                        className = "w-full text-left"
                                        onClick = {() => {
                                            item.action?.();
                                            setOpen(false);
                                        }}
                                        type = "button"
                                    >
                                        {item.title}
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};