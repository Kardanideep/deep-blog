---
title: Node.js Tutorial
description: This is a Node.js tutorial designed for beginners and advanced learners alike.
slug: nodejs-tutorial
date: 12/12/2024
author: Deep
image: /nodejs.jpg
---

Welcome to this comprehensive Node.js tutorial! Whether you're new to server-side development or want to advance your skills, this guide covers everything from the basics to advanced concepts.

## Introduction to Node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to execute JavaScript code on the server side.

### Why Learn Node.js?

- **Asynchronous and Event-Driven**: Handles multiple requests efficiently without blocking the main thread.
- **Single Programming Language**: Use JavaScript for both client-side and server-side development.
- **Extensive Ecosystem**: A rich library of modules via npm.
- **Scalability**: Ideal for building scalable network applications.

## Setting Up Node.js

To get started with Node.js:

1. **Install Node.js**: Download and install Node.js from [nodejs.org](https://nodejs.org/).
2. **Verify Installation**: Run `node --version` and `npm --version` in your terminal.
3. **Create a Project**: Initialize a project with `npm init` and create a basic file, e.g., `app.js`.

## Node.js Basics

This section covers:

- **Creating a Basic Server**
- **Modules**
- **Package Management**

### Creating a Basic Server

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
```

### Modules

Modules help organize your code.

```javascript
// math.js
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;

// app.js
const math = require('./math');
console.log(math.add(5, 3));
```

### Package Management

Use npm to install packages:

```bash
npm install express
```

## Intermediate Node.js

After mastering the basics, move on to these topics:

- **Express Framework**
- **File System Module**
- **Event Emitters**

### Express Framework

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Express!');
});

app.listen(3000, () => {
    console.log('Express server running on http://localhost:3000');
});
```

### File System Module

```javascript
const fs = require('fs');

fs.writeFile('example.txt', 'Hello, File!', (err) => {
    if (err) throw err;
    console.log('File written!');
});

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
```

### Event Emitters

```javascript
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('event', () => {
    console.log('Event occurred!');
});

emitter.emit('event');
```

## Advanced Node.js

Advance your skills with these topics:

- **Asynchronous Programming**
- **RESTful APIs**
- **WebSocket Communication**

### Asynchronous Programming

```javascript
const fetchData = async () => {
    try {
        const data = await someAsyncFunction();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

fetchData();
```

### RESTful APIs

```javascript
const express = require('express');
const app = express();

app.use(express.json());

let users = [{ id: 1, name: 'Alice' }];

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
});

app.listen(3000, () => {
    console.log('API server running on http://localhost:3000');
});
```

### WebSocket Communication

```javascript
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        ws.send(`Echo: ${message}`);
    });

    ws.send('Welcome to WebSocket Server!');
});
```

## Conclusion

Congratulations on completing this Node.js tutorial! With consistent practice, you’ll soon master Node.js and build powerful server-side applications.

Happy coding!
