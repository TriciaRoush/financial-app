const User = require("../models/User.js")
module.exports = function(app) {
    app.post("/api/user", function(req, res) {
        console.log(req.body);
        const name = req.body.name;
        User.create({name: name}).then(function() {
            res.json({msg: "Data recieved!"})
        })
        
    })
}