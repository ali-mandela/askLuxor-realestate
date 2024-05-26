import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AgentsPage from './pages/AgentsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import PropertyPage from './pages/PropertyPage';
import HomePage from './pages/HomePage';
import 'react-multi-carousel/lib/styles.css';
import FooterSection from './sections/FooterSection';

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/agents" element={<AgentsPage/>} />
                <Route path="/property" element={<PropertyPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <FooterSection/>
        </>
    );
}

export default App;
