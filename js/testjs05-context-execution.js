let i = 1;
function a() {
  let j = 2;
  b();
  function b(){
    {
      let k = 3;
    }
    let l = 4;
    console.log(l);
    console.log(k);
  }
}
a();

// 1 context execution global: i et a()
// 2 context execution a(): j et b()
// 3 context execution b(): l
// 4 context execution {}: k
