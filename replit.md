# NorkCraft Email Server

## Overview

NorkCraft Email Server is a Node.js/Express backend service that provides email-based OTP (One-Time Password) authentication for user registration and verification. The server handles user signup, login validation, and sends verification emails using Gmail's SMTP service.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Backend Framework
- **Express.js** serves as the web framework
- Entry point is `src/index.js` which sets up middleware, routes, and starts the server
- Static files served from `/public` directory

### Database Layer
- **MongoDB** with **Mongoose ODM** for data persistence
- Connection configured in `src/config/database.js`
- Falls back to local MongoDB if `MONGODB_URI` environment variable not set

### User Model
- Stores email, password, verification status, and timestamps
- Passwords automatically hashed using **bcryptjs** before saving (pre-save hook)
- Includes password comparison method for login verification

### Authentication Flow
- Routes defined in `src/routes/auth.js` under `/api/auth` prefix
- Input validation using **Joi** schema validation
- OTP generated as 6-digit random number during signup
- OTP sent via email for verification

### Email System
- **Nodemailer** configured with Gmail SMTP in `src/config/email.js`
- HTML email templates in `src/utils/emailTemplate.js`
- Requires `EMAIL_USER` and `EMAIL_PASSWORD` environment variables

### API Endpoints
- `POST /api/auth/signup` - User registration with email verification
- `GET /health` - Server health check
- Static files served at root path

### Deployment Configuration
- Configured for **Vercel** deployment via `vercel.json`
- API routes proxied to Express server
- Static files served separately

## External Dependencies

### Database
- **MongoDB** - Primary data store (connection string via `MONGODB_URI` env var)

### Email Service
- **Gmail SMTP** - Email delivery for OTP verification
- Requires app password or OAuth credentials
- Environment variables: `EMAIL_USER`, `EMAIL_PASSWORD`

### Key NPM Packages
- `express` - Web server framework
- `mongoose` - MongoDB object modeling
- `nodemailer` - Email sending
- `bcryptjs` - Password hashing
- `joi` - Request validation
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variable management