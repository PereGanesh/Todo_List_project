# 🌐 Full-Stack Web Development Internship Project

## 📌 Project Overview

This project is a **Full-Stack Web Application** developed as part of an internship assignment.
It includes:

* ✅ Task 1: CRUD Web Application
* ✅ Task 2: Third-Party API Integration (Weather App)
* ✅ Task 3: Deployment Pipeline (Docker + CI/CD)

---

# 🛠️ Technologies Used

## 🔹 Frontend

* React.js
* Axios
* HTML, CSS

## 🔹 Backend

* Node.js
* Express.js

## 🔹 Database

* MongoDB (Mongoose)

## 🔹 DevOps / Deployment

* Docker
* Docker Compose
* GitHub Actions

---

# ✅ Task 1: Full-Stack CRUD Application

## 📌 Description

Developed a web application that allows users to perform **Create, Read, Update, Delete (CRUD)** operations.

## 🎯 Features

* Add new records (Student/Todo)
* View all records
* Edit existing records
* Delete records

## ⚙️ Implementation

* REST API created using Express.js
* MongoDB used for data storage
* React frontend interacts with backend using Axios

---

# ✅ Task 2: Third-Party API Integration

## 📌 Description

Integrated **OpenWeatherMap API** to fetch real-time weather data.

## 🎯 Features

* Search weather by city
* Display:

  * City name
  * Temperature
  * Weather condition
  * Weather icon

## ⚙️ Implementation

* Backend endpoint calls external API
* Data is sent to frontend
* React displays weather dynamically

---

# ✅ Task 3: Deployment Pipeline

## 📌 Description

Implemented containerization and CI/CD pipeline using Docker and GitHub Actions.

## 🎯 Features

* Dockerized frontend and backend
* MongoDB container setup
* Single command to run entire application
* Automated build using GitHub Actions

---

# 📁 Project Structure

```
project-root/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── models/
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   └── Dockerfile
│
├── docker-compose.yml
└── .github/workflows/deploy.yml
```

---

# ⚙️ Setup & Installation

## 🔹 Prerequisites

Make sure you have installed:

* Node.js
* MongoDB (if running locally)
* Docker (for containerized setup)

---

## 🚀 Method 1: Run Without Docker

### 1. Clone the Repository

```bash
git clone <your-repo-link>
cd project-folder
```

### 2. Backend Setup

```bash
cd backend
npm install
npm start
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

### 4. Open in Browser

```
http://localhost:3000
```

---

## 🐳 Method 2: Run Using Docker (Recommended)

### 1. Run Command

```bash
docker-compose up --build
```

### 2. Access Application

* Frontend → http://localhost:3000
* Backend → http://localhost:5000

---

# 🔄 CI/CD Pipeline

* Triggered on push to main branch
* Steps:

  * Install dependencies
  * Build frontend
  * Build Docker images
  * Run containers

---

# 📸 Screenshots 

## 📝 Todo App
---<img width="1084" height="634" alt="Screenshot 2026-03-20 160747" src="https://github.com/user-attachments/assets/ab17870c-c0db-4a31-8efc-6211fccb414e" />

## 🌤️ Weather App

<img width="1288" height="703" alt="Screenshot 2026-03-20 130252" src="https://github.com/user-attachments/assets/4c9f0e7e-f8d1-4e41-bd4f-51a81a34cad1" />

## 🚀 Both

<img width="1208" height="792" alt="Screenshot 2026-03-20 132433" src="https://github.com/user-attachments/assets/e7d61171-ec87-40c3-803f-89e9a99e9662" />




# 📌 Key Highlights

* Full-stack development using MERN stack
* API integration with external services
* Docker-based deployment
* CI/CD automation

---

# 📎 Conclusion

This project demonstrates:

* End-to-end full-stack development
* API handling and integration
* Deployment and DevOps practices

---

# 👨‍💻 Author

**Pere Sri Venkata Siva Ganesh**

---
