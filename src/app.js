const express = require("express");
const app = express();
const cors = require("cors");

port = process.env.port || 3000;
port = 3001;

app.use(express.json());

app.use(cors());

//rotas personalizadas no orcamentoRoutes
const orcamentoRoutes = require("./routes/orcamentoRoutes");

app.use("/orcamento", orcamentoRoutes);

app.get("/", (req,res) => {
  res.send("Rota teste");
})

app.listen(port, () => {
    console.log("Servidor iniciado na porta: " + port);
});