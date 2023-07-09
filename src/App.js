
import './App.css';
import {
  BrowserRouter,
  Routes,Route
} from "react-router-dom";
import Home from './components/Home';
import Not_Found from './components/Not_Found';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='*' element={<Not_Found />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
