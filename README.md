# az-tv-search

This is the **az-tv-search** project, a TV show search application built using React and TypeScript.

## Description

The **az-tv-search** application allows users to search for TV shows using the TV Maze API. It provides a simple and intuitive interface to search for shows and view detailed information about each show.

## Features

- **TV Show Search** - Search for TV shows by name.
- **Show Details** - View detailed information about each TV show, including its summary, genre, status, schedule, and more.
- **Responsive Design** - The application is built with a responsive design, ensuring it works well on different screen sizes and devices.
- **UI Components** - The application uses the Material-UI library for styling and pre-built UI components, providing a modern and visually appealing interface.
- **Routing** - The application uses React Router for handling client-side routing and navigation.

## Getting Started

Follow these steps to get the application up and running:

1. Clone the repository: `git clone https://github.com/neithersome/az-tv-search`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser and visit `http://localhost:5173/` to see the application.

## Folder Structure

The project structure is organized as follows:

├── src/ # Application source code
│ ├── components/ # Reusable components
│ ├── pages/ # Application pages
│ ├── App.tsx # Main application component
│ ├── index.tsx # Entry point
├── public/ # Public assets
│ ├── index.html # HTML template
├── .eslintrc.json # ESLint configuration
├── tsconfig.json # TypeScript configuration
└── package.json # Package dependencies and scripts

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the production-ready application.
- `npm run lint`: Runs ESLint to check for code quality and adherence to best practices.
- `npm run preview`: Builds and previews the production-ready application.

## Dependencies

The project uses the following dependencies:

- **@emotion/react**: ^11.11.0
- **@emotion/styled**: ^11.11.0
- **@mui/icons-material**: ^5.11.16
- **@mui/material**: ^5.13.3
- **@types/react-router-dom**: ^5.3.3
- **axios**: ^1.4.0
- **react**: ^18.2.0
- **react-dom**: ^18.2.0
- **react-router-dom**: ^6.11.2

## Dev Dependencies

The project uses the following dev dependencies:

- **@types/react**: ^18.0.37
- **@types/react-dom**: ^18.0.11
- **@typescript-eslint/eslint-plugin**: ^5.59.0
- **@typescript-eslint/parser**: ^5.59.0
- **@vitejs/plugin-react**: ^4.0.0
- **eslint**: ^8.38.0
- **eslint-plugin-react-hooks**: ^4.6.0
- **eslint-plugin-react-refresh**: ^0.3.4
- **typescript**: ^5.0.2
- **vite**: ^4.3.9
