const getRandomInt = (max) => {
    console.log(max);
    let random = Math.floor(Math.random() * max + 1);
    if (random > max) {
      getRandomInt(max);
    } else {
      return random;
    }
  };


  module.exports = getRandomInt;