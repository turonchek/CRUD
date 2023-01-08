import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AddUserPage } from './pages/AddUserPage';
import { EditUserPage } from './pages/EditUserPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/addUser' element={<AddUserPage/>} />
        <Route path='/editUser/:id' element={<EditUserPage/>} />
      </Routes>
    </div>
  );
}

export default App;
