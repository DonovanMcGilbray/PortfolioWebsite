import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop
 * -----------
 * By default, React Router keeps the previous scroll position when you
 * navigate between pages. This component fixes that: it watches the current
 * URL (via useLocation) and, every time the path changes, scrolls the window
 * back to the top (0, 0).
 *
 * It renders nothing — it only runs the scroll side effect. Place it inside
 * <Router> so it has access to the router context.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "instant" avoids a long smooth-scroll animation on page change, which
    // can feel sluggish when the previous page was scrolled far down.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
