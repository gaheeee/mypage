import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 1.5rem;
`;

const Content = styled.div`
  color: #666;
  line-height: 1.6;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const SkillItem = styled.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
`;

const About = () => {
  const skills = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Node.js",
    "Git"
  ];

  return (
    <AboutContainer>
      <Section>
        <Title>About Me</Title>
        <Content>
          <p>
            안녕하세요! 웹 개발자가 되기 위해 열심히 공부하고 있습니다.
            사용자 경험을 중요시하며, 새로운 기술을 배우는 것을 좋아합니다.
          </p>
        </Content>
      </Section>

      <Section>
        <Title>Skills</Title>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillItem key={index}>{skill}</SkillItem>
          ))}
        </SkillsGrid>
      </Section>
    </AboutContainer>
  );
};

export default About; 