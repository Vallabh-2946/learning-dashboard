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
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

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
