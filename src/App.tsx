import { Routes,Route } from 'react-router-dom';
import { Countries } from './pages/Countries';
import './App.css'

function App() {

  return (
    <main>
        <Routes>
          <Route path='/' element={<Countries/>} />
        </Routes>
    </main>
  )
}

export default App
