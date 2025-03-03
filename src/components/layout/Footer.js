import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #f8f9fa;
  padding: 2rem 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  color: #666;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContent>
                <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            </FooterContent>
        </FooterWrapper>
    );
};

export default Footer; 