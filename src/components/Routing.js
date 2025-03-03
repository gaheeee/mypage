import { Routes, Route } from 'react-router-dom';
import Layout from 'components/layout/Layout';
import Home from 'components/pages/Home';
import Projects from 'components/pages/Projects';
import About from 'components/pages/About';


const Routing = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Layout>
    );
};

export default Routing;