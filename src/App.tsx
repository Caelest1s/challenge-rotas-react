import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./routers/Home"
import AboutUs from "./routers/Home/AboutUs"
import NotFound from "./routers/NotFound"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<AboutUs />} />
            
          <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
