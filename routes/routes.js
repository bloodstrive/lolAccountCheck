const { getAccount,getCurrentGame,getCurrentChampRot,leagueStatus}=require('../controllers/leagueController')

module.exports= app => {
    app.get(`/api/v1/acc`,getAccount)
    app.get(`/api/v1/current`,getCurrentGame)
    app.get(`/api/v1/rotation`,getCurrentChampRot)
    app.get(`/api/v1/status`,leagueStatus)
}
