import { useEffect } from "react";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";
import "./Toast.css";

/**
 * Toast
 * -----
 * A small, self-dismissing notification shown in the bottom-right corner.
 * Used by the Contact form to give success / error feedback.
 *
 * Props:
 *  - type: "success" | "error" (controls color and icon)
 *  - message: the text to display
 *  - onClose: called when the toast should disappear (auto after a delay,
 *    or when the user clicks the close button)
 */
function Toast({ type = "success", message, onClose }) {
  // Auto-dismiss after 5 seconds.
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast toast-${type}`} role="status" aria-live="polite">
      <span className="toast-icon">
        {type === "success" ? <FaCheckCircle /> : <FaExclamationCircle />}
      </span>
      <p className="toast-message">{message}</p>
      <button className="toast-close" onClick={onClose} aria-label="Dismiss">
        <FaTimes />
      </button>
    </div>
  );
}

export default Toast;
