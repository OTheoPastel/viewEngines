const express = require("express")
const router = express.Router()

const receitas = {
1:{
    nome:"Bolo de Chocolate",
    ingredientes:[
        "2 xícaras de farinha",
        "1 xícara de açúcar",
        "1 xícara de chocolate em pó",
        "2 ovos",
        "1 xícara de leite"
    ],
    preparo:[
        "Misture os ingredientes secos",
        "Adicione os ovos e o leite",
        "Misture bem",
        "Asse por 35 minutos a 180°C"
    ]
},
2:{
    nome:"Panqueca",
    ingredientes:[
        "1 xícara de farinha",
        "1 ovo",
        "1 xícara de leite"
    ],
    preparo:[
        "Misture tudo no liquidificador",
        "Despeje na frigideira",
        "Doure dos dois lados"
    ]
},
3:{
    nome:"Macarrão Alho e Óleo",
    ingredientes:[
        "Macarrão",
        "3 dentes de alho",
        "Azeite",
        "Sal"
    ],
    preparo:[
        "Cozinhe o macarrão",
        "Refogue o alho no azeite",
        "Misture com o macarrão"
    ]
}
}

router.get("/",(req,res)=>{


    res.render("receita",{receitas})

})

module.exports = router