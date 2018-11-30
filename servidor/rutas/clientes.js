const router = require("express").Router({mergeParams: true});
const auth = require("../modulos/auth");

router.get("/", [auth, (req, res) => {
    let ip = req.ip;
    const auto = req.db.collection("clientes");
    auto.find({ip: ip}, {pass: 0}).toArray( (err, data) => {
        if ( err ) {
            res.json({rta: err});
            return;
        }

        res.json({rta: data});
    });
}]);

router.post("/", (req, res) => {
    let o = req.body.cliente;
    if ( !o ) {
        res.json({error: "No encontrado objeto cliente"})
        return;
    }
    o.ip = req.ip;
    const clientes = req.db.collection("clientes");
    clientes.insertOne(o, (err, data) => {
        if ( err ) {
            res.json({rta: err});
            return;
        }

        res.json({rta: data.result});
    })
});

module.exports = router;