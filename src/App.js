import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      {/* Resets scroll to the top on every page navigation. */}
      <ScrollToTop />
      <div className = "app-layout">
        <Navbar />
        <main className = "app-main">
          <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/about" element = {<About />} />
            <Route path="/resume" element = {<Resume />} />
            <Route path="/portfolio" element = {<Portfolio />} />
            <Route path="/portfolio/:slug" element = {<PortfolioDetail />} />
            <Route path="/blog" element = {<Blog />} />
            <Route path="/blog/:slug" element = {<BlogDetail />} />
            <Route path="/contact" element = {<Contact />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
