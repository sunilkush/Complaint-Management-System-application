import { configureStore } from '@reduxjs/toolkit';
import auth from '../features/auth/authSlice';
import users from '../features/users/userSlice';
import complaints from '../features/complaints/complaintSlice';
import departments from '../features/departments/departmentSlice';
import dashboard from '../features/dashboard/dashboardSlice';
import notifications from '../features/notifications/notificationSlice';
export const store = configureStore({ reducer: { auth, users, complaints, departments, dashboard, notifications } });
