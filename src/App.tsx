import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./routers/Home"
import Welcome from "./routers/Home/Welcome"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<Welcome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
