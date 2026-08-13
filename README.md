# 💧 Hydration Tracker - Frontend

![React](https://img.shields.io/badge/React-19-61DAFB)
![Vite](https://img.shields.io/badge/Vite-Frontend-646CFF)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC)
![Axios](https://img.shields.io/badge/Axios-HTTP-orange)
![Recharts](https://img.shields.io/badge/Recharts-Data%20Visualization-8884D8)
![License](https://img.shields.io/badge/License-MIT-green)

A modern React application for the **Hydration Tracker** project. It provides an intuitive interface for tracking daily water intake, monitoring hydration progress, viewing statistics, managing user profiles, and receiving hydration notifications.

The frontend communicates with a **Spring Boot REST API** using JWT-based authentication and is deployed on **Vercel**.

---

# 🚀 Live Application

**[Hydration Tracker](https://hydrationer.vercel.app/)**

---

# ✨ Features

## 🔐 Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Automatic JWT Handling
* Logout Functionality
* Secure API communication

---

## 🏠 Dashboard

Displays:

* Daily Water Goal
* Water Consumed Today
* Remaining Water
* Daily Progress
* Current Streak
* Longest Streak
* Today's Entry Count

---

## 💧 Water Management

* Add Water Intake
* Custom Water Amounts
* Edit Water Intake
* Delete Water Intake
* Today's Water Entries
* Water History
* Daily Progress Tracking

---

## 📊 Statistics

Interactive charts showing:

* Overall Statistics
* Weekly Water Intake
* Monthly Water Intake
* Goal Achievement Trends

Powered by **Recharts**.

---

## 👤 Profile

* View Profile
* Update Email
* Update Daily Goal
* Update Timezone
* Enable/Disable Email Notifications
* Enable/Disable Telegram Notifications
* Change Password
* Test Email Notifications
* Test Telegram Notifications

---

## 🔔 Notifications

The frontend provides controls for:

* Email notification preferences
* Telegram notification preferences
* Test email notifications
* Test Telegram notifications

The actual notification processing is handled by the Spring Boot backend.

---

# 🎨 User Interface

* Responsive Design
* Dashboard Layout
* Sidebar Navigation
* Navbar
* Mobile Friendly
* Clean Interface
* Tailwind CSS Styling
* Loading States
* Toast Notifications
* Form Validation

---

# 🛠 Tech Stack

| Technology        | Purpose              |
| ----------------- | -------------------- |
| React 19          | UI Library           |
| Vite              | Build Tool           |
| React Router DOM  | Client-side Routing  |
| Axios             | API Communication    |
| Tailwind CSS      | Styling              |
| Recharts          | Data Visualization   |
| React Hook Form   | Form Handling        |
| React Hot Toast   | Notifications        |
| JavaScript (ES6+) | Programming Language |

---

# 🏗 Application Architecture

```text
App
│
├── Authentication
│   ├── Login
│   └── Register
│
├── Protected Routes
│   ├── Dashboard
│   ├── Water
│   ├── Statistics
│   └── Profile
│
└── Shared Layout
    ├── Navbar
    └── Sidebar
```

---

# 📂 Folder Structure

```text
src
│
├── api
├── assets
├── components
├── context
├── layouts
├── pages
│   ├── auth
│   ├── dashboard
│   ├── profile
│   ├── statistics
│   └── water
├── routes
├── App.jsx
└── main.jsx
```

---

# 🔐 Authentication Flow

```text
Login
   │
   ▼
Receive JWT Token
   │
   ▼
Store Token
   │
   ▼
Axios Interceptor
   │
   ▼
Authorization Header
   │
   ▼
Spring Boot Security
   │
   ▼
Access Protected APIs
```

---

# 🔗 Backend Integration

The frontend communicates with the Spring Boot backend through REST APIs.

### Production

```text
Vercel Frontend
      │
      ▼
Spring Boot REST API
      │
      ▼
Render
```

The frontend uses an environment variable for the backend URL rather than hardcoding the production API address.

API modules include:

* Authentication
* Dashboard
* Water
* Statistics
* Profile
* Notifications

---

# ⚙️ Installation

## Prerequisites

* Node.js
* npm

---

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/hydration-tracker-frontend.git
```

---

## Navigate

```bash
cd hydration-tracker-frontend
```

---

## Install Dependencies

```bash
npm install
```

---

## Configure Environment Variables

Create a local `.env` file:

```env
VITE_API_URL=http://localhost:8080
```

The production `VITE_API_URL` is configured through the Vercel environment variables.

> Do not commit `.env` files containing environment-specific configuration or secrets.

---

## Run Development Server

```bash
npm run dev
```

Application runs at:

```text
http://localhost:5173
```

---

# 📦 Production Build

Build the application:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The production build is generated in:

```text
dist/
```

---

# 🌐 Deployment

The frontend is deployed using **Vercel**.

### Live Application

**https://hydrationer.vercel.app/**

The production frontend communicates with the deployed Spring Boot backend hosted on **Render**.

---

# 📱 Pages

* Login
* Register
* Dashboard
* Water Tracking
* Statistics
* Profile

---

# 📊 Charts

The application uses **Recharts** to visualize:

* Weekly Water Intake
* Monthly Water Intake
* Goal Achievement Statistics
* Hydration Progress

---

# 🔒 Security

The frontend implements:

* JWT-based authentication
* Protected routes
* Authorization headers
* Environment-based API configuration
* Logout/token cleanup
* Backend-controlled authorization

Sensitive backend credentials are not stored in the frontend.

---

# 📸 Screenshots

Recommended screenshots for the repository:

```text
screenshots/
├── login.png
├── register.png
├── dashboard.png
├── water.png
├── statistics.png
└── profile.png
```

---

# 🔮 Future Improvements

Potential future improvements include:

* Dark Mode
* PWA Support
* Push Notifications
* Custom Reminder Settings
* Multi-language Support
* Offline Support
* Export Reports
* Improved Accessibility
* Automated Frontend Testing

---

# 👨‍💻 Backend Repository

This frontend works with the Spring Boot backend:

```text
https://github.com/YOUR_USERNAME/hydration-tracker-backend
```

Replace `YOUR_USERNAME` with the GitHub account containing the backend repository.

---

# 👨‍💻 Author

Developed as a full-stack portfolio project demonstrating modern frontend development using:

* React
* Vite
* Tailwind CSS
* Axios
* React Router
* Recharts
* React Hook Form
* JWT Authentication
* REST API Integration

---

# ⭐ License

This project is licensed under the MIT License.
