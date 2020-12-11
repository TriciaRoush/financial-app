const db = require("../models")
module.exports = function(app) {
    app.post("/api/user", function(req, res) {
        console.log(req.body);
        const name = req.body.name;
        const retirement = req.body.retirement;
        const creditScore = req.body.score;
        const financeGoal = req.body.goal; 
        const currentDebt = req.body.debt;
        db.User.create({name: name,retirement: retirement,creditScore: creditScore,financeGoal: financeGoal, currentDebt: currentDebt}).then(function() {
            res.json({msg: "Data recieved!"})
        })
        
    })
}

