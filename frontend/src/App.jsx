import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Dashboard from "./Pages/Dashboard"
import SendMoney from "./Pages/SendMoney"
import Signin from "./Pages/Signin"
import Signup from "./Pages/Signup"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
