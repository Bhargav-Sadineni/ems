# Employee Management System (EMS)

A modern full-stack Employee Management System built with React, Node.js, Express, and MongoDB.

## Features

- **Employee Management**: Manage employee records, roles, profiles, and attendance.
- **Role-Based Authentication**: Secure authentication using JSON Web Tokens (JWT) and Bcrypt.
- **Workflow & Background Tasks**: Integrated event-driven background processing with Inngest.
- **Email Notifications**: Automated email notifications using Nodemailer.
- **Modern UI**: Clean and responsive user interface built with React 19, Tailwind CSS v4, Lucide Icons, and React Hot Toast.

## Tech Stack

### Frontend (`client/`)
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **HTTP Client**: Axios

### Backend (`server/`)
- **Runtime**: Node.js + Express
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT & Bcrypt
- **Background Jobs**: Inngest
- **Mailing**: Nodemailer
- **File Handling**: Multer

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB instance (local or MongoDB Atlas)

### Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Bhargav-Sadineni/ems.git
   cd ems
   ```

2. **Server Setup**:
   ```bash
   cd server
   npm install
   cp .env.example .env
   # Update your environment variables in .env
   npm run server
   ```

3. **Client Setup**:
   ```bash
   cd ../client
   npm install
   cp .env.example .env
   # Update your environment variables in .env
   npm run dev
   ```

## Environment Variables

### Server (`server/.env`)
See `server/.env.example` for details:
- `PORT` - Port number (default: 4000)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT signing
- `ADMIN_EMAIL` - Default admin email
- `INNGEST_EVENT_KEY` & `INNGEST_SIGNING_KEY` - Inngest credentials
- `SMTP_USER` & `SMTP_PASS` - Email SMTP credentials

### Client (`client/.env`)
See `client/.env.example` for details:
- `VITE_BASE_URL` - Backend API base URL (e.g. `http://localhost:4000`)

## Deployment to Vercel

Since this is a full-stack project with `client/` and `server/`, deploy them as **two separate projects** in Vercel:

### 1. Deploy the Backend (`server`)
1. Go to [vercel.com/new](https://vercel.com/new) and import your repository (`Bhargav-Sadineni/ems`).
2. Under **Root Directory**, click **Edit** and select **`server`**.
3. Under **Framework Preset**, leave as **Other**.
4. In **Environment Variables**, add the variables from `server/.env`:
   - `MONGODB_URI` = your MongoDB Atlas connection string *(Ensure MongoDB Atlas allows access from `0.0.0.0/0`)*
   - `JWT_SECRET` = your secret key
   - `ADMIN_EMAIL` = admin email
   - `INNGEST_EVENT_KEY` = your inngest event key
   - `INNGEST_SIGNING_KEY` = your inngest signing key
   - `SMTP_USER` = your SMTP username
   - `SMTP_PASS` = your SMTP password
   - `SENDER_EMAIL` = your sender email
5. Click **Deploy**. Note the deployed backend URL (e.g., `https://ems-server-xxx.vercel.app`).

### 2. Deploy the Frontend (`client`)
1. Go to [vercel.com/new](https://vercel.com/new) and import the same repository (`Bhargav-Sadineni/ems`).
2. Under **Root Directory**, click **Edit** and select **`client`**.
3. Under **Framework Preset**, it will auto-detect **Vite**.
4. In **Environment Variables**, add:
   - `VITE_BASE_URL` = your deployed backend URL from step 1 (e.g., `https://ems-server-xxx.vercel.app`)
5. Click **Deploy**.

## License

ISC
