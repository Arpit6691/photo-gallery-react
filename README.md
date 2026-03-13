# Photo Gallery Web App

This project is a **React Photo Gallery Web Application** built using **React, Vite, and Tailwind CSS**.
The application fetches photos from a public API and displays them in a responsive grid layout. Users can search photos by author name and mark photos as favourites.

## Features

* Fetch photos from the **Picsum Photos API**
* Responsive photo grid layout

  * Desktop: 4 columns
  * Tablet: 2 columns
  * Mobile: 1 column
* Real-time search filter by author name
* Mark and unmark photos as favourites
* Favourites persist using **localStorage**
* Loading spinner while fetching data
* Error message if API request fails
* Custom React hook for API fetching
* State management using **useReducer**
* Performance optimization using **useCallback** and **useMemo**

## Tech Stack

* React
* Vite
* Tailwind CSS
* JavaScript (ES6)

## API Used

Picsum Photos API

https://picsum.photos/v2/list?limit=30

This API returns a list of photos along with information such as author name and image URLs.

## Project Structure

```
src
 ├── components
 │   ├── Gallery.jsx
 │   └── PhotoCard.jsx
 │
 ├── hooks
 │   └── useFetchPhotos.js
 │
 ├── reducer
 │   └── favouritesReducer.js
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

## How the Application Works

1. The app fetches photos from the Picsum API using a custom hook called **useFetchPhotos**.
2. Photos are displayed in a responsive grid layout using **Tailwind CSS**.
3. Users can search photos by typing an author name in the search bar.
4. The favourites feature is implemented using **useReducer**.
5. Selected favourite photos are saved in **localStorage** so they persist after page refresh.
6. **useCallback** and **useMemo** are used to optimize performance and avoid unnecessary re-renders.

## Installation and Setup

1. Clone the repository

```
git clone https://github.com/Arpit6691/photo-gallery-react.git
```

2. Navigate to the project folder

```
cd photo-gallery-react
```

3. Install dependencies

```
npm install
```

4. Run the development server

```
npm run dev
```

The application will start on:

```
http://localhost:5173
```

## Author

Arpit

## Assignment

This project was created as part of a **Frontend Intern Pre-Screening Assignment**.
