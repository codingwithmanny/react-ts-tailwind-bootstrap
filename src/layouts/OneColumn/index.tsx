// Imports
// ========================================================
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

// Main Page
// ========================================================
const OneColumn: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return <div className="max-w-7xl w-full mx-auto">
    <div className="px-4 w-full">
      <Nav />
      {children}
      <Footer />
    </div>
  </div>
};

// Exports
// ========================================================
export default OneColumn;