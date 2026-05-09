# Q1 — Student Management System API

A RESTful API built with Node.js, Express, and MongoDB (Mongoose) to manage university student records.

---

## 🗂 Folder Structure

```
Q1-StudentAPI/
├── models/
│   └── Student.js
├── controllers/
│   └── studentController.js
├── routes/
│   └── studentRoutes.js
├── .env
├── .gitignore
├── package.json
└── server.js
```

---

## ⚙️ Setup & Run

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment
Edit `.env`:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/studentDB
```

### 3. Start the server
```bash
# Development (auto-restart)
npm run dev

# Production
npm start
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/students` | Create a new student |
| GET | `/api/students` | Get all students (filter + pagination) |
| GET | `/api/students/search?name=Ali` | Search by name |
| GET | `/api/students/:id` | Get student by ID |
| PUT | `/api/students/:id` | Full update |
| PATCH | `/api/students/:id` | Partial update |
| PATCH | `/api/students/:id/deactivate` | Soft delete (set isActive=false) |
| DELETE | `/api/students/:id` | Hard delete |

### Query Parameters for GET /api/students
- `department=Computer Science` — filter by department
- `page=1` — page number (default: 1)
- `limit=10` — results per page (default: 10)

### Sample Request Body (POST)
```json
{
  "rollNumber": "21-CS-105",
  "name": "Ali Hassan",
  "email": "ali.hassan@university.edu",
  "department": "Computer Science",
  "cgpa": 3.78,
  "enrollmentYear": 2021
}
```
