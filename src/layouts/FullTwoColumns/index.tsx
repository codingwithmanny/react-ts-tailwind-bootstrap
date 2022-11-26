// Imports
// ========================================================
import Nav from '../../components/Nav';

// Main Page
// ========================================================
const FullWidth: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return <div className="w-full mx-auto">
    <div className="w-full h-full mt-[73px]">
      <Nav className="fixed top-0 w-full bg-white bg-opacity-30 z-10" />
      {children}
    </div>
  </div>
};

// Exports
// ========================================================
export default FullWidth;