📄 Project Description
MERN Stack Developer Portfolio
A sophisticated, full-stack portfolio designed for high performance and seamless content management. This application features a dynamic project showcase with category filtering, a real-time messaging system, and a secure, private administrative dashboard. By integrating Cloudinary for image hosting and MongoDB for data persistence, the platform allows the owner to update their professional work and manage client inquiries without ever touching the code.

🚀 The README.md
Create a file named README.md in your root directory and paste the following:

Markdown
# 🚀 Full-Stack MERN Portfolio

A modern, responsive, and data-driven portfolio website built with the MERN stack (MongoDB, Express, React, Node.js).

## ✨ Features
- **Dynamic Project Gallery**: Automatically fetches and filters projects by category (Web/Mobile).
- **Admin Dashboard**: A secure private area to create, edit, and delete projects (CRUD).
- **Message Inbox**: Captures user inquiries from the contact form directly into the dashboard.
- **Image Management**: Integrated with **Cloudinary** for optimized image uploads.
- **Security**: Protected admin routes using **JWT (JSON Web Tokens)** and **Bcrypt** password hashing.
- **Modern UI**: Built with **Tailwind CSS**, **Framer Motion** for animations, and **Lucide React** icons.
- **Responsive Design**: Fully optimized for Mobile, Tablet, and Desktop.

## 🛠️ Tech Stack
- **Frontend**: React.js, Tailwind CSS, Framer Motion, Axios.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (via Mongoose).
- **Authentication**: JWT, LocalStorage.
- **Hosting**: Vercel (Frontend & Backend).



---

## 📦 Installation & Setup

### 1. Clone the repository
```bash
git clone (https://github.com/Emmanuel8577/Full_Stack_Portfolio_Site)
cd Full_Stack_Portfolio_Sit
2. Backend Setup
Navigate to the /Backend folder.

Install dependencies: npm install.

Create a .env file and add:

Code snippet
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
Start the server: npm run dev.

3. Frontend Setup
Navigate to the /Frontend folder.

Install dependencies: npm install.

Create a .env file and add:

Code snippet
VITE_API_URL=http://localhost:5000/api
Start the app: npm run dev.

🛰️ API Endpoints
Projects
GET /api/projects - Fetch all projects (Public)

POST /api/projects - Add new project (Private)

PUT /api/projects/:id - Update project (Private)

DELETE /api/projects/:id - Remove project (Private)

Messages
POST /api/messages - Send a message (Public)

GET /api/messages - View all messages (Private)

DELETE /api/messages/:id - Delete a message (Private)

👤 Author
Emmanuel Edache Adikwu

GitHub: @Emmanuel8577

Email: emmanueledache54@gmail.com
