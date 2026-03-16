const express = require("express");
const router = express.Router();

const arenas = [
    {
        id:1,
        nome:"Arena Coliseu",
        local:"Roma, Itália",
        capacidade:"50.000",
        img:"images/coliseu.jpeg"
    },
    {
        id:2,
        nome:"Arena Valhalla",
        local:"Oslo, Noruega",
        capacidade:"20.000",
        img:"images/vahala.jpg"
    },
    {
        id:3,
        nome:"Arena Dragão",
        local:"Porto, Portugal",
        capacidade:"52.000",
        img:"images/dragão.jpeg"
    }
];

router.get("/", (req,res)=>{
    res.render("index",{arenas});
});



module.exports = router;