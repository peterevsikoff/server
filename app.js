const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
    origin: '*'
}));

// определяем обработчик для маршрута "/"
app.get("/", function(request, response){
     
    // отправляем ответ
    response.send("<h2>Привет Expressreghteht!</h2>");
});

app.get("/api/tests", async (request, response) => {
    response.send(["jgft"]);
});

// начинаем прослушивать подключения на 3000 порту
app.listen(3000);