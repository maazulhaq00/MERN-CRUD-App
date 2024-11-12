import logo from './logo.svg';

import './App.css';
import StudentsPage from './pages/StudentsPage';
import CreateStudentPage from './pages/CreateStudentPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';

function App() {
  return (
    // <StudentsPage />
    // <CreateStudentPage />
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<StudentsPage />} />
        <Route path='/students' element={<StudentsPage />} />
        <Route path='/create' element={<CreateStudentPage />} />
        
        {/* Default Route */}
        <Route path='*' element={<NotFoundPage />} />
        
      </Routes>
    </Router>
  )
}

export default App;
