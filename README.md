# 📝 Note Taking Web App

A modern **note-taking web application** built with **React + TypeScript** and **Firebase**. This app allows users to create, edit, and manage notes securely with authentication and cloud storage.

This project was built as a learning-focused but production-style app, combining clean UI, state management, and real-world backend services.

---

## 🚀 Live Demo

🔗 [https://note-taking-web-app-rust.vercel.app](https://note-taking-web-app-rust.vercel.app)

---

## ✨ Features

* 🔐 **Authentication** (Sign up / Log in / Log out) using Firebase Auth
* ☁️ **Cloud-based notes storage** with Firebase Firestore
* 📝 Create, edit, archive, restore and delete notes
* 🏷️ Notes organization 
* 🔄 Real-time sync per user
* 🎨 Clean and responsive UI
* ⚡ Built with TypeScript for type safety

---

## 🛠️ Tech Stack

### Frontend

* **React**
* **TypeScript**
* **CSS / Tailwind**
* **React Router**

### Backend / Services

* **Firebase Authentication**
* **Firebase Firestore**

### Tooling

* Vite
* Git & GitHub
* Vercel (deployment)

---

## 🔑 Firebase Usage

This project uses Firebase for:

* **User authentication** (email & password)
* **Storing user-specific notes** in Firestore

Each authenticated user can only access their own notes.

> ⚠️ Firebase configuration keys are stored in environment variables and are **not committed** to the repository.

---

## 📦 Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/ketevan20/note-taking-web-app.git
cd note-taking-web-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a Firebase project**

* Go to [https://console.firebase.google.com](https://console.firebase.google.com)
* Create a new project
* Enable **Authentication (Email/Password)**
* Enable **Cloud Firestore**

4. **Set up environment variables** Create a `.env` file in the root directory:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

5. **Run the app locally**

```bash
npm run dev
```

---

## 🎯 What I Learned

* Working with **Firebase Auth & Firestore**
* Managing global state in React
* Protecting routes based on authentication
* Type-safe development with TypeScript
* Structuring a real-world React project

---

## 📌 Future Improvements

* Drag & drop reordering
* Offline support

---

## 👩‍💻 Author

**Ketevani Samukashvili**

* GitHub: [https://github.com/ketevan20](https://github.com/ketevan20)
* Junior Frontend Developer

---

⭐ If you like this project, feel free to star the repo!
