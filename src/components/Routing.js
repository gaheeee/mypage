import { Routes, Route } from "react-router-dom";
import Home from "components/pages/home/Main";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );

}