const firstMethod = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      console.log('first method completed');
      resolve({a: 1, b: 2});
    }, 2000);
  })
}

const secondMethod = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`second method completed. data from prev promise : ${data.a}`, data);
      resolve({...data, c: 3, d: 4});
    }, 2000);
  });
};

const thirdMethod = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`third method completed. data from prev promise : ${[data.c]}`, data);
      resolve({...data, e: 5, f: 6});
    }, 1000);
  });
}

firstMethod()
  .then(secondMethod)
  .then(thirdMethod);

