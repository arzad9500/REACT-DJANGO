import "./assets/css/app.css"
import { Header } from "./components/Header"
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { AuthProvider } from "./components/AuthProvider";


function App() {

  return (
    
    <> 
    {/* inside auth provider have we have context , now it will protected in all this children*/}
      <AuthProvider> 
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
      {/* <Header/> */}
      {/* <Main/> */}
      {/* <Footer/> */}
    </>
  );
}

export default App
