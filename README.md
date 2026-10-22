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

## License

ISC
