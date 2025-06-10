Got it! Here's your complete `README.md` content for your **summer.co** eCommerce website, all in **one single markdown file** with:

* Title & description
* Live demo link
* Features and tech stack
* Installation guide
* Folder structure
* How it works
* Page list
* How data flows

---

````markdown
# 🌞 summer.co - Summer Wear eCommerce Website

**Live Demo:** [https://summer-collection-e-com-frontend.vercel.app/](https://summer-collection-e-com-frontend.vercel.app/)

**summer.co** is a sleek, responsive, and modern eCommerce web app built to showcase and shop for summer wear for men, women, and kids. It is an internship assignment project using Vite + React, Tailwind CSS, and data fetched live from Amazon using RapidAPI.

---

## 🚀 Tech Stack

- ⚡ Vite + React
- 💅 Tailwind CSS
- 📦 Context API for global state (Cart + Products)
- 🌐 RapidAPI for scraping product data from Amazon
- 🔗 Deployed on Vercel

---

## 📄 Pages

- `/` → Home page  
- `/store` → Product listing  
- `/cart` → Shopping cart  
- `/login` → User login  
- `/signup` → User registration  

---

## ⚙️ Installation Guide

To run this project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/your-username/summer.co.git

# Navigate into the project directory
cd summer.co

# Install dependencies
npm install

# Create a .env file in the root with the following content
````

```
VITE_RAPID_API_KEY=your_rapid_api_key
VITE_RAPID_API_HOST=real-time-amazon-data.p.rapidapi.com
```

```bash
# Start the development server
npm run dev
```

---

## 📁 Folder Structure

```
summer.co/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ProductCard.jsx
│   ├── context/
│   │   ├── CartContext.jsx
│   │   └── ProductsContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Store.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── Cart.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── package.json
└── vite.config.js
```

---

## 🔍 How It Works

* 🧠 **Product Fetching**:
  Uses RapidAPI to fetch Amazon summer wear products on load using the `ProductsContext`. It stores and provides product data globally.

* 🛒 **Cart Management**:
  Implements a global cart using `CartContext`, allowing any component to access and update cart state (add/remove items, quantity changes, etc.).

* 📦 **Reusable Components**:
  Components like `ProductCard`, `Navbar`, and `Footer` are reusable and responsive using Tailwind.

* 📱 **Responsiveness**:
  Designed mobile-first with fully responsive layout using Tailwind CSS utilities.

* 🛠️ **Vite**:
  Fast build and dev server support using Vite for better DX and speed.

---

## 🙌 Credits

Built as an internship assignment by \[Your Name].
Data provided via [RapidAPI](https://rapidapi.com/).

---

## 📌 Note

This app is for educational and demo purposes. Product listings and data are fetched dynamically and may vary.

```

---

You can now **copy and paste this entire content directly into your `README.md`**. Let me know if you'd like me to also generate a badge or add deployment instructions via Vercel.
```
