# GraphQL fullstack app

this is a simple graphql app, using apollo client and react in the client.

## technologies used

### client

```json
  "dependencies": {
    "@apollo/react-hooks": "^3.1.5",
    "apollo-cache-inmemory": "^1.6.6",
    "apollo-client": "^2.6.10",
    "apollo-link-http": "^1.5.17",
    "graphql-tag": "^2.10.3",
    "react-apollo": "^3.1.5",
    "react-router-dom": "^5.2.0",
  }
```

### server 

```json
    "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "express-graphql": "^0.9.0",
    "graphql": "^15.0.0",
    "mongoose": "^5.9.14"
  },
  "devDependencies": {
    "concurrently": "^5.2.0",
    "nodemon": "^2.0.4"
  }
```

# scripts

```json
    "client": "npm start --prefix client",
    "server": "nodemon index.js -e js",
    "debug": "nodemon --inspect index.js -e js",
    "dev": "concurrently \"yarn client\" \"yarn server\""
```


to install all dependencies run

```bash
    npm install 
```
or 

```bash
    yarn
```

## Configuration

to connect the data base locate the var MONGO_URI, this var is located at \server\db\mongoose.js

```javascript
    const MONGO_URI = <MONGO_URI_HERE>
```

## Routes 

the server its running on port 4000, to access to GraphiQL go to:

```
    http://localhost:4000/grapql
```

the client side its running on port 3000, to access go to:

```
    http://localhost:3000
```


