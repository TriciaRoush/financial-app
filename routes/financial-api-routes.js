const db = require("../models")
module.exports = function(app) {
    app.post("/api/user", function(req, res) {
        console.log(req.body);
        const name = req.body.name;
        db.User.create({name: name}).then(function() {
            res.json({msg: "Data recieved!"})
        })
        
    })
}

