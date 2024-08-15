import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AdminLogin from './components/AdminLogin';
import EmployeeLogin from './components/EmployeeLogin';
import Navbar from './components/Navbar';
import AdminRegister from './components/AdminRegister';
import AdminProcess from './components/AdminProcess';
import OrganizationDetail from './components/OrganizationDetail';
import EmployeeDetail from './components/EmployeeDetail';
import ServerDetail from './components/ServerDetail';
import Notification from './components/Notification';
import EmployeeServerDetail from './components/EmployeeServerDetail';
import NavbarEmp from './components/NavbarEmp';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/EmployeeLogin" element={<EmployeeLogin />} />
        <Route path="/AdminRegister" element={<AdminRegister />} />
        <Route path="/AdminProcess" element={<AdminProcess />} />
        <Route path="/OrganizationDetail" element={<OrganizationDetail />} />
        <Route path="/EmployeeDetail" element={<EmployeeDetail />} />
        <Route path='/ServerDetail' element={<ServerDetail />} />
        <Route path='Notification' element={<Notification />} />
        <Route path='/EmployeeServerDetail' element={<EmployeeServerDetail />} />
        <Route path='/NavbarEmp' element={<NavbarEmp />} />
        <Route path="/Navbar" element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App;
