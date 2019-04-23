'use strict';
var l = (item) => console.log(item);

var _ = {};
_.each = function (list, callback) {

  if (!list && (typeof list !== 'object' || Array.isArray(list))) {
    l(`list is not an object or array`);
    return false;
  }
  
  if (!list.hasOwnProperty('length')) {
    for (var prop in list) { callback(list[prop]); }
  } else {
    for (var k in Object.keys(list)) { callback(list[k]); }
  }
};

// _.each({ a: 1, b: [5,6,7], c: 3 }, (item) => console.log(item));
// _.each(['Bilal', 'Shakira', 'Dee'], (item) => console.log(item));

function CreateSuspectObject(name) {
  l(name);
  return {
    name: name,
    color: name.split(' ')[1],
    speak() { console.log(`My name is ${name}`); }
  };
}

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

var objs = _.each(suspects, CreateSuspectObject);
l(objs);

