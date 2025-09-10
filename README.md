# FlixFlex

A React Native movie and series discovery app built with Expo, TypeScript, and Firebase.

## Features

- Browse movies and TV series
- Search functionality
- User authentication with Firebase
- Infinite scroll for media lists
- Video trailers and details
- Dark/Light theme support

## Setup

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   # or
   bun install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

## Environment Variables

You need to create a `.env` file in the root directory with the following variables:

```env
# The Movie Database (TMDB) API Key
# Get your API key from: https://www.themoviedb.org/settings/api
EXPO_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here

# Firebase Configuration
# Get your Firebase config from: https://console.firebase.google.com/
EXPO_PUBLIC_FB_API_KEY=your_firebase_api_key_here
EXPO_PUBLIC_FB_AUTH_DOMAIN=your_project_id.firebaseapp.com
EXPO_PUBLIC_FB_PROJECT_ID=your_project_id_here
EXPO_PUBLIC_FB_STORAGE_BUCKET=your_project_id.appspot.com
EXPO_PUBLIC_FB_MESSAGING_SENDER_ID=your_messaging_sender_id_here
EXPO_PUBLIC_FB_APP_ID=your_firebase_app_id_here
```

- **TMDB API Key**: Get your API key from [The Movie Database (TMDB)](https://www.themoviedb.org/settings/api)
- **Firebase Configuration**: Get your Firebase config from the [Firebase Console](https://console.firebase.google.com/)

4. Start the development server:
   ```bash
   npm start
   # or
   bun start
   ```

## Tech Stack

- React Native with Expo
- TypeScript
- Firebase Authentication
- The Movie Database (TMDB) API
- React Query for data fetching
- Jotai for state management
- React Hook Form for forms
- React Navigation for navigation
- Shopify Restyle for styling

## Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run on web browser
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
