//script 1
const script1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (Math.random() < 0.6) {
      resolve("data after resolved");
    } else {
      reject("err after rejected");
    }
  }, 1000);
});

script1.then((data) => console.log(data)).catch((err) => console.log(err));

//script 2
new Promise((res, rej) => {
  res("script 2");
})
  .then((data1) => {
    console.log("From then1");
    return data1;
  }) //promise's data from resolve
  .then((data2) => {
    console.log("From then2");
    return data2;
  }) //from thenable object/promise
  .then((data3) => {
    console.log("From then3");
    return data3;
  })
  .then((data4) => console.log("From then4", data4));

//script 3
async function asyncFunc() {
  try {
    if (Math.random() < 0.6) {
      const res = await new Promise((resolve) => {
        setTimeout(() => {
          console.log("Resolved from script 3");
          resolve("demo data");
        }, 2000);
      });
      console.log("Res : ", res);
    } else {
      const rej = await new Promise((_, reject) => {
        setTimeout(() => {
          console.log("Rejected from script 3");
          reject("demo err");
        }, 2000);
      })
        .then((data) => console.log(data))
        .catch((err) => {
          console.log(err);
          return err;
        });
      console.log("REj : ", rej);
    }
  } catch (error) {
    console.log(error);
  }
}
asyncFunc();
/*
//script 4
//fetch without outer promise
fetch("https://api.freeapi.app/api/v1/public/books")
  .then((json) => json.json())
  .then((res) => {
    const data = res.data.data;
    const idsBooks = data.map((item) => item.id);
    console.log(data);
    console.log(idsBooks);
  })
  .catch((err) => console.log(err));

//fetch with async/await
async function fetchData() {
  try {
    const response = await fetch("https://api.freeapi.app/api/v1/public/books");
    const data = await response.json();
    const books = data.data.data;
    console.log("Books:", books);
  } catch (error) {
    console.log(error);
  }
}
fetchData();

//script 5
let promise1 = new Promise(function (res, rej) {
  setTimeout(() => res("P1 resolved"), 2000);
});

let promise2 = new Promise((res, rej) => {
  setTimeout(() => res("P2 resolved"), 2000);
});
//takes array of promises , returns array of values after all prmomises resolved
Promise.all([promise1, promise2])
  .then((val) => console.log(val))
  .catch((err) => console.log(err));

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P3 resolved"), 3000);
});

Promise.race([promise1, promise2, promise3])
  .then((val) => console.log("Race:", val))
  .catch((err) => console.log(err));
*/
//fetch wrapped in promose
function fetchDatafromApi(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          reject(new Error("Err ! :", response.statusCode));
        }
        const data = response.json();
        return data;
      })
      .then((data) => resolve(data.data))
      .catch((err) => reject(err));
  });
}
fetchDatafromApi('https://api.freeapi.app/api/v1/public/books')
.then(data => console.log('Data fetched: ', data))
.catch(err => console.error('Err in fetching ', err))
