# CV Builder

Create professional resumes in minutes with our easy-to-use CV builder.

## Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Cloud Deployment](#cloud-deployment)
* [Local Development Setup](#local-development-setup)
* [Environment Variables](#environment-variables)
* [Usage](#usage)

## Introduction

The CV Builder is a web application that allows users to create and customize their resumes easily. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), this application provides an intuitive interface for users to input their personal information, work experience, skills, and more. The application generates a PDF version of the resume, which can be downloaded and shared.

## Features

* **User Authentication:** Secure login and registration system
* **CV Creation:** Step-by-step form to input personal and professional details
* **Template Selection:** Choose from multiple resume templates
* **PDF Generation:** Automatically generate a PDF version of the resume using Puppeteer
* **Data Storage:** Store user data and resumes in MongoDB Atlas
* **Cloud Deployment:** Deploy to Vercel and Render for free

## Technologies Used

* **Frontend:**
   * React.js
   * Vite
   * Tailwind CSS
   * Alpine.js
   * DaisyUI

* **Backend:**
   * Node.js
   * Express.js
   * MongoDB Atlas
   * Puppeteer (PDF generation)

* **Deployment:**
   * Vercel (Frontend)
   * Render (Backend)
   * MongoDB Atlas (Database)

---

## Cloud Deployment

Deploy your CV Builder to the cloud for **FREE** using Vercel + Render + MongoDB Atlas.

### 🚀 Quick Start (5 minutes)

**[→ Follow the Quick Start Guide](VERCEL_RENDER_QUICKSTART.md)**

### 📚 Detailed Guides

- **[Complete Deployment Guide](CLOUD_DEPLOYMENT.md)** - Step-by-step instructions with screenshots
- **[Technical Summary](CLOUD_DEPLOYMENT_SUMMARY.md)** - Architecture and technical details

### Deployment Stack

```
┌─────────────┐         ┌─────────────┐         ┌─────────────┐
│   Vercel    │ ◄─────► │   Render    │ ◄─────► │  MongoDB    │
│  (Frontend) │         │  (Backend)  │         │   Atlas     │
│   React     │         │   Node.js   │         │  (Database) │
└─────────────┘         └─────────────┘         └─────────────┘
      FREE                    FREE                     FREE
```

---

## Local Development Setup

### Prerequisites

* Node.js (v18 or higher) and npm installed
* Git installed

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env
   ```

4. Update `.env` with your backend URL:
   ```env
   VITE_API_URL=http://localhost:3000
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

   Frontend will run at: http://localhost:5173

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env
   ```

4. Update `.env` with your MongoDB Atlas connection string:
   ```env
   PORT=3000
   MONGO_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/cv_builder
   SECRET=your-jwt-secret-here
   FRONTEND_URL=http://localhost:5173
   NODE_ENV=development
   ```

5. Start the server:
   ```bash
   npm start
   ```

   For development with auto-reload:
   ```bash
   npm run dev
   ```

   Backend will run at: http://localhost:3000

---

## Environment Variables

### Backend (.env)

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# MongoDB Atlas Connection
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/cv_builder

# JWT Secret (generate with: openssl rand -base64 32)
SECRET=your-strong-random-secret

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
```

### Frontend (.env)

```env
# Backend API URL
VITE_API_URL=http://localhost:3000
```

### For Production (Render)

Add these additional variables in Render:

```env
PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium
```

---

## Usage

1. **Register/Login:** Create an account or log in to access the CV builder
2. **Create CV:** Follow the step-by-step form to input your details
3. **Select Template:** Choose a template for your resume
4. **Generate PDF:** Preview and download your resume as a PDF

---

## Project Structure

```
CV_Builder/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── context/         # React context
│   │   ├── hooks/           # Custom hooks
│   │   └── routes/          # Route definitions
│   ├── vercel.json          # Vercel configuration
│   └── package.json
│
├── backend/                  # Node.js backend
│   ├── controller/          # Route controllers
│   ├── middleware/          # Express middleware
│   ├── models/              # Mongoose models
│   ├── routes/              # API routes
│   ├── render.yaml          # Render configuration
│   ├── render-build.sh      # Render build script
│   └── package.json
│
└── Documentation/
    ├── VERCEL_RENDER_QUICKSTART.md
    ├── CLOUD_DEPLOYMENT.md
    └── CLOUD_DEPLOYMENT_SUMMARY.md
```

---

## API Endpoints

### User Routes
- `POST /api/user/register` - Register new user
- `POST /api/user/login` - User login

### Resume Routes
- `GET /api/resumes/list/:user_id` - Get all resumes for user
- `GET /api/resumes/:id` - Get specific resume
- `POST /api/resumes/create` - Create new resume
- `PUT /api/resumes/edit/:id` - Update resume
- `DELETE /api/resumes/delete/:id` - Delete resume
- `GET /api/resumes/download/template1/:id` - Download resume as PDF (Template 1)
- `GET /api/resumes/download/template2/:id` - Download resume as PDF (Template 2)
- `GET /api/resumes/download/template3/:id` - Download resume as PDF (Template 3)

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the ISC License.

---

## Support

For deployment help:
- See [VERCEL_RENDER_QUICKSTART.md](VERCEL_RENDER_QUICKSTART.md)
- See [CLOUD_DEPLOYMENT.md](CLOUD_DEPLOYMENT.md)

For technical issues:
- Check the troubleshooting section in the deployment guides
- Review backend logs on Render
- Review frontend logs on Vercel

---

## Acknowledgments

- Built with MERN stack
- PDF generation powered by Puppeteer
- Deployed on Vercel, Render, and MongoDB Atlas

---

**Ready to deploy?** 🚀 [Start with the Quick Start Guide →](VERCEL_RENDER_QUICKSTART.md)
