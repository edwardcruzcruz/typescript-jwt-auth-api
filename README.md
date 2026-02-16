# 🔐 typescript Jwt Auth api

Production-ready REST API built with **Node.js**, **Express**, and **TypeScript**, featuring JWT authentication, layered architecture, and comprehensive testing (unit, integration, and E2E).

---

## 🚀 Features

- User registration and login with secure password hashing (bcrypt)
- JWT-based authentication and authorization
- Layered architecture for maintainability and scalability
- Unit, integration, and end-to-end testing with Jest and Supertest
- TypeScript strict typing for safer code
- Environment variable configuration with `.env`
- Clean folder structure following best practices

---

## 🛠 Tech Stack

- Node.js
- Express
- TypeScript
- JSON Web Tokens (JWT)
- bcrypt
- Jest (Unit testing)
- Supertest (Integration & E2E testing)

---

## 📁 Project Structure

src/
 ├── controllers/        # Handle HTTP requests and responses
 ├── services/           # Business logic (rules, validations, operations)
 ├── routes/             # Define API endpoints
 ├── middlewares/        # Middleware (authentication, error handling, validation)
 ├── models/             # Data models and types
 ├── data/               # Mock data or database connections
 ├── app.ts              # Express app initialization and middleware setup
 └── server.ts           # Entry point: server startup

test/
 ├── unit/               # Unit tests for services and utilities
 ├── integration/        # Integration tests for routes and controllers
 └── e2e/                # End-to-end tests simulating full flows

---

## 🔑 Authentication Endpoints

### 1. Register new user

`POST /auth/registe`

**Request body:**

```json
{
  "email": "user@example.com",
  "password": "yourPassword123"
}
```

**Response:**

```json
{
  "id": "uuid",
  "email": "user@example.com"
}
```

### 2. Login user

`POST /auth/login`

**Request body:**

```json
{
  "email": "user@example.com",
  "password": "yourPassword123"
}
```

**Response:**

```json
{
  "token": "jwt.token.here"
}
```

### 3. Get user by email (Protected route)

`GET /user/:email`

**Descripción:** Obtiene la información del usuario por email.

**Headers:**

Debe incluir el token JWT en Authorization.

```json
Authorization: Bearer <jwt_token>
```

**Response:**

```json
{
  "id": "uuid",
  "email": "user@example.com"
}
```

## ⚙️ Installation

### 1. Clone the repo:

```bash
git clone https://github.com/edwardcruzcruz/typescript-jwt-auth-api.git
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Create .env file with:

```bash
PORT=3000
JWT_SECRET=your_secret_key
```

### 4. Run the development server:

```bash
npm run dev
```

## 🧪 Running Tests

### Run all tests:

```bash
npm run test
```

## 🧠 Design Decisions

- ✅ TypeScript strict mode enabled  

- 🧱 Clean separation of concerns  

- 🔐 JWT-based stateless authentication  

- 🔑 Password hashing using bcrypt  

- 🌐 HTTP status codes properly implemented  

- 📦 CommonJS module system  

## 🔮 Future Improvements

- 🛑 Global error handling middleware  

- ✅ Input validation (Joi / Zod / express-validator)  

- 🗄️ Persistent database (PostgreSQL / MongoDB)  

- 🐳 Docker support  

- 📘 Swagger API documentation 

- 🚀 CI/CD pipeline (GitHub Actions) 

## 📌 Author

**Edward Cruz**  
Backend Developer | Node.js | TypeScript | REST APIs