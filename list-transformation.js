//'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3500;
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.status(200).send({ msg: 'Welcome to fp server!'}).end();
});

app.listen(port,(port, (req, res, next) => {
  console.log(`fp server up and running listening on http://localhost:${port}/`);
}));

const l = (item) => console.log(item);
const lh = (item) => {
  // l("========================");
  l(`\n ${item} \n`);
  // l("========================");
};

l(`=======================================================================`);
lh(`=== Bianca Gandolfo - https://slides.com/bgando/f2f-final-day-1#/ ===`);
l(`=======================================================================`);

var _ = {};

lh("=== _.each ===");

_.each = function (obj, iteratee) {

  if (!obj && (typeof obj !== 'object' || Array.isArray(obj))) {
    l(`list is not an object or array`);
  }
  
  if (Array.isArray(obj)) {
    for (let i=0; i < obj.length; i++) {
      // _.each return the item, index and list
      iteratee(obj[i], i, obj); 
    }
  } else {
    for (var key in obj) { 
      iteratee(obj[key], key, obj); 
    }
  } 
};
_.each({ a: 1, b: [5,6,7], c: 3 }, console.log);
// _.each(['Bilal', 'Shakira', 'Dee'], (item) => console.log(item));

function CreateSuspectObject(name) {
  l(name);
  return { name: name, color: name.split(' ')[1], speak() { console.log(`My name is ${this.name}`); } };
}

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
// Following works as _.each doesn't return anything :)
console.log(_.each(suspects, CreateSuspectObject));

lh("=== _.map ===");

const weapons = ['candlestick', 'lead pipe', 'revolver'];
const makeBroken = function (item) { return `broken ${item}`; };

// _.map returns an array
_.map = function (list, iterator) {
  const newArray = [];
  _.each(list, function(item, index, arr) {
    newArray.push(iterator(item, index, arr));
  });

  return newArray;
};

const arr = _.map(weapons, makeBroken);
l(arr);
l(_.map(suspects, CreateSuspectObject));

lh("=== _.filter ===");

const data = [32, 3, 22, 55, 67, 21, 0, 999];
const findBigNumbers = function (item) {
  return item > 50 ? true : false;
};

_.filter = function (list, callback) {
  const newArray = [];
  _.each(list, function (item, index, arr) {
    var result = callback(item, index, arr);
    if(result) { newArray.push(item); }
  });
  return newArray;
};

l(_.filter(data, findBigNumbers)); 

lh("=== () => {} ===");
l(`=> fn, doesnt have its own its this keyword, the context in => fn points to the this in parents scope`);
l(`=> fn, doesnt have its own value for arguments object-like-array i.e no binding of arguments object, unlike regular fn()`);
l(`=> fn, strict mode doesnt apply`);
l(`=> fn, call or apply dont bind this, the this value is ignored on invocation`);
l(`=> fn, not suited for object methods as this value doesnt get bound`);
l(`=> fn, Object.defineProperty() doesnt work as this value doesnt get bound`);
l(`=> fn, new operator doesnt work, as => fn cannot be a construction fn`);
l(`=> fn, the yield keyword may not be used in an arrow function's body (except when permitted within functions further nested within it). As a consequence, arrow functions cannot be used as generators`)
l(`=> fn, best suited for non-method invocation`);
l(`=> fn, good for Promise / thenify chain`);

l(() => {return 3 + 4});

l(`=== projection ===`);


l('\n --------------------------------------------------------------------- \n');