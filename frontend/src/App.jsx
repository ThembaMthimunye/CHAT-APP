
import Home from './pages/Home/Home'
import Login from './pages/login/login'
import SignUp from './pages/signup/SignUp'
import MessageContainer from "../src/Components/messages/MessageContainer"
import Nochat from './Components/Sidebar/Nochat'
function App() {


  return (
      <div className='p-4 h-screen flex  items-center justify-center gap-10'>
          {/* <Login/>
          <SignUp/> */}
           <Home/>
           <MessageContainer/>
           <Nochat/>
      </div>
  )
}

export default App
