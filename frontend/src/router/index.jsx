import { Navigate, Route, Routes } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import LoginPage from '../pages/auth/LoginPage';
import DashboardPage from '../pages/dashboard/DashboardPage';
import ComplaintListPage from '../pages/complaints/ComplaintListPage';

const Protected = ({ children }) => (localStorage.getItem('accessToken') ? children : <Navigate to='/login' />);
export function AppRouter(){return <Routes><Route path='/login' element={<AuthLayout><LoginPage/></AuthLayout>} /><Route path='/' element={<Protected><DashboardLayout/></Protected>}><Route index element={<DashboardPage/>}/><Route path='complaints' element={<ComplaintListPage/>}/></Route></Routes>;}
