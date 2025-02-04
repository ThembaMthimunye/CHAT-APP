
import Home from './pages/Home/Home'
import Login from './pages/login/login'
import SignUp from './pages/signup/SignUp'
import { Route,Routes } from 'react-router-dom'
import Toaster from "react-hot-toast"
function App() {


  return (
      <div className='p-4 h-screen flex  items-center justify-center gap-10'>
           {/* <Login/>
          <SignUp/> 
            <Home/>
           <MessageContainer/>*}
            <Nochat/>
              {/* <MessageContainer/>   */}
        
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
           </Routes> 
           <Toaster/>
             
      </div>
  )
}

export default App
