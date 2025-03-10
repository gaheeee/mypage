import 'styles/App.scss';
import 'styles/AboutMe.scss';
import 'styles/Projects.scss';
import 'styles/Skills.scss';
import { useNavigate } from 'react-router-dom';

import Routing from 'components/Routing';

function App() {
  useNavigate();

  return (
    <>
      <Routing />
    </>
  );
}

export default App;
