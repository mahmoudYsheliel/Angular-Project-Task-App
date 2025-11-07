# 🧩 Angular Training App

A **project and task management training app** built with **Angular 20** and **PrimeNG**, showcasing key Angular concepts like authentication, guards, interceptors, and modular services — powered by a mock backend using **JSON Server**.

---

##  Features

-  User login and logout functionality
-  Auth guards for route protection
-  Global HTTP interceptors (logging, errors, timing)
-  Organized modular architecture
-  Styled UI using PrimeNG
-  Mock backend via JSON Server (`users`, `projects`, `tasks`)
-  Persistent authentication using local storage and Angular signals

---

##  Project Structure

```
src/
├── app/
│   ├── core/
│   │   ├── guards/              # Auth guard
│   │   ├── interceptors/        # Log, Error, Timing interceptors
│   │   └── services/            # Auth, User API, Project API
│   ├── components/              # Sidebar, Project Card, etc.
│   ├── pages/                   # Login, Dashboard, Projects, Project Details
│   └── app.config.ts
└── backend/
    └── db.json                  # JSON Server mock database
```

---

##  Setup & Run

###  Install dependencies
```bash
npm install
```

###  Start Angular development server
```bash
ng serve
```

###  Run mock backend
```bash
npx json-server backend/db.json
```

Default backend URL:
```
http://localhost:3000/
```

---

##  App Overview

###  Authentication
- Handles login and logout using mock API data.
- Persists user session in local storage.
- Uses **Angular signals** to manage authentication state reactively.

###  Auth Guard
- Restricts access to protected routes.
- Redirects unauthenticated users to the login page.
- Prevents logged-in users from accessing the login route again.

###  HTTP Interceptors
| Interceptor | Purpose |
|--------------|----------|
| **LogInterceptor** | Logs all HTTP requests and responses for debugging. |
| **ErrorInterceptor** | Handles HTTP and network errors globally. |
| **TimingInterceptor** | Measures and logs request latency using `performance.now()`. |

###  Services
| Service | Purpose |
|----------|----------|
| **AuthService** | Manages authentication state, login/logout, and local storage. |
| **UserApiService** | Provides user-related API operations. |
| **ProjectApiService** | Handles fetching and managing project data. |

---

##  Components

| Component | Description |
|------------|-------------|
| **Sidebar** | Displays navigation links and active user info. |
| **Project Card** | Displays project summary using a passed `projectId` input. |
| **Dashboard** | Lists projects assigned to the logged-in user. |
| **Project Details** | Shows project-specific info and related tasks. |

---

##  Mock Backend

The backend uses **JSON Server** with the following collections:
- `/users`
- `/projects`
- `/tasks`

IDs are stored as strings, with relational references between users and projects.

---

##  Tech Stack

- **Angular 20**
- **PrimeNG**
- **TypeScript**
- **RxJS / Signals**
- **JSON Server**

---

##  Author

**Developed by Mahmoud Yasser**  
 A hands-on training project for mastering modern Angular patterns.

---
