# NestJS Lab Projects

This repository contains multiple backend applications built with the [NestJS](https://nestjs.com/) framework as part of the Advanced Web Technology coursework. The repository is organized into several independent APIs, each demonstrating different backend concepts and NestJS features.

## 📂 Projects Overview

### 1. Course Management API (`course-management-api`)
A RESTful API for managing courses, instructors, and class schedules.
- **Key Features:** CRUD operations for courses, file uploads handling (e.g., syllabuses or course materials) using `multer`.
- **Tech Stack:** NestJS, TypeScript, class-validator.

### 2. Product Inventory API (`product-inventory-api`)
An inventory management system to handle product cataloging, searching, and sorting.
- **Key Features:** Product creation with robust validation, sorting by date, searching, payload validation, and database integration.
- **Tech Stack:** NestJS, TypeORM, PostgreSQL, class-validator.

### 3. University System API (`university-system-api`)
A university administration system that demonstrates complex module interdependencies.
- **Key Features:** Multi-module architecture comprising `Course`, `Enrollment`, and `Notification` modules. Effectively demonstrates resolving circular module dependencies (e.g., using `forwardRef`).
- **Tech Stack:** NestJS, TypeScript.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [NestJS CLI](https://docs.nestjs.com/cli/overview) (`npm i -g @nestjs/cli`)
- [PostgreSQL](https://www.postgresql.org/) (Specifically required for the `product-inventory-api`)

### Installation
Each project is a standalone NestJS application. To run them, navigate to the desired project directory and install the dependencies:

```bash
cd <project-directory-name>
npm install
```

### Running the Apps

To start any of the applications, run the following command in its respective directory:

```bash
# Development mode
npm run start

# Watch mode (recommended for development)
npm run start:dev

# Production mode
npm run start:prod
```

### Database Configuration (Product Inventory API)
If you are running the `product-inventory-api`, ensure you have PostgreSQL installed and running. You may need to update the `TypeOrmModule` configuration inside `src/app.module.ts` to match your local database credentials (username, password, and database name).

## 👨‍💻 Author
**Himangshu Mazumder Tonmmoy**
- GitHub: [HimangshuMazumderTonmmoy](https://github.com/HimangshuMazumderTonmmoy)

---
*Created as part of the Advanced Web Technology (Spring 2026) coursework.*
