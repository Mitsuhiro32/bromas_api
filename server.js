const express = require("express");
const RutasBroma = require("./server/routes/jokes.routes");
const app = express();

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

RutasBroma(app);

app.listen(8000, () => console.log("El servidor está encendido en el puerto 8000"));
