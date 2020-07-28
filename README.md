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
-Refactoring it to context
-Creating the mobile preview

Things I would work on given more time:
-Implementing that emoji-mart!
-Refactoring the CampaignEdit component to use context as well
  *Given the time contraints, I didn't have time to refactor but
    I can definitely see the code being even cleaner
-Working on additional custom tags rather than using hardcoded regex
-Text-compression/production build
-Reading the line-breaks for message content

Improvements to the service:
-Have a gallery of most recently used gifs or some gif-mart to make the process not
  purely upload based
-Create more appealing confirmation layouts rather than using native browser
-A hover-over on the TableEntry creates a sneak peak of the CampaignPreview
-Allow for additional options for each TableEntry, such as duplicating a campaign