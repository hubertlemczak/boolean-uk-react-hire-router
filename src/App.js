import { Route, Routes } from 'react-router';
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';
import './styles.css';

export default function App() {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/view/:id" element={<PersonProfile />} />
        <Route path="/edit/:id" element={<PersonProfile />} />
      </Routes>
    </Container>
  );
}
