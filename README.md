# React State & Props: A Twitter Clone

## Learning Objectives
- Improve the maintainability of an app by breaking it down into individual components
- Pass data to components via props

## Setup

- Fork and clone the repository
- Run `npm ci` to install dependencies
- `npm run dev` to run the app

## Instructions
Inside this project you'll find a Twitter clone react app. The tweets are loaded from an array and placed into some state in 
the `App.jsx` component. We're also faking a logged in user and saving their details in state. All of the code is in `App.jsx`, all of the CSS is in `index.css`

### Core Criteria

_Note: All existing functionality should continue to work as intended._

- Extract the left side, middle and right side into their own components
- Extract tweets into a component

### Extensions

_Note: All existing functionality should continue to work as intended._

1. Extract the create tweet form into its own component. It should still be able to add new tweets into the list of tweets.
2. Identify and extract other elements that can become components, for example:
   - The items under the "What's happening" section
   - The profile cards under the "Who to follow" section (hint: this could also be used to render the currently logged in user's card in the bottom left of the screen)
   - The tweet actions (like, retweet, etc.)
3. Make the search bar functional so that it filters the list of tweets based on what is typed into the input