const needle = require("needle");
const { BASEPATH, NEWSAPIKEY } = require("../constants");
const { topHeadlineEndpoint, everythingEndpoint } = require("../constants/endpoint");

const headers = {
    "x-api-key": NEWSAPIKEY
}

const getEverything = (request) => {
    const { query } = request;
    return new Promise((resolve, reject) => {
        needle("get", `${BASEPATH}/${everythingEndpoint}?q=${query.q}`, { headers })
            .then(res => resolve(res.body))
            .catch(err => reject({ success: false, error: err }));
    })
}

const topHeadlines = (request) => {
    const { query } = request;
    return new Promise((resolve, reject) => {
        needle("get", `${BASEPATH}/${topHeadlineEndpoint}?country=${query.country}`, { headers })
            .then(res => resolve(res.body))
            .catch(err => reject({ success: false, error: err }));
    });
}

module.exports = {
    getEverything,
    topHeadlines
}