# NorkCraft Email Server

Backend service for sending OTP verification emails to users during registration.

## Features

- **OTP Email Delivery**: Send one-time passwords via Gmail SMTP
- **Professional HTML Templates**: Branded email templates
- **CORS Enabled**: Works with frontend apps on different domains
- **Input Validation**: Validates email format and required fields
- **Error Handling**: Comprehensive error responses

## Prerequisites

- Node.js 14+
- Gmail account with 2-Step Verification enabled
- Gmail App Password (16-character password)

## Installation

```bash
npm install
```

## Configuration

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Add your credentials to `.env`:
```
PORT=3001
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-app-password-16-chars
NODE_ENV=development
```

## Running the Server

### Local Development
```bash
npm run dev
```

Server will start on `http://localhost:3001`

### Health Check
```bash
curl http://localhost:3001/health
```

Response:
```json
{ "status": "Email server is running" }
```

## API Endpoints

### Send OTP
- **Endpoint**: `POST /api/auth/send-otp`
- **Content-Type**: `application/json`

**Request Body:**
```json
{
  "email": "user@example.com",
  "otp": "123456"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "OTP sent successfully to user@example.com"
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "message": "Error description"
}
```

## Project Structure

```
server/
├── src/
│   ├── index.js           # Main server file
│   ├── config/
│   │   └── email.js       # Email transporter config
│   ├── routes/
│   │   └── auth.js        # Authentication routes
│   └── utils/
│       └── emailTemplate.js  # Email template generator
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

## Deployment to Render

1. Push code to GitHub
2. Create Web Service on Render
3. Set start command: `npm start`
4. Add environment variables:
   - `EMAIL_USER`
   - `EMAIL_PASSWORD`
5. Deploy

[Full Render deployment guide](../RENDER_SETUP.md)

## Troubleshooting

**Email not sending?**
- Verify EMAIL_USER and EMAIL_PASSWORD in `.env`
- Ensure Gmail app password has no spaces
- Check that 2-Step Verification is enabled on Gmail

**CORS errors?**
- CORS is enabled for all domains
- Check that Content-Type header is `application/json`

**Port already in use?**
- Change PORT in `.env`
- Or kill process: `lsof -ti:3001 | xargs kill -9`

## License

ISC
