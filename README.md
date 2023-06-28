# Phase 2 Mock Code Challenge: Party Tracker

## Instructions

Welcome to Party Tracker, with the parties we know about and have gone to!  The front-end team laid down the foundations for our app, but it looks like they forgot all the functionality!

Your job will be to make our app work according to the user stories you will find the [Core Deliverables](#Core-Deliverables) section.

## Setup

After unbundling the project:

1. Run `npm install` in your terminal.
2. Run `npm run server`. This will run your backend on port `8004`.
3. In a new terminal, run `npm start`. This will run your React app on port `8000`.

Make sure to open [http://localhost:8004/parties](http://localhost:8004/parties) in the browser to verify that your backend is working before you proceed!

The base URL for your backend is: `http://localhost:8004`

## Core Deliverables

As a user:

1. When the app starts, I can see all currently created parties.
2. I can show/hide the form to create new parties.
3. I can create parties and they are still there when I refresh the page.
4. I can mark parties as attended which will change the text of that button to "Party successful".

### Endpoints for Core Deliverables

#### GET /parties

Example Response:

```json
[
  {
      "id": 1,
      "address": "8852 West Sunset Boulevard",
      "notes": "Should go all night.  Lots of rock & roll music.  Will be at the famous Viper Room in Los Angeles.",
      "host": "Bryan Callen"
    },
    {
      "id": 2,
      "address": "1015 Folsom Street",
      "notes": "The rave to end all raves.  Three floors of electronic dance music with lots of lasers.",
      "host": "John Digweed"
    }
]
```

#### POST `/parties`

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "address": "string",
  "notes": "string",
  "host": "string"
}
```

Example Response:

```json
{
  "id": 3,
  "address": "50 Mason",
  "notes": "Underground bar running 24 hours a day",
  "host": "Luke"
}
```
