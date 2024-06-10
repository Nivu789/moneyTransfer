import { Routes,Route } from "react-router-dom"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import SendMoney from "./pages/SendMoney"
function App() {

  return (
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/send-money" element={<SendMoney/>}/>
    </Routes>
  )
}

export default App
