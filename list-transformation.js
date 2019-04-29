'use strict';

const l = (item) => console.log(item);
const lh = (item) => {
  // l("========================");
  l(`\n ${item} \n`);
  // l("========================");
};

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

l('\n --------------------------------------------------------------------- \n');