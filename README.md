# User Management Backend with Express and MongoDB

# Description
A backend system for user management using Express.js and MongoDB, allowing user registration and login.

# Installation

# 1. Clone the repository
git clone https://github.com/uttam1910/user-management-backend.git
cd user-management-backend

# 2. Install dependencies
npm install

# 3. Create a .env file in the root directory
echo "MONGO_URI=your-mongodb-connection-string" >> .env
echo "JWT_SECRET=your-jwt-secret" >> .env

# 4. Start the development server
npm run dev

# API Endpoints

# Register User
# URL: /api/users/register
# Method: POST
# Body:
# {
#   "name": "John Doe",
#   "email": "john.doe@example.com",
#   "password": "password123"
# }

# Login User
# URL: /api/users/login
# Method: POST
# Body:
# {
#   "email": "john.doe@example.com",
#   "password": "password123"
# }

# Screenshots
# Register User
![image](https://github.com/Uttam1910/user-management-backend/assets/126397580/414a459d-f6c4-4129-8028-4ca12a9f8cc8)

# Login User
![image](https://github.com/Uttam1910/user-management-backend/assets/126397580/eb64a3f6-6ff8-47d1-9e83-a4242f1c27a4)


# License
# This project is licensed under the MIT License.

# Contributing
# Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

