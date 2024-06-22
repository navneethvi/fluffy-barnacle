function a() {
  let x = 10;
  return function() {
    let y = 20;
    return function() {
      let z = 10;
      return function() {
        console.log(x);
      }
    };
  };
}

a()()()();
