# IntellMeet – AI-Powered Meeting Platform

IntellMeet is a full-stack AI-powered meeting platform designed to support online meetings, real-time communication, collaboration, and AI-assisted meeting workflows.

The application provides user authentication, meeting management, audio/video communication, screen sharing, real-time notifications, and AI-powered functionality.

## Github
GitHub: https://github.com/SaswataPattanayak123
## Live Application

- **Frontend:** https://intellmeet-pearl.vercel.app
- **Backend:** https://intellmeet-backend-g8tq.onrender.com

## Features

- **User Authentication:** Registration, login, email OTP verification, and password reset.
- **Meeting Management:** Create and join online meetings.
- **Audio and Video Communication:** WebRTC-based meeting communication.
- **Screen Sharing:** Share your screen during meetings.
- **Real-Time Communication:** Socket.IO integration for meeting events.
- **AI Integration:** Google Gemini API integration.
- **Email Notifications:** Email verification using EmailJS.
- **Meeting History:** Access previous meeting information.
- **User Profiles:** Manage user account information.

## Technology Stack

### Frontend
- React.js
- Vite
- JavaScript
- HTML5
- CSS3
- Axios
- React Router
- Socket.IO Client
- Lucide React

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- JWT Authentication
- bcryptjs
- Multer

### APIs and Services
- Google Gemini API
- EmailJS
- MongoDB Atlas
- WebRTC

### Development and Deployment Tools
- Git
- GitHub
- Visual Studio Code
- Render
- Vercel
- npm

## Project Structure

```text
IntellMeet/
│
├── client/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── uploads/
│   ├── utils/
│   ├── package.json
│   └── server.js
│
├── .gitignore
└── README.md
```

## Installation and Setup

### Prerequisites

- Node.js and npm
- MongoDB Atlas account
- Google Gemini API key
- EmailJS account

### 1. Clone the Repository

```bash
git clone https://github.com/SaswataPattanayak123/IntellMeet.git
cd IntellMeet
```

### 2. Backend Setup

Navigate to the server directory:

```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FRONTEND_URL=http://localhost:5173
GEMINI_API_KEY=your_gemini_api_key

EMAILJS_SERVICE_ID=your_emailjs_service_id
EMAILJS_TEMPLATE_ID=your_emailjs_template_id
EMAILJS_PUBLIC_KEY=your_emailjs_public_key
EMAILJS_PRIVATE_KEY=your_emailjs_private_key
```

Start the backend:

```bash
npm run dev
```

Backend URL: `http://localhost:5000`

### 3. Frontend Setup

Open another terminal and navigate to the frontend directory:

```bash
cd client
npm install
```

Create a `.env` file inside the `client` directory:

```env
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

Start the frontend:

```bash
npm run dev
```

Frontend URL: `http://localhost:5173`

### 4. Production Build

From the `client` directory, run:

```bash
npm run build
```

The production build will be generated inside the `dist` directory.

## Deployment Architecture

| Component | Platform |
|---|---|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |

The frontend communicates with the backend through REST APIs and Socket.IO.

## Security

- Environment files are excluded from Git version control.
- API keys and database credentials should be stored securely.
- Production environment variables are configured through the respective deployment platforms.

## Author

**Saswata Pattanayak**