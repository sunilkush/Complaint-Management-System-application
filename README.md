# Complaint Management System (Enterprise MERN)

## 1) Folder Structure

- `backend/` Express, MongoDB, Socket.IO APIs.
- `frontend/` React + Vite + Redux Toolkit + Ant Design client.

## 2) Setup

### Backend
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## 3) Backend Modules
- Auth with register/login/forgot/reset/refresh/profile
- RBAC middleware (`protect`, `authorize`)
- User CRUD with pagination/search/filtering
- Department CRUD
- Complaint CRUD + assign + status workflow + logs
- Security: helmet, cors, rate limit, bcrypt, JWT, centralized error handler

## 4) API Endpoints
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/forgot-password`
- `POST /api/auth/reset-password`
- `POST /api/auth/refresh-token`
- `GET /api/auth/profile`
- `GET|POST|PUT|DELETE /api/users`
- `GET|POST|PUT|DELETE /api/departments`
- `GET|POST|PUT|DELETE /api/complaints`
- `PATCH /api/complaints/status/:id`
- `PATCH /api/complaints/assign/:id`

## 5) Frontend Modules
- Auth layout, dashboard layout, protected routes
- Redux slices: auth, users, complaints, departments, dashboard, notifications
- Axios API instance with auth interceptor
- Dashboard + complaint list starter UIs (responsive Ant Design)

## 6) Deployment
- Frontend (Vercel): import `frontend`, set `VITE_API_URL`
- Backend (Render): web service from `backend`, set env vars from `.env.example`
- Database (MongoDB Atlas): set `MONGO_URI`

## 7) Production Best Practices
- Add Redis queue for async notifications/email.
- Add audit trail retention policies.
- Add OpenAPI docs + integration tests.
- Add CI/CD (lint, test, SAST, dependency scanning).
- Store files on S3-compatible storage instead of local disk.
