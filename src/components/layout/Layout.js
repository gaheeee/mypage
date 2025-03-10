import Navbar from 'components/layout/Navbar';
import Footer from 'components/layout/Footer';


const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Navbar />
      <div className="main-content">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout; 