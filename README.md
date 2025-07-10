# Pinterest-Clone (INCOMPLETE)

This is an **incomplete Pinterest clone** built with Node.js, Express, MongoDB, and Multer.

## Features

- **Register**: Users can register with email, username, fullname, and password.
- **Photo Upload**: After registering, users can upload photos (images) using Multer. Each upload can have a caption/title.
- **Logout**: Users can log out.

## Not Implemented

- **Login**: There is no login functionality.
- **Forgot Password**: Not available.
- **Homepage**: No homepage or landing page.
- **Save/Like**: No save or like features for images.
- **Feed**: No public feed or gallery for all users.
- **Profile Editing**: No profile editing or settings.

## How to Use

1. **Install dependencies**
   ```sh
   npm install
   ```
2. **Start MongoDB**
   Make sure MongoDB is running (see project instructions).
3. **Run the app**
   ```sh
   npm start
   ```
4. **Register**
   - Go to `http://localhost:3000/` and register a new account.
5. **Upload Photo**
   - After registering, you can upload photos from your profile page.
6. **Logout**
   - Use the logout button to end your session.

## Tech Stack
- Node.js
- Express
- MongoDB (Mongoose)
- Multer (for file uploads)
- EJS (templating)

---
**Note:** This project is for demonstration/learning purposes and is not a complete Pinterest clone. 