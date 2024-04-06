import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./routers/Home"
import AboutUs from "./routers/Home/AboutUs"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
