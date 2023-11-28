import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import CountDown from './Components/CountDown'
import StartPage from './Components/StartPage'
import Categories from './Components/Categories'
import Einstein from './Components/Einstein'

function App() {

  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartPage />}></Route>
        <Route path='/categories' element={<Categories />}></Route>
        <Route path='/categories/einstein' element={<Einstein />}></Route>
      </Routes>
    </BrowserRouter>

   </div>
  )
}

export default App
