const axios = require('axios');
const URL = process.env.MAIN_URL;

axios.interceptors.request.use(
        config => {
                    config.headers = {
                                    "X-Riot-Token": process.env.API_KEY
                                }
                    return config;
                },
        err => Promise.reject(err)

)
//==========================================================================================
const getAccount = (req,res) =>
     axios.get(`${URL}summoner/v4/summoners/by-name/${req.body.username}`)
        .then(results => axios.get(`${URL}league/v4/entries/by-summoner/${results.data.id}`)
        .then(data => res.status(200).send([...data.data,results.data])));

const getCurrentGame = (req,res) =>
    axios.get(`${URL}spectator/v4/active-games/by-summoner/${req.body.id}`)
        .then(results => res.status(200).send(results.data.participants));

const leagueStatus = (req,res) =>
    axios.get(`${URL}status/v3/shard-data`)
        .then(results => res.status(200).send(results.data));

const getCurrentChampRot = (req,res) =>
    axios.get(`${URL}platform/v3/champion-rotations`)
        .then(results => res.status(200).send(results.data))
//==========================================================================================

module.exports={
    getAccount,
    getCurrentGame,
    leagueStatus,
    getCurrentChampRot
}
