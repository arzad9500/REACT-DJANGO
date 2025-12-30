import "./assets/css/app.css"
import { Header } from "./components/Header"
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { BrowserRouter , Routes , Route } from "react-router-dom";  // 
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { AuthProvider } from "./components/AuthProvider"; // login status
import { Dashboard } from "./components/dashboard/Dashboard";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


function App() {

  return (
    
    <> 
    {/* inside auth provider have we have context , now it will protected in all this children*/}
      <AuthProvider> 
        <BrowserRouter>
          <Header />  {/* here is header component next down components*/}
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/register" element={<PublicRoute> <Register /> </PublicRoute>} />
              <Route path="/login" element={<PublicRoute> <Login /> </PublicRoute>} />
              <Route path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
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
