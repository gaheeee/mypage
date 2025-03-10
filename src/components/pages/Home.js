import AboutMe from 'components/pages/AboutMe';
import Projects from 'components/pages/Projects';
import Skills from 'components/pages/Skills';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="hero-section">
          <h1 className="title">안녕하세요, 웹 개발자입니다</h1>
          <p className="subtitle">
            창의적인 문제 해결과 사용자 중심의 웹 개발을 추구합니다
          </p>
        </div>
      </div>
      <AboutMe />
      <Skills />
      <Projects />
    </>
  );
};

export default Home; 