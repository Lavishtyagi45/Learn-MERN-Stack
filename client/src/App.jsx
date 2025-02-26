import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Error from "./pages/PageNotFound";

function App(){
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="/about" element={<About/>} />
      <Route  path="/contact" element={<Contact/>} />
      <Route  path="/services" element={<Services/>} />
      <Route  path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="*" element={<Error/>}/> 
    </Routes>
    </BrowserRouter>
  )

}
export default App;