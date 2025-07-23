# ToDo Productivity List

A modern ToDo application with integrated Pomodoro-style timers and productivity tracking. Built with **React** (Vite, TailwindCSS & Bootstrap) on the client side and **Node.js** (Express, PostgreSQL) on the server side.

## 🚀 Features

* **Task Management**: Create, edit, delete, and filter tasks (All, Active, Completed).
* **Pomodoro Timers**: Assign custom timer durations to tasks, start/stop a countdown, and automatically log completed sessions.
* **Productivity History**: View daily and weekly time spent on tasks, stored in a PostgreSQL database.
* **Responsive UI**: Combines Bootstrap components for layout with TailwindCSS utilities for custom styling.
* **Real-Time Updates**: React front-end fetches data via REST API and updates instantly when tasks or timers change.

## 📦 Project Structure

```
root/
│
├── backend/               # Express API + PostgreSQL integration
│   ├── index.js           # Main server and routes
│   └── ...                # DB initialization, routes, controllers
│
└── client/                # React front-end (Vite + Tailwind + Bootstrap)
    ├── public/
    ├── src/
    │   ├── components/    # TaskForm, TaskList, Timer, History
    │   ├── App.jsx
    │   └── main.jsx       # Entry point
    ├── index.html
    ├── tailwind.config.js
    ├── postcss.config.cjs
    └── vite.config.js
```

## 🔧 Technologies

* **Client**: React, Vite, TailwindCSS, Bootstrap, JavaScript.
* **Server**: Node.js, Express, pg (PostgreSQL), CORS.
* **Database**: PostgreSQL (tasks & timelogs tables).

## ⚙️ Installation & Setup

### Prerequisites

* Node.js v16+ and npm
* PostgreSQL database

### Backend

1. Navigate to the `backend/` folder:

   ```bash
   cd backend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Configure your database connection in `.env` or set `DATABASE_URL`:

   ```env
   DATABASE_URL=postgres://user:password@localhost:5432/todo_db
   ```
4. Run the server in development (with auto-reload):

   ```bash
   npm run dev   # uses nodemon
   ```

   Or start normally:

   ```bash
   npm start
   ```

The API will be available at `http://localhost:3000`:

* `GET /tasks` (optional `?filter=active|completed`)
* `POST /tasks`
* `PUT /tasks/:id`
* `DELETE /tasks/:id`
* `POST /timelogs`
* `GET /history?period=day|week`

### Frontend

1. Navigate to the `client/` folder:

   ```bash
   cd client
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Run the Vite dev server:

   ```bash
   npm run dev
   ```
4. Open your browser at `http://localhost:5173`.

The front-end will proxy API calls to the back-end.

## 🎨 Styling

* **Bootstrap** provides the grid, cards, buttons, and form controls.
* **TailwindCSS** is used for custom utilities: gradients, shadows, rounded corners, spacing, and responsive tweaks.

## 📝 Usage

1. **Add a Task**: Enter title, description, and timer duration, then click **Add Task**.
2. **Start/Stop Timer**: Click **Start** to begin countdown; when it reaches zero, the session is logged and the task marked completed.
3. **Filter Tasks**: Switch between **All**, **Active**, and **Completed**.
4. **View Productivity**: Check the **Today's Productivity** card for total minutes spent.

## 📈 Productivity Tracking

* Completed Pomodoro sessions are stored in the `timelogs` table with timestamps and duration.
* Use `GET /history?period=week` to retrieve weekly totals.

## 🔗 License

This project is provided under the MIT License. Feel free to use, modify, and distribute it.

---

*Developed as a demonstration of full-stack React & Node.js application with timer-based productivity tracking.*
