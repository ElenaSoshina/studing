Promise.resolve(1)
  .then(x => x + 1)
  .then(x => { throw x })
  .then(x => console.log(x))
  .catch(err => console.log(err))
  .then(x => Promise.resolve(1))
  .catch(err => console.log(err))
  .then(x => console.log(x));








  function requestWithRetry(fn, retries) {
  
  }
  
  const count = 3;
  
  const fetchStub = getFetchStub(count)
  
  requestWithRetry(fetchStub, count)
  .then(() => { console.log("finally resolve")})
  .catch(() => { console.log("finally reject")})
  
  function getFetchStub(retries) {
      let count = 0;
      return function() {
          console.log("call f");
          return new Promise((res, rej) => {
              setTimeout(function() {
                  if (count < retries - 1) {
                      console.log("reject");
                      rej();
                      count++;
                  } else {
                      console.log("resolve");
                      res();
                  }
              }, 100);
          })
      }
  }