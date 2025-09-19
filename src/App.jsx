import { Routes,Route } from 'react-router-dom'
import './App.css'
import Homepage from './components/Homepage'
import Edits from './components/Edits';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/edits" element={<Edits />}></Route>
      </Routes>
    </>
  )
}

export default App
