
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Login from './components/Auth/Login'
import AdminDashboard from './components/dashBoard/AdminDashboard'
import EmployeeDashboard from './components/dashBoard/EmployeeDashboard'
import type { AppDispatch, RootState } from './store/store'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { loginSuccess } from './store/userSlice'
import { useEffect, useState } from 'react'


function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { role } = useSelector((state: RootState) => state.user);

  const [isAuthLoaded, setIsAuthLoaded] = useState(false);

  useEffect(() => {
    const savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
      try {
        const userData = JSON.parse(savedUserData);
        dispatch(loginSuccess(userData));
      } catch (error) {
        console.error('Failed to restore user data:', error);
        localStorage.removeItem('userData');
      }
    }
    setIsAuthLoaded(true);
  }, [dispatch]);

  if (!isAuthLoaded) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <span className="text-emerald-600 text-xl font-semibold">
          Loading...
        </span>
      </div>
    );
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/adminDashboard" element={role === "admin" ? <AdminDashboard /> : <Navigate to="/" />} />
        <Route path="/employeeDashboard" element={role === "employee" ? <EmployeeDashboard /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
