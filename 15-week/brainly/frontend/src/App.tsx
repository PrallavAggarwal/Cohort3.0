import Dashboard from "./pages/dashboard"
import { Sigin } from "./pages/signin"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Signup } from "./pages/signup"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Sigin />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
