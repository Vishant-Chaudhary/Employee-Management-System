 Employee Management System

A role-based task management dashboard built with React + TypeScript, Vite, Redux Toolkit, Redux-Saga, Axios, and TailwindCSS, featuring a REST API hosted on Render.  

Admins can create, assign, and track tasks, while Employees can view, accept, and complete assigned tasks.  
Authentication, authorization, and session persistence ensure a secure and seamless user experience.


Live Demo
Frontend (Vercel): [https://employee-management-system-one-taupe.vercel.app/](https://employee-management-system-one-taupe.vercel.app/)  
Backend (Render): [https://ems-json-server.onrender.com](https://ems-json-server.onrender.com)

---

Demo Login Credentials
Use the following demo accounts to explore the application:
Admin Account
- Email: `admin@example.com`  
- Password: `123`

Employee Accounts
- Email: `employee1@example.com`  
- Email: `employee2@example.com`  
- Email: `employee3@example.com`  
- Email: `employee4@example.com`  
- Email: `employee5@example.com`  
- Password (for all): `123`


---

Tech Stack

 Category                  Technology 
-----------               -------------
 Frontend                 React + TypeScript + Vite 
 State Management         Redux Toolkit 
 Middleware               Redux-Saga 
 Styling                  TailwindCSS 
 HTTP Client               Axios 
 Icons                     React Icons 
 Hosting                   Vercel (Frontend), Render (Backend) 


---

 Features

- Role-based authentication — Admins and Employees have distinct dashboards  
- Task lifecycle management — create, assign, accept, complete, and fail tasks  
- Protected routes — accessible based on role  
- Persistent sessions using localStorage  
- Asynchronous state management with Redux-Saga  
- Responsive UI built with TailwindCSS  
- REST API integration via Axios  

---

 Setup & Installation

 1. Clone the Repository
    git clone https://github.com/Vishant-Chaudhary/Employee-Management-System.git
    cd employee-management-system

2. Install Dependencies
Install all required packages:
  npm install
  npm install react react-dom
  npm install react-router-dom
  npm install typescript vite
  npm install uuid
  npm install @reduxjs/toolkit react-redux redux-saga
  npm install axios
  npm install tailwindcss
  npm install react-icons

3. Run the Development Server
npm run dev

 API Configuration
The app communicates with a REST API hosted on Render:
https://ems-json-server.onrender.com
If needed, update your API base URL inside:
src/api/axiosClient.ts
