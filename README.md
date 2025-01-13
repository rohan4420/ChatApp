**ChatApp**  

📅 Date: 9-01-2025  
**Project Setup**  

1) Structured Folders for Frontend and Backend  
Created a clean and organized folder structure to separate the frontend and backend code.  

2) Installed Packages  
Run the following command to install necessary packages:  
```npm install mongoose express dotenv bcryptjs cookie-parser nodemon cors socket.io jsonwebtoken```  

3) MongoDB Configuration  
  Created a MongoDB project on MongoDB Cloud(https://cloud.mongodb.com).  
  Configured the username and password in VS Code using environment variables (.env file).

📅 Date: 10-01-2025  
✅ Progress Log: ChatApp Project  
1) Model Creation:  
Created models for User, Message, and Conversation.  
  
3) API Development:  
Added routes and APIs for the following functionalities using JSON Web Tokens (JWT):  
  a) Sign-in  
  b) Login  
  c) Logout    

📅 Date: 11-01-2025  
**Project Setup**  
## Middleware
### 1. `getOtherUser` Middleware
This middleware retrieves all users except the logged-in user and excludes the password field from the returned user data.
## Find all users except the logged-in user and exclude the password field
```const otherUsers = await User.find({ _id: { $ne: loggedInUserID }}).select("-password");```
### 2. `isAuthenticated` Middleware
The isAuthenticated middleware ensures that the user is authenticated before accessing certain routes.
## Purpose:  
It works between the request and the response. It decodes the JWT token to extract the user ID, which is then stored in req.id for use in subsequent middleware or route handlers.  
```req.id = decode.userId;```  
The decoded user ID can be used in the next middleware for further processing.

### 3. `Message Controller`
## 1. sendMessage   
## Purpose:
- The sendMessage function allows users to send messages to one another.  

## How It Works:
  - The sender's ID is derived from the authenticated user's session.The receiver's ID is taken from the route parameter.    The message content is provided in the request body.  
- The function checks whether a conversation already - exists between the two users:  
- If it exists, the new message is added to the conversation.If it doesn't exist, a new conversation is created, and the message is added.  
- After adding the message, the conversation is saved in the database. 

### 2. `getMessage`
## Purpose:
- The getMessage function retrieves all messages from a conversation between two users.

## How It Works:
- The sender's ID is obtained from the authenticated user's session. The receiver's ID is taken from the route parameter.  
- A search is conducted to find a conversation between the two users.  
- The populate method is used to retrieve the associated messages from the Message collection. 

## Example: 
- Without populate, the conversation document contains only message IDs.  - 
```
{
  "_id": "101",
  "sender": "1",
  "receiver": "2",
  "content": "Hey, Sagar!",
  "timestamp": "2025-01-12T10:30:00.000Z"
} 
```
- With populate, the result is enhanced with detailed user information:
```
{
  "_id": "101",
  "sender": {
    "_id": "1",
    "username": "Rohan",
    "email": "rohan@gmail.com"
  },
  "receiver": {
    "_id": "2",
    "username": "Sagar",
    "email": "sagar@gmail.com"
  },
  "content": "Hey, Sagar!",
  "timestamp": "2025-01-12T10:30:00.000Z"
}
```
## Purpose of populate: 
- It simplifies working with user data by directly replacing user IDs with complete user documents, including their usernames, emails, etc.


# `FRONTEND`
📅 Date: 13-01-2025  
**Project Setup**  

# ChatApp Project

## Description

A web-based chat application built with React, Tailwind CSS, DaisyUI, and connected to a backend API for user authentication and management.

## Setup

1. **Create React App**:
   - Run `npx create-react-app .` to set up the React project.

2. **Routing**:
   - Added `react-router-dom` to handle routing within the app:
   
   ```javascript
   const router = createBrowserRouter([
     {
       path: "/",
       element: <HomePage />,
     }
   ]);

   function App() {
     return (
         <RouterProvider router={router} />
     )
   }  

 3) **Created a submitSignupData function to send login data to the backend:**

- Created Login and Signup components connected to the backend API. Defined a state to hold user data:
```javascript  
const [user, setUser] = useState({
  username: "",
  password: "",
});  
```
```javascript
const submitSignupData = async () => {
  console.log(user);
  setUser({
    username: "",
    password: "",
  });
  try {
    const response = await axios.post(
      "http://localhost:8080/api/v1/user/login",
      user,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
  } catch (error) {
    console.error("Error logging in:", error);
  }
};

 