
# CV Builder

Create professional resumes in minutes with our easy-to-use CV builder.

## Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Setup Instructions](#setup-instructions)
* [Usage](#usage)

## Introduction

The CV Builder is a web application that allows users to create and customize their resumes easily. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), this application provides an intuitive interface for users to input their personal information, work experience, skills, and more. The application generates a PDF version of the resume, which can be downloaded and shared.

## Features

* **User Authentication:** Secure login and registration system
* **CV Creation:** Step-by-step form to input personal and professional details
* **Template Selection:** Choose from multiple resume templates
* **PDF Generation:** Automatically generate a PDF version of the resume using Puppeteer
* **Data Storage:** Store user data and resumes in MongoDB

## Technologies Used

* **Frontend:**
   * React.js
   * Tailwind CSS
   * Alpine.js
   * DaisyUI
* **Backend:**
   * Node.js
   * Express.js
   * MongoDB
* **Tools:**
   * Puppeteer for PDF generation
   * Insomnia for API testing
   * Git and GitHub for version control
   * Visual Studio Code as IDE

## Setup Instructions

### Prerequisites
* Node.js and npm installed on your machine
* MongoDB installed and running

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables by creating a `.env` file in the `backend` directory:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```bash
   npm start
   ```

## Usage

1. **Register/Login:** Create an account or log in to access the CV builder
2. **Create CV:** Follow the step-by-step form to input your details
3. **Select Template:** Choose a template for your resume
4. **Generate PDF:** Preview and download your resume as a PDF
