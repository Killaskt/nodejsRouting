// os mod gives info about device, operating system, etc
const os = require('os')

// idea: maybe an app that checks if you can run a certain game??

// platform
console.log(os.platform()); // Win32 -> windows

// CPU Arch 
console.log(os.arch())

// CPU core info
console.log(os.cpus());

// Free Memory
console.log(os.freemem())

// Total mem
console.log(os.totalmem())

// home dir
console.log(os.homedir())

//uptime 
console.log(os.uptime())