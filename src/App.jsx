import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Green from "./Pages/Green";
import Grey from "./Pages/Grey";
import Brown from "./Pages/Brown";
import Pink from "./Pages/Pink";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}/>
      <Route path='green' element={<Green/>}/>
      <Route path='pink' element={<Pink/>}/>
      <Route path='grey' element={<Grey/>}/>
      <Route path='brown' element={<Brown/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
