const express = require("express");
const router = express.Router();

const arenas = [
    {
        id: 1,
        nome: "Arena Coliseu",
        local: "Roma, Itália",
        capacidade: "50.000",
        preco: 250.00,
        img: "images/coliseu.jpeg"
    },
    {
        id: 2,
        nome: "Arena Valhalla",
        local: "Oslo, Noruega",
        capacidade: "20.000",
        preco: 150.00,
        img: "images/vahala.jpg"
    }
];

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const arena = arenas.find(a => a.id == id);

    if (!arena) {
        return res.status(404).render("error", { message: "Arena não encontrada" });
    }

    res.render("arena", { arena });
});

module.exports = router;