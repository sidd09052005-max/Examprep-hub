# ExamPrep Hub 🎓

ExamPrep Hub is a modern, scalable education platform built for entrance exam preparation (B.Ed, JEE, NEET, etc.). It offers structured access to Previous Year Questions (PYQs), dynamic quizzes, notes, and mind maps.

## Features ✨
- **Dynamic Exam & Subject Selection:** Structured flow from Exam -> Subject -> Resources.
- **Interactive Quiz System:** Timer-based mock tests with instant result analysis and explanations.
- **User Authentication:** NextAuth setup for Google & Credentials login.
- **MongoDB Database:** Full schema models for Users, Exams, Subjects, and Questions.
- **Modern UI:** Built with Tailwind CSS, Framer Motion, and Lucide Icons for a beautiful user experience.

## Tech Stack 🛠
- **Frontend:** Next.js 14 (App Router), React, Tailwind CSS, Framer Motion
- **Backend:** Next.js API Routes
- **Database:** MongoDB & Mongoose
- **Auth:** NextAuth.js

## Setup Instructions 🚀

### 1. Clone or Download the Repository
Make sure you are in the `exam-prep-app` directory.

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env.local` file in the root directory (one has been provided as an example) and add your MongoDB connection string and NextAuth variables:
```env
MONGODB_URI="mongodb+srv://<your-user>:<your-password>@cluster.mongodb.net/examprep"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-super-secret-key"
```

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

## Deployment Steps (Vercel) 🌍
1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and sign in.
3. Click **Add New** -> **Project** and import your GitHub repository.
4. In the configuration settings, add the Environment Variables from your `.env.local` file.
5. Click **Deploy**. Vercel will automatically detect the Next.js framework and deploy your full-stack application instantly!

---
*Built with ❤️ for modern education.*
