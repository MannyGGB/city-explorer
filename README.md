# City Explorer

**Author**: MannyGGB
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview

- Locations: As a user of City Explorer, I want to enter the name of a location so that I can see the exact latitude and longitude of that location.
- Map: As a user, I want to see a map of the city so that I can see the layout of the area I want to explore.
- Errors: As a user, I want clear messages if something goes wrong so I know if I need to make any changes or try again in a different manner.

<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

## Getting Started

1. Set up your React repository & API keys:
2. Create a new repo called city-explorer on GitHub, initialized with no files.
3. Use npm create vite@latest to setup a new React application named city-explorer in your local projects directory.
4. Connect your GitHub repo to your local repo using the directions on GitHub.
5. Convert the README.md file to be documentation regarding your lab and its current state of development. Check the 1. "documentation" section of the lab assignment for more details on how that should look.
6. Deploy the basic react app to Vercel.
7. Install axios as a dependancy to your project using npm install axios
8. If you haven't already, procure a LocationIQ free-tier account. From the Dashboard, navigate to your API Access Tokens page. 9. View, then Update the existing token, to change the label to "City Explorer". LocationIQ - Free Reverse Geocoding API, Geocoding 1. API, Autocomplete API
9. OPTIONAL: Add your deployed Vercel app url as an HTTP Referrer to your API token settings. This step is necessary to prevent any 1. unauthorized use of your token. Also add localhost\* while testing from your development environment.
10. Create an .env file: Your API key goes here for local development. Make sure this file is in your .gitignore.
11. Add your API key to your Netlify deployment. Under "Site settings" > "Build & deploy" > "Environment", you need to add "Edit 13. variables" to add your API key, giving it the same name you used in your local .env file.
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture

Built in React, using APIs and Axios.

<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log

30-10-2023 14:41 – Application has a GET route for the location resource and displays the location name and coordinates.
30-10-2023 16:30 – Application shows a map matching the location and coordinates.
01-11-2023 16:10 – Application shows live weather description and date.

<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

## Credit and Collaborations

This was a collaborative project with Stephen Sage and the Norwich classroom.

<a href="https://www.flaticon.com/free-icons/map" title="map icons">Map icons created by Freepik - Flaticon</a>

<!-- Give credit (and a link) to other people or resources that helped you build this application. -->

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Time management

Name of feature: Location

Estimate of time needed to complete: 1h

Start time: 14:06

Finish time: 14:41

Actual time needed to complete: 35 min

---

Name of feature: Map

Estimate of time needed to complete: 1h

Start time: 14:47

Finish time: 16:30

Actual time needed to complete: 1h 43min

---

Name of feature: Weather(live)

Estimate of time needed to complete: 2h

Start time: 14:20

Finish time: 16:10

Actual time needed to complete: 1h 50min
