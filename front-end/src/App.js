import './App.css';
import HomePage from './routes/homePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from './routes/registerPage';
import SigninPage from './routes/signinPage';
import CreateResumePage from './routes/createResumePage';
import OptionPage from './routes/optionPage';
import WithoutAuthOnly from './hooks/withoutAuthOnly';
import { ToastContainer } from 'react-toastify';
import AdminLogin from './routes/AdminLogin';
import AdminDashboard from './routes/AdminDashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/sign-in" element={
            <WithoutAuthOnly>
              <SigninPage />
            </WithoutAuthOnly>
          } />
          <Route path="/register" element={
            <WithoutAuthOnly>
              <RegisterPage />
            </WithoutAuthOnly>
          } />
          <Route path="/createResume/:slugPara" element={<CreateResumePage />} />
          <Route path="/optionFor" element={<OptionPage />} />
          <Route path="adminLogin" element={<AdminLogin />} />
          <Route path="dashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
