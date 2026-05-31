# Learning Dashboard

A modern learning dashboard built with Next.js, TypeScript, Supabase, Tailwind CSS, and Framer Motion.

## Dashboard Preview

![Dashboard Preview](public/screenshots/dashboard.png)

---

## Project Overview

This project is a responsive learning dashboard that displays course progress information stored in Supabase. The application fetches data dynamically from the database and presents it through an intuitive dashboard interface.

### Features

* Dynamic course data from Supabase
* Responsive dashboard layout
* Animated progress bars
* Activity tracking widget
* Modern UI with Tailwind CSS
* Course-specific icons using Lucide React
* Cloud deployment using Vercel

---

## Architecture

### Frontend

* Next.js 16
* TypeScript
* Tailwind CSS
* Framer Motion
* Lucide React Icons

### Backend & Database

* Supabase

Supabase is used as the backend service and database. Course information is stored in a `courses` table and fetched dynamically by the application.

### Deployment

* Vercel

The application is deployed on Vercel with automatic deployments connected to GitHub.

---

## Database Schema

### Table: courses

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
```

---

## Challenges Faced

### 1. Supabase Configuration

Initially, the application was unable to retrieve course data due to an incorrect Supabase API URL configuration. The issue was resolved by using the correct project URL and verifying environment variables.

### 2. Next.js Build Errors

During deployment, the application encountered build failures caused by Framer Motion components being used inside Server Components. The issue was resolved by properly separating Client Components from Server Components.

### 3. TypeScript Prop Validation

Several TypeScript errors occurred while passing dynamic course data between components. Proper prop definitions and type safety checks were implemented to resolve these issues.

### 4. Vercel Deployment Debugging

Deployment initially failed because of build-time rendering and environment variable issues. Vercel build logs were used to identify and fix the problems before successful deployment.

---

## Lessons Learned

Through this project, I gained practical experience with:

* Next.js App Router
* TypeScript
* Supabase Integration
* Git & GitHub Workflow
* Vercel Deployment
* Environment Variable Management
* Debugging Production Build Errors

---

## Live Demo

https://learning-dashboard-7fpx.vercel.app

---

## GitHub Repository

https://github.com/Vallabh-2946/learning-dashboard
