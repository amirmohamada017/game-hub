# Game Hub

Game Hub is a modern web application built with React that allows users to browse and explore video games. It features a responsive design, dynamic game listings, and various filtering and sorting options.

## Live Demo

Experience Game Hub in action! The application is deployed and accessible at:

[https://game-hub-lovat-seven.vercel.app/](https://game-hub-lovat-seven.vercel.app/)

This live version showcases all the features of Game Hub, allowing you to explore a vast collection of games, filter by genres and platforms, and discover new titles. The deployment on Vercel ensures fast loading times and a smooth user experience. Feel free to interact with the app, search for your favorite games, and explore the intuitive interface.

## Features

- Browse a vast collection of video games
- Filter games by genre and platform
- Sort games by different criteria (relevance, date added, name, release date, popularity, average rating)
- Search for specific games
- View detailed information about each game, including screenshots and trailers
- Infinite scrolling for seamless browsing experience
- Dark mode support

## Technologies Used

- React
- TypeScript
- Chakra UI for styling
- React Query for server state management
- Zustand for client state management
- React Router for navigation
- Axios for HTTP requests

## Project Structure

The project is organized into several key components:

- `GameGrid`: Displays the list of games with infinite scrolling
- `GameCard`: Represents individual game items in the grid
- `GameHeading`: Shows the current selection (genre/platform)
- `GenreList`: Allows filtering by game genres
- `PlatformSelector`: Enables filtering by gaming platforms
- `SearchInput`: Provides game search functionality
- `SortSelector`: Offers various sorting options for game listings

## Setup and Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Create a `.env` file and add your RAWG API key:
   ```
   VITE_API_KEY=your_api_key_here
   ```
4. Run `npm run dev` to start the development server

## Usage

Navigate through the application using the sidebar to filter games by genre, use the platform selector to choose specific gaming platforms, and use the search bar to find particular games. Click on a game card to view more details about the game.

## API

This project uses the [RAWG Video Games Database API](https://rawg.io/apidocs) to fetch game data. You'll need to sign up for a free API key to run the project locally.

## Acknowledgements

This project was completed as part of the "The Ultimate React Course" by Mosh Hamedani. The course can be found at:
- Part 1: https://codewithmosh.com/p/ultimate-react-part1
- Part 2: https://codewithmosh.com/p/ultimate-react-part2
