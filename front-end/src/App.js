import './App.css';
import HomePage from './routes/homePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from './routes/registerPage';
import SigninPage from './routes/signinPage';
import CreateResumePage from './routes/createResumePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/sign-in" element={<SigninPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/createResume" element={<CreateResumePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
