
import { useSelector } from 'react-redux'
import './App.css'
import Login from './components/Auth/Login'
import AdminDashboard from './components/dashBoard/AdminDashboard'
import EmployeeDashboard from './components/dashBoard/EmployeeDashboard'
import type { RootState } from './store/store'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'


function App() {
  const { role } = useSelector((state: RootState) => state.user);
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
