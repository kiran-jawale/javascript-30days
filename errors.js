//script 1
//task 1
function throwError() {
    throw new Error('Intentional Error 😉');
}
try {
   throwError() 
} catch (error) {
    console.error('Err caught: ', error);
}
//task 2
function divide(a, b) {
    if(b === 0) throw new Error('Dividing by Zero 😉')
    return a/b
}
try {
    console.log(divide(10, 0))
} catch (error) {
    console.error('Err caught: ', error);
} finally {
    console.log('Note, dividing by zero will throw err 😉')
}

//script 2
class CustomError extends Error {
    constructor(message) {
        super(message); //calling constructor of Error class
        this.name = 'CustomError'
    }
}

function customer() {
    throw new CustomError('Custom Error thrown 😉')
}
try {
    customer();
} catch (err) {
    console.error('Err caught :', err.name, err.message)
}

//task 5
function validateInput(input) {
    if(input === "") throw new CustomError('Input shouldn\'t empty')
    if(typeof input !== "string") throw new CustomError('Input must be string')
    return input;
}

try {
    validateInput(8)
} catch (err) {
    console.error('Err caught: ', err.name, err.message)
}

//script 3
function randomPromise() {
    return new Promise((resolve, reject) => {
        if(Math.random() < 0.6) {
        resolve('Randomly Resolved')
    } else {
        reject('Randomly Rejected')
    }
    });
}
/*
randomPromise().then(result => console.log(result))
                .catch(err => console.log('Err caught 😉',err));
*/
//task 7
async function randomPromiseUse() {
    try {
        const result = await randomPromise();
        console.log(result)
    } catch (error) {
        console.log('Err caught 😉', error)
    }
}
randomPromiseUse();

//script 4
fetch('https://example.com/api/v1/endpoint')
.then(response => {
    if(!response.ok) {
        throw new CustomError('Network Response wasn\'t ok')
    }
    return response.json()})
.then(data => console.log(data))
.catch(err => {
    if(err.code === 'ENOTFOUND') {
        console.error('Network Error')
    }
    console.error('Err caught 😉', err)})

//task 9
async function fetchWithErrHandling() {
    try {
        const result = await fetch('https://example.com')
        if(!result.ok) throw new CustomError('Network response was\'t ok')
        if(!result.headers.get('Content-Type').includes('application/json')) {
            throw new CustomError('DATA ISN\'T JSON')
        }
        const data = await result.json()
        console.log(data)
    } catch (error) {
        console.error('Err caught :',error)
    }
}
fetchWithErrHandling()
console.error('Error method')