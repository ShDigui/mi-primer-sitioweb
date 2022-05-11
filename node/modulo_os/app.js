const os = require ("os");


console.log ("identificacion del equipo");
console.log("procesador: " , os.cpus());
console.log("arquitcetura: " , os.platform(), os.arch());
console.log("memoria disponilbe: ", os.freemem());
console.log("usuario: ", os.userInfo([]));
console.log("version: ", os.version());
console.log( os.uptime());