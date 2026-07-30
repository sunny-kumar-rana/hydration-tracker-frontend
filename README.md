# 💧 Hydration Tracker - Frontend

![React](https://img.shields.io/badge/React-19-61DAFB)
![Vite](https://img.shields.io/badge/Vite-Frontend-646CFF)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC)
![Axios](https://img.shields.io/badge/Axios-HTTP-orange)
![License](https://img.shields.io/badge/License-MIT-green)

A modern React application for the **Hydration Tracker** project. It provides an intuitive dashboard for tracking daily water intake, monitoring hydration progress, viewing statistics, managing user profiles, and interacting securely with the Spring Boot backend using JWT authentication.

---

# ✨ Features

## 🔐 Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Automatic Token Handling
- Logout Functionality

---

## 🏠 Dashboard

Displays:

- Daily Water Goal
- Water Consumed Today
- Remaining Water
- Daily Progress
- Current Streak
- Longest Streak
- Today's Entries

---

## 💧 Water Management

- Add Water Intake
- Edit Water Intake
- Delete Water Intake
- Today's Water Entries
- Water History

---

## 📊 Statistics

Interactive charts showing:

- Overall Statistics
- Weekly Water Intake
- Monthly Water Intake
- Goal Achievement Trends

Powered by **Recharts**.

---

## 👤 Profile

- Update Email
- Update Daily Goal
- Update Timezone
- Enable/Disable Email Notifications
- Change Password

---

## 🎨 User Interface

- Responsive Design
- Dashboard Layout
- Sidebar Navigation
- Navbar
- Mobile Friendly
- Clean UI
- Tailwind CSS Styling

---

# 🛠 Tech Stack

| Technology        | Purpose              |
| ----------------- | -------------------- |
| React 19          | UI Library           |
| Vite              | Build Tool           |
| React Router DOM  | Routing              |
| Axios             | API Communication    |
| Tailwind CSS      | Styling              |
| Recharts          | Data Visualization   |
| JavaScript (ES6+) | Programming Language |

---

# 🏗 Application Architecture

```
App
│
├── Authentication
│
├── Dashboard
│
├── Water
│
├── Statistics
│
├── Profile
│
└── Shared Layout
```

---

# 📂 Folder Structure

```
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

```
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
Access Protected APIs
```

---

# 🔗 Backend Integration

The frontend communicates with the Spring Boot backend through REST APIs.

Example Base URL:

```
http://localhost:8080/api
```

API modules include:

- Authentication
- Dashboard
- Water
- Statistics
- Profile

---

# ⚙ Installation

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

## Run Development Server

```bash
npm run dev
```

Application runs at

```
http://localhost:5173
```

---

# 📦 Production Build

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

# 🌐 Environment Variables

Create a `.env` file.

```env
VITE_API_BASE_URL=http://localhost:8080/api
```

---

# 📱 Pages

- Login
- Register
- Dashboard
- Water Tracking
- Statistics
- Profile

---

# 📊 Charts

The application uses **Recharts** to visualize:

- Weekly Water Intake
- Monthly Water Intake
- Goal Achievement Statistics

---

# 📸 Screenshots

After deployment, add screenshots such as:

```
screenshots/

├── login.png
├── register.png
├── dashboard.png
├── water.png
├── statistics.png
└── profile.png
```

---

# 🚀 Future Improvements

- Dark Mode
- PWA Support
- Push Notifications
- Telegram Notifications
- Custom Reminder Settings
- Multi-language Support
- Offline Support
- Export Reports
- Docker Deployment

---

# 👨‍💻 Backend Repository

This frontend works with the Spring Boot backend available here:

```
https://github.com/YOUR_USERNAME/hydration-tracker-backend
```

---

# 👨‍💻 Author

Developed as a portfolio project demonstrating modern frontend development using:

- React
- Vite
- Tailwind CSS
- Axios
- React Router
- Recharts
- JWT Authentication

---

# ⭐ If you found this project useful, consider giving it a star.
