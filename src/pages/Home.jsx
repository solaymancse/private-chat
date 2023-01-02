import '../style.scss';
import { Route, Routes } from 'react-router-dom'
import { Chat } from '../components/Chat'
import { Sidebar } from '../components/Sidebar'
import { Login } from './Login'
import { Register } from './Register'

export const Home = () => {
  return (
  <div className="home">
    <div className="container">
      <Sidebar/>
      <Chat/>
    </div>
  </div>
    // <Routes>
    //     <Route path='/login' element={<Login/>}/>
    //     <Route index path='/' element={<Register/>}/>
    
    // </Routes>
  )
}
