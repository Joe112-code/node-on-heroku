let profile = require('../src/components/a8/reducers/data/profile.json');

module.exports = (app) => {

    const getCurrentProfile = (req, res) => {
        res.json(profile);
    }
    app.get('/api/profile', getCurrentProfile);


    const updateCurrentProfile = (req, res) => {
        profile = [req.body];
        res.json(profile);
    }
    app.put('/api/profile', updateCurrentProfile);


};