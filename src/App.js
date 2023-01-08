import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AddUserPage } from './pages/AddUserPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/addUser' element={<AddUserPage/>} />
      </Routes>
    </div>
  );
}

export default App;
