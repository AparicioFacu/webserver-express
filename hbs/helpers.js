const hbs = require('hbs');
//helpers

hbs.registerHelper("getAnio", () => { //si no existe la variable en render, lo busca en el helpers como aqui
    return new Date().getFullYear();
});
hbs.registerHelper("capitalizar", (texto) => { //si no existe la variable en render, lo busca en el helpers como aqui
    let palabra = texto.split(" ");
    palabra.forEach((palabra, index) => {
        palabra[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabra.join(" ");
});