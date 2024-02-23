
# GoChat Application

## Introduction

GoChat is a simple chat application built in Golang, utilizing WebSocket for individual user messaging, creating and joining chat rooms, and chatting within those rooms. Additionally, the application provides user authentication functionalities through HTTPS GET and POST requests for signup and login.

## Features

- **Individual Messaging:** Users can send and receive messages privately through WebSocket connections.
- **Room Creation and Joining:** Users can create chat rooms and join existing ones to engage in group conversations.
- **Room Chat:** Users can exchange messages within chat rooms with other participants.
- **User Authentication:** Secure signup and login functionalities are provided through HTTPS GET and POST requests.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AbdulRafayZia/Chat-app-Next-JS-GO-.git
   ```

2. Navigate to the project directory:

   ```bash
   cd gochat
   ```

3. Install dependencies:

   ```bash
   go mod tidy
   ```

## Usage

1. Start the server:

   ```bash
   go run main.go
   ```

2. Access the application through your web browser at `http://localhost:8080`.

3. Signup for a new account or login with existing credentials.

4. Create a new chat room or join an existing one.

5. Start chatting with other users in individual messages or within chat rooms.

## Technologies Used

- **Golang:** Backend server and application logic are implemented in Golang.
- **WebSocket:** WebSocket protocol is utilized for real-time messaging between users.
- **HTTP:** HTTPS GET and POST requests are used for user authentication.
- **HTML/CSS/JavaScript:** Frontend user interface and interaction are implemented using web technologies.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for personal or commercial purposes.
