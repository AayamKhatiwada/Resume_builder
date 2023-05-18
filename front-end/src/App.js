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
import { setCurrentRecommendationResume } from './store/resume/resume-action';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Community from './routes/Community';
import RequireAdminAuth from './hooks/RequireAdminAuth';
import AdminSideBar from './components/Admin/AdminSideBar/adminSidebar';
import AdminTemplateComponent from './components/Admin/AdminTemplate/adminTemplateComponent';
import AdminTemplateRegisterComponent from './components/Admin/AdminTemplateRegisterComponent/adminTemplateRegisterComponent';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/getRecommendationResume')
      .then(res => res.json())
      .then(
        (result) => {
          dispatch(setCurrentRecommendationResume(result));
        },
        (error) => {
          console.log(error)
        }
      )
  }, [])

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
          <Route path="/admin/*" element={
            <>
              <AdminSideBar />
              <RequireAdminAuth>
                <Routes>
                  <Route index element={<AdminDashboard />} />
                  <Route path="/templates" element={<AdminTemplateComponent />} />
                  <Route path="/templates/:id" element={<AdminTemplateRegisterComponent />} />
                  {/* <Route path="/party" element={<AdminParty />} />
                  <Route path="/party/:id" element={<AdminPartyRegister />} />
                  <Route path="/voters/:id" element={<AdminUserView />} />
                  <Route path="/candidate" element={<AdminCandidate />} />
                  <Route path="/candidate/:id" element={<AdminCandidateRegister />} />
                  <Route path="/election" element={<AdminElection />} />
                  <Route path="/election/:id" element={<AdminElectionRegister />} /> */}
                </Routes>
              </RequireAdminAuth>
            </>
          } />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="community" element={<Community />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
