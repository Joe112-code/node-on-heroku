const model = require('./tweet-model');

const findAllTweets = () => model.find();
const createTweet = (newTweet) => model.create(newTweet);
const deleteTweet = (id) => model.deleteOne({_id: id});
const updateTweet = (id, tweet) => model.updateOne({_id: id}, {$set: tweet});


// findAllTweets
//     .then(tweets=>console.log(tweets));




module.exports = {
    findAllTweets, createTweet,
    deleteTweet, updateTweet
};



