const os = require("os");

//info about current user
const user = os.userInfo();
// console.log(user);

//system uptime

const time = os.uptime();
const myOs = {
    name: os.type(),
    freeMem: os.freemem(),
    totalMem: os.totalmem(),
    release: os.release(),
};
console.log(myOs);
