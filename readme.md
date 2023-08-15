# Messenger App with Chat Engine, React, Axios, and Node.js

This is a real-time messenger application built using Chat Engine, React, Axios, and Node.js. The application allows users to send and receive messages in real-time, engage in conversations, and log in securely.

## Features

- Real-time Messaging: Users can send and receive messages in real-time.
- Conversations: Users can engage in private conversations with other users.
- User Authentication: Secure user authentication and registration.
- Message Status: Users can track the status of their sent messages (delivered, read, etc.).

## Technologies Used

- **Chat Engine:** A platform providing APIs and SDKs for real-time chat applications.
- **React:** A JavaScript library for building user interfaces.
- **Axios:** A promise-based HTTP client for making API requests.
- **Node.js:** A runtime environment for server-side JavaScript.
- **Express:** A web application framework for Node.js.

## Getting Started

Follow these steps to set up and run the messenger application:

### Frontend (React)

1. Clone the repository:

   ```bash
   git clone https://github.com/akashrajvanshii/chaton.git
   cd messenger-app/client
   
2. Install frontend dependencies:

   ```bash
   npm install
   npm install axios
   ```
3. Configure Chat Engine:

   - Create an account on Chat Engine.
   - Obtain your Chat Engine API credentials.
   - Update the .env file in the frontend directory with your Chat Engine credentials.
   
4. Start the frontend server:

   ```bash
   npm start
   ```
5. Access the app:

   - Open your browser and navigate to http://localhost:3000

### Backend (Node.js)

1. Navigate to the backend directory:

   ```bash
   cd messenger-app/server
   ```
   
2. Install backend dependencies:

   ```bash
    npm install
    npm install express
    npm install cors
    npm install dotenv
    npm install nodemon
    ```
3. Configure environment variables:

   -  Create a .env file in the backend directory.
   -  Define your Chat Engine API credentials, database connection information, and other configuration details in the .env file.

4. Start the backend server:

   ```bash
    npm start
    ```
   
5. The backend server should now be running at http://localhost:5001.

## Directory Structure

```bash
ChatOn/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── AuthPage.jsx
│   │   ├── ChatsPage.jsx
│   │   ├── main.jsx
│   │   └── .env
│   │   └── ...
│   ├── package.json
├── server/
│   │ 
│   ├── .env
│   ├── .index.js
│   ├── package.json
│   └── request.rest
└── README.md


```
## Configuration

Before running the application, configure the following:
```
 - Frontend: Update the .env file in the frontend directory with your Chat Engine API credentials.
 - Backend: Create a .env file in the backend directory and define your configuration variables, including database connection details and security settings.
```

## Acknowledgments

This project was developed based on the Chat Engine documentation.

## License

This project is licensed under the MIT License - see the LICENSE file for details.