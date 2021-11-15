//let tweets = require('../reducers/data/tweets.json');
const dao = require('../../../db/tweets/tweet-dao');

module.exports = (app) => {
    const findAllTweets = (req, res) =>
        dao.findAllTweets()
            .then(tweets => res.json(tweets));

    const postNewTweet = (req, res) =>
        dao.createTweet(req.body)
            .then((insertedTweet) => res.json(insertedTweet));

    const deleteTweet = (req, res) => dao.deleteTweet(req.params.id)
        .then((status) => res.send(status));

    const likeTweet = (req, res) => dao.updateTweet(req.params.id, req.body)
        .then(status => res.send(status));

    //
    //
    //
    // const likeTweet = (req, res) => {
    //     const id = req.params['id'];
    //     tweets = tweets.map(tweet => {
    //         if (tweet._id === id) {
    //             if (tweet.liked === true) {
    //                 tweet.liked = false;
    //                 tweet.stats.likes--;
    //             } else {
    //                 tweet.liked = true;
    //                 tweet.stats.likes++;
    //             }
    //             return tweet;
    //         } else {
    //             return tweet;
    //         }
    //     });
    //     res.sendStatus(200);
    // }
    // app.put('/api/tweets/:id/like', likeTweet);
    //
    //
    // // const findAllTweets = (req, res) => {
    // //     res.json(tweets);
    // // }
    //
    //
    // const postNewTweet = (req, res) => {
    //     const newTweet = {
    //         _id: (new Date()).getTime() + '',
    //         "topic": "Web Development",
    //         "userName": "ReactJS",
    //         "verified": false,
    //         "handle": "ReactJS",
    //         "time": "2h",
    //         "avatar-image": "/images/react-blue.png",
    //         "logo-image": "/images/react-blue.png",
    //         "stats": {
    //             "comments": 123,
    //             "retweets": 234,
    //             "likes": 345
    //         },
    //         ...req.body,
    //     };
    //     tweets = [
    //         newTweet,
    //         ...tweets
    //     ];
    //     res.json(tweets);
    // }
    //
    //
    //
    // const deleteTweet = (req, res) => {
    //     const id = req.params['id'];
    //     tweets = tweets.filter(tweet => tweet._id !== id);
    //     res.sendStatus(200);
    // }

    app.put('/api/tweets/:id/like', likeTweet);
    app.delete('/api/tweets/:id', deleteTweet);
    app.post('/api/tweets', postNewTweet);
    app.get('/api/tweets', findAllTweets);

};

