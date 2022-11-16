import './App.css';
import Cover from "./components/Cover/Cover";
import About from './components/Cover/About';
import Logi from './components/Cover/Logi';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Cover />} />

        <Route path='About' element={<About />} />
        <Route path='Logi' element={<Logi />} />
      </Routes>
    </div >
  );
}

export default App;
