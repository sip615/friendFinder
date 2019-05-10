const path = require("path")

const friends=[{
    name: "Sunnaayyyy",
    score: 20,
    city: "Batton Rouge, LA"
},{
    name: "Ethan",
    score: 75,
    city: "Thunderbay, ON"
}];

module.export = (app) => {
    app.get("/api/friends", (req, res) =>{
        res.json(friends)
    })
    app.post("/api/friends", (req, res) => {
        friends.push(req.body);
        res.json(req.body);
    })
    app.get("/api/friends/:name", (req, res) =>{
        let friend = friends.map(friend => friend.name == req.params.name)
        friend ? res.json(friend) : res.send("None Found")
    })
}