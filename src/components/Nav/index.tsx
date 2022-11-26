// Imports
// ========================================================
import { Link } from "react-router-dom";

// Main Page
// ========================================================
const Nav = ({ className = ''}) => {
  return <nav className={`border-b border-slate-100 p-6 ${className}`}>
    <div className="flex justify-between">
      <h1 className="text-slate-400">Title</h1>
      <ul className="flex">
        <li className="mx-2"><Link className="font-medium text-zinc-500 hover:text-zinc-700 transition-colors ease-in-out duration-200" to="/">One Column</Link></li>
        <li className="mx-2"><Link className="font-medium text-zinc-500 hover:text-zinc-700 transition-colors ease-in-out duration-200" to="/about">Full Width</Link></li>
        <li className="mx-2"><Link className="font-medium text-zinc-500 hover:text-zinc-700 transition-colors ease-in-out duration-200" to="/docs">Full Two Columns</Link></li>
      </ul>
    </div>
  </nav>
};

// Exports
// ========================================================
export default Nav;