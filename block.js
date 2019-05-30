'use strict';

// The purpose of this example is to show
// how you can block the event loop with JavaScript.
// There is 3 routes
// / respond with Hello, World text
// /block uses JavaScript while for 5 seconds
// /non-block uses setTimeout for 5 seconds

// Do the following
// curl localhost:3000/
// You get Hello, World

// curl localhost:3000/block and curl localhost:3000/ at once
// your server is blocked now, because of while in JavaScript
// JavaScript code is executed in the main thread, where event loop
// that's why it blocks, because of while execution

// curl localhost:3000/non-block and curl:localhost:3000/ at once
// you will get Hello, World and after 5 seconds I am done
// in this case you don't block the server
// because operation thrown in thread-pool
// freeing the main thread for other connections

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello, World'));

app.get('/block', (req, res) => {
  const end = Date.now() + 5000;
  setTimeout(() => {
    while (Date.now() < end) {
      const doSomethingHeavyInJavaScript = 1 + 2 + 3;
    }
    console.log('Done!');
    res.send('Blocking done!');
  }, 2000);
});

app.get('/non-block', (req, res) => {
  // Imagine that setTimeout is IO operation
  // setTimeout is a native implementation, not the JS
  setTimeout(() => res.send('Unblocked already!'), 100);
});

app.listen(3300, () => console.log('app listening on port 3000'));