const express = require("express")
const router = express.Router()

const receitas = [
{
    id:1,
    nome:"Bolo de Chocolate",
    descricao:"Um bolo simples e fofinho"
},
{
    id:2,
    nome:"Panqueca",
    descricao:"Panquecas rápidas para café da manhã"
},
{
    id:3,
    nome:"Macarrão Alho e Óleo",
    descricao:"Receita italiana bem simples"
}
]

router.get("/", (req,res)=>{
    res.render("index",{receitas})
})

module.exports = router