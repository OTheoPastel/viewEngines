const express = require("express");
const router = express.Router();

router.get("/arena/:id",(req,res)=>{

    const id = req.params.id;

    const arena = arena.find(a => a.id == id);

    res.render("arena",{arena});

});

module.exports = router;