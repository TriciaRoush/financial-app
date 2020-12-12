const { request } = require("http");
const db = require("../models")
module.exports = function(app) {
    app.post("/api/user", function(req, res) {
        db.User.create({...req.body}).then(function(data) {
            res.json(data)
        })
    })

    app.get("/api/user", function(req, res) {
        db.User.findAll({id:req.params.userid}).then(function(user) {
            res.json(user)
        })
    })
}
