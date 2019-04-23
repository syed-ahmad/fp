'use strict';
// ============================
// === _.each               ===
// ============================

var l = (item) => console.log(item);

var _ = {};
_.each = function (list, callback) {

  if (!list && (typeof list !== 'object' || Array.isArray(list))) {
    l(`list is not an object or array`);
  }
  
  if (!Array.isArray(list)) {
    for (var key in list) { callback(list[key], key, list); }
  } else {
    for (let i=0; i < list.length; i++) {
      // _.each return the item, index and list
      callback(list[i], i, list); 
    }
  } 
};
// _.each({ a: 1, b: [5,6,7], c: 3 }, (item) => console.log(item));
// _.each(['Bilal', 'Shakira', 'Dee'], (item) => console.log(item));

function CreateSuspectObject(name) {
  return { name: name, color: name.split(' ')[1], speak() { console.log(`My name is ${this.name}`); } };
}

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
// Following works as _.each doesn't return anything :)
console.log(_.each(suspects, CreateSuspectObject));

// ============================
// === _.map                ===
// ============================
const weapons = ['candlestick', 'lead pipe', 'revolver'];
const makeBroken = function (item) {
  return `broken ${item}`;
};

// _.map returns an array
_.map = function (list, iterator) {
  if (!list && (typeof list !== 'object' || Array.isArray(list))) {
    l(`list is not an object or array`);
  }

  const newArray = [];
  _.each(list, function(item, index, arr) {
    newArray.push(iterator(item, index, arr));
  });

  return newArray;
};

const arr = _.map(weapons, makeBroken);
l(arr);
l(_.map(suspects, CreateSuspectObject));