import { Routes, Route } from 'react-router-dom';
import Layout from 'components/layout/Layout';
import Home from 'components/pages/Home';



const Routing = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Layout>
    );
};

export default Routing;