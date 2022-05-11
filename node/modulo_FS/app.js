const fs =require("fs");
 
 // mi primer calback

fs.readFile('\prueba.txt', 'UTF-8', (err, data) =>  {
    if (err) {
        console.log("error: ", err)
    }
    else{
        console.log(data);
    }
});

let insertText = "HOLA. yo soy de node.js";
fs.writeFile('\prueba.txt', insertText, function(err){
    if (err) {
        console.log("error: ", err);
    }
    else {
        console.log("operacion finalizada con exito");
    }
});