import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./routers/Home"
import AboutUs from "./routers/Home/AboutUs"
import Products from "./routers/Home/Products"
import Book from "./routers/Home/Products/Book"
import Computer from "./routers/Home/Products/Computer"
import Eletronic from "./routers/Home/Products/Eletronic"
import Welcome from "./routers/Home/Welcome"
import NotFound from "./routers/NotFound"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<Navigate to="/initial" />} />
            <Route path="initial" element={<Welcome />} />

            <Route path="products" element={<Products />} >
              <Route index element={<Navigate to="computers" />} />
              <Route path="computers" element={<Computer />} />
              <Route path="eletronics" element={<Eletronic />} />
              <Route path="books" element={<Book />} />
            </Route>
            <Route path="about-us" element={<AboutUs />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
