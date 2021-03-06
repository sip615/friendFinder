const path = require("path");
const friends = [
	{
		name: "Sunnaayyyy",
		score: 20,
		city: "Batton Rouge, LA"
	},
	{
		name: "Ethan",
		score: 75,
		city: "Thunderbay, ON"
	}
];

module.exports = app => {
	app.get("/api/friends", (req, res) => {
		res.json(friends);
	});
	app.post("/api/friends", (req, res) => {
		let bestMatch = {
			name: "",
			photo: "",
			friendDifference: Infinity
		};
		let userData = req.body;
		let userScores = userData.scores;
		let totalDifference;
		for (var i = 0; i < friends.length; i++) {
			let currentFriend = friends[i];
			totalDifference = 0;
			console.log(currentFriend.name);
			for (var j = 0; j < currentFriend.length; j++) {
				let currentFriendScore = currentFriend.scores[j];
				let currentUserScore = userScores[j];
				totalDifference += Math.abs(
					parseInt(currentUserScore) - parseInt(currentFriendScore)
				);
			}
			if (totalDifference <= bestMatch.friendDifference) {
				bestMatch.name = currentFriend.name;
				bestMatch.photo = currentFriend.photo;
				bestMatch.friendDifference = totalDifference;
			}
		}
		friends.push(userData);
		res.json(bestMatch);
	});
};
