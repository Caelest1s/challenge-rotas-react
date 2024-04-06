import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./routers/Home"
import Products from "./routers/Home/Products"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
