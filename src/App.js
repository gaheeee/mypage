import './css/App.css';
import { useNavigate } from 'react-router-dom';

import Routing from './components/Routing';

function App() {
  useNavigate();

  return (
    <>
      <Routing />
    </>
  );
}

export default App;
