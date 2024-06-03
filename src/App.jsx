import './App.css';
import AgentsPage from './pages/AgentsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import PropertyPage from './pages/PropertyPage';
import HomePage from './pages/HomePage';
import 'react-multi-carousel/lib/styles.css';
import LoginPage from './agent/auth/LoginPage';
import RegisterPage from './agent/auth/RegisterPage'; 
import PostProperty from './agent/pages/PostProperty';
import MyProerties from './agent/pages/MyProerties';
import AgentLayout from './components/AgentLayout';
import MainLayout from './components/MainLayout';
import { Route, Routes } from 'react-router-dom';
import ProfilePage from './pages/agent/ProfilePage'; 
import AdminDashBoard from './pages/Admin/AdminDashBoard';
import Axios from "axios";
import SingleProperty from './agent/pages/SingleProperty';

Axios.defaults.baseURL = 'http://localhost:8080/api/'

function App() {

    return (
        <> 
      <Routes> 
        {/* Main Layout Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          
          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/property" element={<PropertyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        {/* Agent Layout Routes */}
        <Route path="/agent" element={<AgentLayout />}>
        <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="post-a-property" element={<PostProperty />} />
          <Route path="property/:id" element={<SingleProperty />} />
          <Route path="my-properties" element={<MyProerties />} />
          <Route path="dashboard" element={<LoginPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="admin/dashboard" element={<AdminDashBoard />} />
        </Route>
      </Routes>
        </>
    );
}

export default App;
