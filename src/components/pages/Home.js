import styled from 'styled-components';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 0;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <Title>안녕하세요, 웹 개발자입니다</Title>
        <Subtitle>
          창의적인 문제 해결과 사용자 중심의 웹 개발을 추구합니다
        </Subtitle>
      </HeroSection>
    </HomeContainer>
  );
};

export default Home; 