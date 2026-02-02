# 📚 Bookshop Store App

A simple **React + Vite** single-page application for a bookstore. 
The project demonstrates routing, reusable components, API integration, conditional rendering, and basic state management using React hooks.

---

## 🚀 Features

* 🏠 **Home page** with login functionality
* 📚 **Books page** with search using Open Library API
* 📞 **Contact Us page** with store details and feedback form
* ❌ **404 Not Found page** for invalid routes
* 🧭 **Header & Footer** shared across all pages
* 🔄 **Client-side routing** using React Router
* ⏳ Loading & ❗ error handling for API calls

---

## 🛠️ Tech Stack

* **React** (with Hooks)
* **Vite** (development & build tool)
* **React Router DOM** (routing)
* **CSS** (styling)
* **Open Library API** (book data)

---

## 📂 Project Structure

```
src/
│── assets/            # Images & icons
│── components/        # Reusable components (Header, Footer)
│── pages/             # Page components
│   ├── Home.jsx
│   ├── Books.jsx
│   ├── Contactus.jsx
│   └── NotFound.jsx
│── App.jsx             # Main app component
│── main.jsx            # Entry point
```

---

## 🔐 Login Logic (Home Page)

* Login form is displayed using **conditional rendering**
* Uses `useState` to track login status.

---

## 📚 Books API

* Uses **Open Library Search API**
* Fetches books based on user input
* Displays:

  * Loading state
  * Error message if fetch fails
  * Book title & author if successful

Example API:

```
https://openlibrary.org/search.json?title=
```

---

## ❌ 404 Page

* Implemented using React Router wildcard route:

```jsx
<Route path="*" element={<NotFound />} />
```

* Improves user experience for invalid URLs

---

## ▶️ How to Run the Project

1. Install dependencies

```bash
npm install
```

2. Start development server

```bash
npm run dev
```

3. Open in browser

```
http://localhost:5173
```

---
