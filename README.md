# Server_with_Raw_Node.JS_and_Typescript

A simple REST API built using **Raw Node.js + TypeScript** without any backend framework like Express.  
It demonstrates how to build routing, dynamic parameters, body parsing, and CRUD operations from scratch.

---

## Features

- Pure **Node.js core modules** (`http`, `fs`, `path`)
- **Custom routing system** (GET, POST, PATCH, DELETE)
- Dynamic routes (`/users/:id`)
- JSON body parser
- File-based mini database (`data.json`)
- Built with **TypeScript**

---

## Project Structure

```
├─ src/
│ ├─ config/
│ │ └─ index.ts
│ ├─ helpers/
│ │ ├─ RouteHandlers.ts
│ │ ├─ SendJSON.ts
│ │ ├─ dynamicRoute.ts
│ │ ├─ fileDB.ts
│ │ └─ parsedBody.ts
│ ├─ routes/
│ │ └─ index.ts
│ ├─ users/
│ │ └─ data.json
│ └─ server.ts
│
├─ .gitignore
├─ package-lock.json
├─ package.json
├─ tsconfig.json
└─ README.md
```

## Clone & Setup the Project :

## Clone the Project

```bash
git clone https://github.com/Pritom07/Server_with_Raw_Node.JS_and_Typescript.git
```

## Move into the project folder:

```
cd Server_with_Raw_Node.JS_and_Typescript
```

## Install dependencies

```bash
npm install
```

## Run in development mode

(Uses **ts-node-dev**)

```bash
npm run dev
```

## API Endpoints

### Root

```
GET /
```

Returns a basic success message.

### User APIs

### Get all users

```
GET /users
```

### Get a single user

```
GET /users/:id
```

### Create a new user

```
POST /users
```

#### Example body:

```
{
  "id": 3,
  "name": "Alice",
}
```

### Update a user (partially)

```
PATCH /users/:id
```

### Delete a user

```
DELETE /users/:id
```

## File Database (data.json)

### Located at:

```
src/users/data.json
```

### Example:

```
[
  {
    "id": 1,
    "name": "Pritom"
  },
  {
    "id": 2,
    "name": "shaon"
  }
]
```

### Reads & writes performed using:

- `getUsers()`

- `setUser(users)`

## How Routing Works ?

- All routes are registered using `addRoute()`

- Dynamic routes like `/users/:id` are handled via `findDynamicRoutes()`

- Parameter values are available as:

```
(req as any).params.id
```

## Tech Stack

- **Node.js** (raw **HTTP** module)

- **TypeScript**

#### No frameworks (No Express, Nest, etc.)

## Purpose

This project is designed to help understand:

- How **Node.js HTTP** server works internally

- How routing frameworks (like **Express**) work under the hood

- How to manually parse request body

- How to design a tiny routing system

- For learning **backend fundamentals** and **core Node.js concepts.**
