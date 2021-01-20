const express = require('express');
const app = express();
const hbs = require('hbs');
require("./hbs/helpers")

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public")); // todo lo que esta queda publico para todos

// Express HBS engine
hbs.registerPartials(__dirname + "/views/parciales");
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render("home", { //renderiza el archivo hbs
        nombre: "Chino", //Cambia el html(home.hbs)       
    })
});
app.get("/about", (req, res) => {
    res.render("about")
})

app.listen(port, () => {
    console.log(`escuchando peticiones del puerto ${port}`);
})