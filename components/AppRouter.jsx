import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './pages/Home';
import About from './pages/About';


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;