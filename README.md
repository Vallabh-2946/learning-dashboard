# Learning Dashboard

A modern learning dashboard built using Next.js, TypeScript, Supabase, Tailwind CSS, Framer Motion, and Vercel.

## Project Overview

This application displays a student's learning progress through dynamically loaded course cards. Course information is stored in Supabase and fetched in real time by the Next.js application.

The dashboard includes:

* Dynamic course data from Supabase
* Progress tracking cards
* Responsive dashboard layout
* Animated progress bars
* Modern UI using Tailwind CSS
* Cloud deployment using Vercel

---

## Architecture

### Frontend

* Next.js 16 (App Router)
* TypeScript
* Tailwind CSS
* Framer Motion
* Lucide React Icons

### Backend & Database

* Supabase

Supabase is used as the backend service and database. Course information is stored in a `courses` table and fetched dynamically by the application.

### Deployment

* Vercel

The application is deployed on Vercel with automatic deployments from GitHub.

---

## Database Schema

### courses

| Column     | Type      |
| ---------- | --------- |
| id         | uuid      |
| title      | text      |
| progress   | integer   |
| icon_name  | text      |
| created_at | timestamp |

---

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=[your_supabase_url](https://iudwzsillmgnehwdlhva.supabase.co

NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1ZHd6c2lsbG1nbmVod2RsaHZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNTE4NDQsImV4cCI6MjA5NTcyNzg0NH0.rsxIXLgqGQEz7JO3m3LxPgfhg4A46hXwV5-m1j3X2To
```

---

## Installation

```bash
npm install

npm run dev
```

---

## Challenges Faced

### 1. Supabase API Configuration

Initially, the application was unable to fetch data due to an incorrect Supabase URL configuration. The issue was resolved by using the correct project URL instead of the REST endpoint URL.

### 2. Next.js Build Errors

During deployment, the project failed to build because Framer Motion components were being used inside Server Components. The solution involved separating client-side animation logic into Client Components.

### 3. TypeScript Component Props

Several type errors occurred while passing course data between components. Proper TypeScript prop definitions were added to ensure type safety.

### 4. Vercel Deployment Issues

The deployment initially failed due to build-time rendering errors and environment variable configuration issues. These were resolved through debugging build logs and correcting project configuration.

---

## Lessons Learned

Through this project I gained practical experience with:

* Next.js App Router
* TypeScript
* Supabase Integration
* Git & GitHub Workflow
* Vercel Deployment
* Debugging Production Build Errors
* Environment Variable Management

---

## Live Demo

https://learning-dashboard-7fpx.vercel.app

---

## GitHub Repository

https://github.com/Vallabh-2946/learning-dashboard
