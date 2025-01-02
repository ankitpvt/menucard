import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuCard from './MenuCard';
import HomePage from './HomePage';
import JiduCard from './components/jidu';
import VishalCard from './components/vishal';
import YashCard from './components/yash';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/menucard" element={<MenuCard/>} />
                <Route path="/jidu" element={<JiduCard/>} />
                <Route path="/vishal" element={<VishalCard/>} />
                <Route path="/yashmali" element={<YashCard/>} />

               
            </Routes>
        </Router>
    );
}

export default App;
