const USER = require("../data/db-data");

exports.getMatchedUsers = (req,res,next) => {
 const wildCard = req.params.str;
 console.log(wildCard);
 const matched = Object.values(USER).filter(user => {
     return user.userName.substring(0,3).toUpperCase() === wildCard.toUpperCase();
 })
 res.status(200).json(matched);
}