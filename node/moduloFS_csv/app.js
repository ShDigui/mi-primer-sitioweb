const fs = require("fs");

fs.readFile('\aprendices.csv', 'UTF-8', (err, data) => {
    if (err) {
        console.log("error: " , err);
    }
    else {
        for(let i = 0; i < data.length; i++) {
            if (data.charAt(i) === ';') {
                data = data.replace(";", " ");
            }
        }
        console.log(data);
    }
});

// form2
console.log ("forma2")

fs.readFile('\aprendices2.csv', 'UTF-8', (err, data) => {
    if (err) {
        console.log("error: " , err);
    }
    else {
        for(let i = 0; i < data.length; i++) {
            if (data.charAt(i) === ';') {
                data = data.replace(";", " ");
            }
        }
        console.log(data);
    }
});