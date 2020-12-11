const { request } = require("http");
const db = require("../models")
module.exports = function(app) {
    app.post("/api/user", function(req, res) {
        console.log(req.body);
        // const firstName = req.body.name;
        // const retirement = req.body.retirement;
        // const creditScore = req.body.score;
        // const financeGoal = req.body.goal; 
        // const currentDebt = req.body.debt;
        db.User.create({...req.body}).then(function() {
            res.json({msg: "Data recieved!"})
        })
        
    })
}

