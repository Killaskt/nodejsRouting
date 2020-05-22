const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active')

// Serialize Url
console.log(myUrl.href);
console.log(myUrl.href.toString());

// Host - root domain
console.log(myUrl.host) // gives port data as well
console.log(myUrl.hostname) // port name not given

// Path name
console.log(myUrl.pathname)

// Serialized Query
console.log(myUrl.search)

// Serialized Query into params obj
console.log(myUrl.searchParams)

// add params
myUrl.searchParams.append('abc', '123')
console.log(myUrl.href);
console.log(myUrl.searchParams)


// loop params
myUrl.searchParams.forEach((value, name, x) => console.log(`param ${x}: ${name} : ${value}`))

