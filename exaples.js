function o1() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

function on(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

function on2(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(i, j);
    }
  }
}
