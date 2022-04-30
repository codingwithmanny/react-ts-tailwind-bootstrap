// Imports
// ========================================================
import { Link } from "react-router-dom";

// Main Page
// ========================================================
const Nav = () => {
  return <nav className="border-b border-slate-100 py-6">
    <div className="flex justify-between">
      <h1>Title</h1>
      <ul className="flex">
        <li className="mx-2"><Link to="/">Home</Link></li>
        <li className="mx-2"><Link to="/about">About</Link></li>
      </ul>
    </div>
  </nav>
};

// Exports
// ========================================================
export default Nav;