# ☕ Coffee Store Management

Coffee Store is a full-stack CRUD-based application that allows users to **manage a product inventory of various coffee items**. It includes a modern and clean UI for seamless interactions and a secure backend API using Express and MongoDB.

<!-- PROJECT BADGES -->
![React](https://img.shields.io/badge/React-18-blue)
![Express](https://img.shields.io/badge/Express.js-Backend-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 🔗 Live Links

| Service | Link |
|--------|------|
| Frontend | https://coffee-store-7wzvhf7tz-simplysamiuls-projects.vercel.app/ |
| Backend API | https://coffee-store-backend-seven-bay.vercel.app |

---

## 📌 Project Purpose

This system is designed to help small businesses or cafés maintain an inventory of coffee items digitally instead of using manual logs. It ensures:

- Faster management of product lists
- Centralized database system
- Easy update and delete options
- Efficient information flow between UI and backend

---

## ✨ Core Features

| Feature | Description |
|--------|-------------|
| Add Coffee | Create new product entries with details |
| View Coffee List | Fetch all coffee data and display dynamically |
| Update Coffee | Edit any existing item and store updates |
| Delete Coffee | Remove product from database permanently |
| Confirmation alerts | Safe UI interactions using SweetAlert |
| Fully responsive | Works on Desktop, Tablet, Mobile |

---

## 🖥️ Frontend Functionalities

- Single Page Application (SPA) using React Router
- Form validation for Coffee entry
- Real-time database updates using fetch
- Toast and modal interactions
- Reusable UI components

---

## 🧠 Backend Functionalities

- RESTful API with proper routing
- CRUD operations with MongoDB Atlas
- CORS enabled API
- JSON-based request handling
- Error handling and response standardization

---

## 🛠️ Tech Stack

### Frontend  
- React.js
- React Router DOM
- Tailwind CSS
- DaisyUI
- SweetAlert
- Fetch API / Axios (edit if required)

### Backend  
- Node.js
- Express.js
- MongoDB Atlas
- dotenv
- CORS middleware

### Deployment  
- Vercel (For both frontend and backend hosting)

---

## 🧩 System Architecture Diagram

```mermaid
flowchart LR
User[User / Client] -->|Requests| Frontend[React App]
Frontend -->|Fetch API| Backend[Express Server]
Backend -->|CRUD Ops| Database[(MongoDB Atlas)]
