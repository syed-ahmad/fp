var fn1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('fn1 completed');
      resolve();
      return 'fn1 completed bingo!'
    }, 2000);
  });
};

var result = await fn1();
console.log(result);