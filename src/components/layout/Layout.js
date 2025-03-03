import Navbar from 'components/layout/Navbar';
import Footer from 'components/layout/Footer';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Navbar />
      <MainContent>
        {children}
      </MainContent>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout; 