import { Routes,Route } from 'react-router-dom';
import { Countries } from './pages/Countries';
import { CountriesDetail } from './pages/CountriesDetail';
import './App.css'

function App() {

  return (
    <main>
        <Routes>
          <Route path='/' element={<Countries/>} />
          <Route path='/countries/detail/:nane' element={<CountriesDetail/>} />
        </Routes>
    </main>
  )
}

export default App
