ChatApp  

📅 Date: 9-01-2025  
**Project Setup**  

1) Structured Folders for Frontend and Backend  
Created a clean and organized folder structure to separate the frontend and backend code.  

2) Installed Packages  
Ran the following command to install necessary packages:  
```npm install mongoose express dotenv bcryptjs cookie-parser nodemon cors socket.io```  

3) MongoDB Configuration  
  Created a MongoDB project on MongoDB Cloud(https://cloud.mongodb.com).  
  Configured the username and password in VS Code using environment variables (.env file).  

📅 Date: 10-01-2025  
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