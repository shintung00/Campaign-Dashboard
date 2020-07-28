# React-Express Starter
This repo contains a barebones app using React 16 and Express using Webpack 4 and Babel 7. The react app currently renders a simple Hello World. It can easily be extended by adding more components and routes to make a full-stack app.

## Getting Started

### Installation

**You’ll need to have Node >= 6 on your machine**. You can use [nvm](https://github.com/creationix/nvm#installation) to easily switch Node versions between different projects.

```sh
npm install
```

```sh
npm run react-dev
npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>
# react-express-starter


### Reflection
While I haven't had much experience with the Context API, I've read that refactoring a
hooks-based structure into context-based would be very doable.

I then started by diagramming the data flow from parents to children and studying examples
of context-based architecture to get an idea of the advantages of switching over. 
Ultimately, I wanted to be able to store app-level states and related methods in a separate
entity that I can always import into the components that need it.
Overall, the architecture of my app hasn't differed since the refactor.

Some challenges along the way:
- Refactoring it to context
- Creating the mobile preview

Things I would work on given more time:
- Implementing emoji-mart
- Working on additional custom tags rather than using hardcoded regex
- Reading the line-breaks for message content
- Text-compression/production build

Improvements to the service:
- Create more appealing confirmation layouts rather than using native browser
- A hover-over on the TableEntry creates a sneak peak of the CampaignPreview phone view
- Allow for additional options for each TableEntry, such as duplicating a campaign
- Incorporate a gif/img-market so that users don't have to manually link every gif/img