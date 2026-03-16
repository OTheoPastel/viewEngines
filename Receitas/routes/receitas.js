const express = require("express")
const router = express.Router()

const receitas = {
    1: {
        id: 1,
        nome: "Bolo de Chocolate",
        descricao: "Um bolo simples e fofinho",
        tempo_preparo: "50 minutos",
        dificuldade: "Fácil",
        ingredientes: [
            "2 xícaras de farinha",
            "1 xícara de açúcar",
            "1 xícara de chocolate em pó",
            "2 ovos",
            "1 xícara de leite"
        ],
        preparo: [
            "Misture os ingredientes secos (farinha, açúcar e chocolate em pó)",
            "Adicione os ovos e o leite",
            "Misture bem até ficar homogêneo",
            "Despeje em uma forma untada",
            "Asse por 35 minutos a 180°C"
        ]
    },
    2: {
        id: 2,
        nome: "Panqueca",
        descricao: "Panquecas rápidas para café da manhã",
        tempo_preparo: "15 minutos",
        dificuldade: "Muito Fácil",
        ingredientes: [
            "1 xícara de farinha",
            "1 ovo",
            "1 xícara de leite",
            "1 colher de chá de fermento",
            "Sal a gosto"
        ],
        preparo: [
            "Misture tudo no liquidificador",
            "Deixe a massa descansar por 5 minutos",
            "Despeje a massa em uma frigideira quente",
            "Doure dos dois lados",
            "Sirva quente com geleia ou mel"
        ]
    },
    3: {
        id: 3,
        nome: "Macarrão Alho e Óleo",
        descricao: "Receita italiana bem simples",
        tempo_preparo: "20 minutos",
        dificuldade: "Muito Fácil",
        ingredientes: [
            "500g de macarrão",
            "3 dentes de alho",
            "200ml de azeite",
            "Sal a gosto",
            "Pimenta vermelha (opcional)"
        ],
        preparo: [
            "Cozinhe o macarrão em água fervendo com sal",
            "Refogue o alho fatiado no azeite",
            "Escorra o macarrão",
            "Misture o macarrão com o azeite e alho",
            "Tempere com sal e pimenta a gosto"
        ]
    }
}

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const receita = receitas[id];

    if (!receita) {
        return res.status(404).render("error", { message: "Receita não encontrada" });
    }

    res.render("receitas", { receita });
})

module.exports = router